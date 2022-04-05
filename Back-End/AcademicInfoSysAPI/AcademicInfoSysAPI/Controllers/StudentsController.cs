using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AcademicInfoSysAPI.TempDir;
using AcademicInfoSysAPI.dbContext;

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
            //validations


            //call to the service
            if (_studentService.GetStudentInfoForID(stud_ID))
            {
                return Ok(/*someDTO for all information*/);
            }
        }
        
    }
}
