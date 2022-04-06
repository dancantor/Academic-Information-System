using AcademicInfoSysAPI.dbContext;
using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.TempDir;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Repository
{

    public interface ITeacherRepository
    {
        Task<Teacher> GetInfo(int TeacherId);
    }
    public class TeacherRepository : ITeacherRepository
    {
        private readonly AcademicInformationSystemContext _dbContext;

        public TeacherRepository(AcademicInformationSystemContext someContext)
        {
            _dbContext = someContext;
        }

        public async Task<Teacher> GetInfo(int TeachId)
        {
            return await _dbContext.Teachers.Where(x => x.TeacherId == TeachId).FirstOrDefaultAsync();
        }
    }
}
