using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AcademicInfoSysAPI.Services;
using AcademicInfoSysAPI.DTOs;

namespace AcademicInfoSysAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachersController : Controller
    {
        private readonly ITeacherService _teacherService;

        public TeachersController(ITeacherService service)
        {
            _teacherService = service;
        }

        // GET: Teacher
        [HttpGet("{teacher_ID}")]
        public async Task<IActionResult> GetTeacherInfoForID(string teacher_ID)
        {

            if (string.IsNullOrEmpty(teacher_ID))
                return BadRequest();
            try
            {
                var teacher = await _teacherService.GetTeacherInfoForID(teacher_ID);
                if (teacher == null)
                {
                    return NotFound();
                }
                return Ok(teacher);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost]
        public async Task<IActionResult> UpdateTeacherInfo([FromBody] TeacherDTO data)
        {
            if (await _teacherService.UpdateTeacherInfoForID(data))
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        
        [HttpPost("propose")]
        public async Task<IActionResult> ProposeOptional([FromBody] ProposedOptionalDTO optional)
        {
            if (await _teacherService.ProposeOptional(optional))
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("grade")]
        public async Task<IActionResult> PostGrade([FromBody] GradeToPostDTO data)
        {
            if (await _teacherService.PostGrade(data))
            {
                return Ok();
            } 
        }
        
        [HttpGet("courses")]
        public async Task<IActionResult> GetCoursesToApprove()
        {
            var courses = await _teacherService.GetCourses();
            if (courses.Count != 0)
            {
                return Ok(courses);
            }
            return BadRequest();
        }

        [HttpPost("approve")]
        public async Task<IActionResult> ApproveCourses([FromBody] List<OptionalCourseForApproveDTO> courses)
        {
            await _teacherService.ApproveCourses(courses);
           
            return NoContent();
        }
    
}
