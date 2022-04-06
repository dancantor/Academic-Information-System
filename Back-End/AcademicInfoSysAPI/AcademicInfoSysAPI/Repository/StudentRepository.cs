using AcademicInfoSysAPI.dbContext;
using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.TempDir;
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
        private readonly AcademicInformationSystemContext _dbContext;

        public StudentRepository(AcademicInformationSystemContext someContext)
        {
            _dbContext = someContext;
        }

        public async Task<Student> GetInfo(int StudId)
        {
            return await _dbContext.Students.Where(x => x.StudId == StudId).FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateStudentInfoForID(StudentDTO data)
        {
            var student_to_update = await _dbContext.Students.Where(x => x.StudId == data.StudentId).FirstOrDefaultAsync();
            if(student_to_update != null)
            {
                student_to_update.Cnp = data.Cnp;
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
