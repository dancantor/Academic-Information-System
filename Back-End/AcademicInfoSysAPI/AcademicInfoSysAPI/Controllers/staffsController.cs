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

namespace AcademicInfoSysAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class staffsController : Controller
    {
        private readonly IStaffService _staffService;

        public staffsController(IStaffService service)
        {
            _staffService = service;
        }

        // GET: Staff
        [HttpGet("{staff_ID}")]
        public async Task<IActionResult> GetStaffInfoForID(string staff_ID)
        {

            if (string.IsNullOrEmpty(staff_ID))
                return BadRequest();
            try
            {
                var staff = await _staffService.GetStaffInfoForID(staff_ID);
                return Ok(staff);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

    }
}
