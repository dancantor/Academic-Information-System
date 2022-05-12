using AcademicInfoSysAPI.Context;
using AcademicInfoSysAPI.Context.Models;
using AcademicInfoSysAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Repository
{

    public interface IStudentRepository
    {
        public Task<Student> GetInfo(int StudId);
        public Task<Student> GetInfoWithStudId(int StudId);
        public Task<bool> UpdateStudentInfoForID(StudentDTO data);
        public Task<bool> EnrollStudentToYear(int year, int StudId);

        public Task<List<GradeDTO>> GetGradesForStudent(int stud_id);
        Task<bool> InsertContractForStudent(Contract contractDto);
    }
    public class StudentRepository : IStudentRepository
    {
        private readonly AcademicInfoSysAPI_dbContext _dbContext;

        public StudentRepository(AcademicInfoSysAPI_dbContext someContext)
        {
            _dbContext = someContext;
        }

        public async Task<bool> EnrollStudentToYear(int year, int StudId)
        {
            var student = await _dbContext.Students.FirstOrDefaultAsync(x => x.StudId == StudId);
            if (student == null)
                return false;
            else
            {
                if (student.Year1 != 0)
                    student.Year2 = year;
                else
                    student.Year1 = year;
            }
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<Student> GetInfo(int StudId)
        {
            return await _dbContext.Students.Where(x => x.GenericId == StudId).FirstOrDefaultAsync();
        }

        public async Task<Student> GetInfoWithStudId(int StudId)
        {
            return await _dbContext.Students.Where(x => x.StudId == StudId).FirstOrDefaultAsync();
        }

        public async Task<bool> InsertContractForStudent(Contract contract)
        {
            _dbContext.Contracts.Add(contract);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UpdateStudentInfoForID(StudentDTO data)
        {
            var student_to_update = await _dbContext.Students.Where(x => x.StudId == data.Id).FirstOrDefaultAsync();
            if(student_to_update != null)
            {
                student_to_update.Cnp = data.CNP;
                student_to_update.FirstName = data.first_name;
                student_to_update.LastName = data.last_name;
                student_to_update.Age = data.age;
                await _dbContext.SaveChangesAsync();
                return true;
            } else
            {
                return false;
            }
        }

        public async Task<List<GradeDTO>> GetGradesForStudent(int stud_id)
        {
            List<OptionalGrade> optionalGrades = await _dbContext.OptionalGrades.Where(x => x.StudId == stud_id).ToListAsync();
            List<StandardGrade> standardGrades = await _dbContext.StandardGrades.Where(x => x.StudId == stud_id).ToListAsync();
            
            List<GradeDTO> grades = new();

            foreach (var grade in optionalGrades)
            {
                var courseName = await _dbContext.OptionalDisciplines.FirstOrDefaultAsync(x => x.Id == grade.OptionalDisciplineId);
                grades.Add(new GradeDTO { CourseName = courseName.Name, Grade = grade.Value.Value });
            }

            foreach (var grade in standardGrades)
            {
                var courseName = await _dbContext.StandardDisciplines.FirstOrDefaultAsync(x => x.Id == grade.DisciplineId);
                grades.Add(new GradeDTO { CourseName = courseName.Name, Grade = grade.Value.Value });
            }

            return grades;
        }
    }
}
