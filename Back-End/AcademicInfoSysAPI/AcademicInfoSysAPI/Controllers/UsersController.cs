using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AcademicInfoSysAPI.Services;
using AcademicInfoSysAPI.DTOs;

namespace AcademicInfoSysAPI.Controllers
{   
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IUserService _userService;

        
        public UsersController(IUserService context)
        {
            _userService = context;
        }

        [HttpPost]
        public async Task<IActionResult> CheckLogin([FromBody] LoginDTO data)
        {
            if (data.username == null || data.password == null)
                return BadRequest();
            try
            {
                var role = await _userService.CheckLogin(data);
                return Ok(role);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
