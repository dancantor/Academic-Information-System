using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AcademicInfoSysAPI.Services;
using AcademicInfoSysAPI.DTOs;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http.Headers;
using AcademicInfoSysAPI.Helpers;

namespace AcademicInfoSysAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : Controller
    {
        private readonly IStudentService _studentService;
        private readonly IFileStorageService storageService;

        public StudentsController(IStudentService service, IFileStorageService storageService)
        {
            _studentService = service;
            this.storageService = storageService;
        }

        // GET: Students
        [HttpGet("{stud_ID}")]
        public async Task<IActionResult> GetStudentInfoForID(string stud_ID)
        {

            if (string.IsNullOrEmpty(stud_ID))
                return BadRequest();
            try
            {
                var student = await _studentService.GetStudentInfoForID(stud_ID);
                if (student == null)
                {
                    return NotFound();
                }
                return Ok(student);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

        // GET enrolled years for a student
        [HttpGet("enroll/{stud_id}")]
        public async Task<IActionResult> GetAllEnrolledYearsForStudent([FromRoute] int stud_id)
        {
            if (stud_id < 1)
            {
                return BadRequest("Id must be a positive integer");
            }
            var response = await _studentService.GetEnrollmentForStudent(stud_id);
            return Ok(response);
        }

        [HttpPost("enroll/{stud_id}")]
        public async Task<IActionResult> EnrollStudentToYear([FromBody] int year, [FromRoute] int stud_id)
        {
            if (await _studentService.EnrollStudentToYear(year, stud_id))
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> UpdateStudentInfo([FromBody] StudentDTO data)
        {
            if (await _studentService.UpdateStudentInfoForID(data))
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet("grades/{stud_id}")]
        public async Task<IActionResult> GetGradesForStudent([FromRoute]int stud_id)
        {
            try
            {
                List<GradeDTO> response = await _studentService.GetGradesForStudent(stud_id);
                if(response == null)
                    return NoContent();
                else
                    return Ok(response);
            }
            catch(BadRequestException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        [HttpPost("upload-contract")]
        public async Task<IActionResult> SaveFileToDisk([FromForm] ContractDto contract)
        {

            if (contract.contract != null)
            {
                await storageService.SaveFile("contracts", contract.contract);
                await _studentService.InsertContractForStudent(contract);
            }
            return Ok();

        }

    }
}
