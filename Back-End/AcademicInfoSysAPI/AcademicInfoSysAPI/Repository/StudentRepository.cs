﻿using AcademicInfoSysAPI.Context;
using AcademicInfoSysAPI.Context.Models;
using AcademicInfoSysAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Repository
{

    public interface IStudentRepository
    {
        Task<Student> GetInfo(int StudId);
        Task<bool> UpdateStudentInfoForID(StudentDTO data);
    }
    public class StudentRepository : IStudentRepository
    {
        private readonly AcademicInfoSysAPI_dbContext _dbContext;

        public StudentRepository(AcademicInfoSysAPI_dbContext someContext)
        {
            _dbContext = someContext;
        }

        public async Task<Student> GetInfo(int StudId)
        {
            return await _dbContext.Students.Where(x => x.GenericId == StudId).FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateStudentInfoForID(StudentDTO data)
        {
            var student_to_update = await _dbContext.Students.Where(x => x.GenericId == data.StudentId).FirstOrDefaultAsync();
            if(student_to_update != null)
            {
                student_to_update.Cnp = data.CNP;
                // rest of the updates
                await _dbContext.SaveChangesAsync();
                return true;
            } else
            {
                return false;
            }
        }
    }
}
