﻿using System;
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

    }
}
