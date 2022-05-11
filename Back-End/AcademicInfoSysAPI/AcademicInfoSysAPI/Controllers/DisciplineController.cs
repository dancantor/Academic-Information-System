using AcademicInfoSysAPI.Services;
using Microsoft.AspNetCore.Mvc;
using AcademicInfoSysAPI.DTOs;
using System.Threading.Tasks;
using System;

namespace AcademicInfoSysAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DisciplineController : Controller
    {
        private IDisciplineService disciplineService;
        public DisciplineController(IDisciplineService service)
        {
            disciplineService = service;
        }

        [HttpGet("{year}")]
        public async Task<IActionResult> GetAllDisciplinesForYear(int year)
        {

            if (year != 1 && year != 2 && year != 3)
                return BadRequest();
            try
            {
                var disciplines = await disciplineService.GetAllDisciplinesForYear(year);
                if (disciplines == null)
                {
                    return NotFound();
                }
                return Ok(disciplines);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet]
        public async Task<IActionResult> GetAllOptionalDisciplines()
        {
            try
            {
                var disciplines = await disciplineService.GetAllOptionalDisciplines();
                if (disciplines == null)
                {
                    return NotFound();
                }
                return Ok(disciplines);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
