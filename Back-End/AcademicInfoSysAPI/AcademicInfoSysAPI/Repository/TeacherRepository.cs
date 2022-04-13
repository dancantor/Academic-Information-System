using AcademicInfoSysAPI.Context;
using AcademicInfoSysAPI.Context.Models;
using AcademicInfoSysAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Repository
{

    public interface ITeacherRepository
    {
        Task<Teacher> GetInfo(int TeacherId);
        Task<bool> UpdateTeacherInfoForID(TeacherDTO data);
    }
    public class TeacherRepository : ITeacherRepository
    {
        private readonly AcademicInfoSysAPI_dbContext _dbContext;

        public TeacherRepository(AcademicInfoSysAPI_dbContext someContext)
        {
            _dbContext = someContext;
        }

        public async Task<Teacher> GetInfo(int TeachId)
        {
            return await _dbContext.Teachers.Where(x => x.GenericId == TeachId).FirstOrDefaultAsync();
        }
        public async Task<bool> UpdateTeacherInfoForID(TeacherDTO data)
        {
            var teacher_to_update = await _dbContext.Teachers.Where(x => x.TeacherId == data.Id).FirstOrDefaultAsync();
            if (teacher_to_update != null)
            {
                teacher_to_update.Cnp = data.CNP;
                teacher_to_update.FirstName = data.first_name;
                teacher_to_update.LastName = data.last_name;
                teacher_to_update.Age = data.age;
                await _dbContext.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
