using AcademicInfoSysAPI.Controllers;
using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.Repository;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Services
{
    public interface IStudentService
    {
        Task<StudentDTO> GetStudentInfoForID(string id);
        Task<bool> UpdateStudentInfoForID(StudentDTO data);
        Task<EnrollmentDTO> GetEnrollmentForStudent(int stud_id);
        Task<bool> EnrollStudentToYear(int year, int stud_id);

        Task<List<GradeDTO>> GetGradesForStudent(int stud_id);
    }
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _studentRepository;

        public StudentService(IStudentRepository some_repo)
        {
            _studentRepository = some_repo;
        }

        public async Task<bool> EnrollStudentToYear(int year, int stud_id)
        {
            if (await _studentRepository.EnrollStudentToYear(year, stud_id))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<EnrollmentDTO> GetEnrollmentForStudent(int stud_id)
        {
            var student = await _studentRepository.GetInfoWithStudId(stud_id);
            EnrollmentDTO enrollment = new() { year1 = student.Year1, year2 = student.Year2.Value};
            return enrollment;
        }

        public async Task<StudentDTO> GetStudentInfoForID(string id)
        {
            var userInfo = await _studentRepository.GetInfo(Int32.Parse(id));
            if (userInfo == null) {
                return null;
            }
            return new StudentDTO 
            {
                CNP = userInfo.Cnp,
                Id = userInfo.StudId,
                first_name = userInfo.FirstName,
                last_name = userInfo.LastName,
                age = (int)userInfo.Age
            };

        }

        public async Task<bool> UpdateStudentInfoForID(StudentDTO data)
        {
            if( await _studentRepository.UpdateStudentInfoForID(data))
            {
                return true;
            } else
            {
                return false;
            }

        }

        public async Task<List<GradeDTO>> GetGradesForStudent(int stud_id)
        {
            if (stud_id < 1)
                throw new NotFoundException("Student Id must be positive");

            var userInfo = await _studentRepository.GetInfoWithStudId(stud_id);
            if (userInfo == null)
            {
                throw new NotFoundException("Student with the given id not found");
            }
            return await _studentRepository.GetGradesForStudent(stud_id);
        }
    }
}