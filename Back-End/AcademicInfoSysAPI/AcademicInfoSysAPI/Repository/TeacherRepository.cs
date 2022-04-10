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
            var teacher_to_update = await _dbContext.Teachers.Where(x => x.GenericId == data.TeacherId).FirstOrDefaultAsync();
            if (teacher_to_update != null)
            {
                teacher_to_update.Cnp = data.CNP;
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
