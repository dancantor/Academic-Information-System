using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AcademicInfoSysAPI.TempDir;
using AcademicInfoSysAPI.dbContext;
using AcademicInfoSysAPI.Services;
using AcademicInfoSysAPI.DTOs;

namespace AcademicInfoSysAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : Controller
    {
        private readonly IStudentService _studentService;

        public StudentsController(IStudentService service)
        {
            _studentService = service;
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
                return Ok(student);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
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
        
    }
}
