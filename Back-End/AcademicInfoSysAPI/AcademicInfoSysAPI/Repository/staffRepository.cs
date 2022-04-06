using AcademicInfoSysAPI.dbContext;
using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.TempDir;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Repository
{

    public interface IStaffRepository
    {
        Task<staff> GetInfo(int staffId);
    }
    public class StaffRepository : IStaffRepository
    {
        private readonly AcademicInformationSystemContext _dbContext;

        public StaffRepository(AcademicInformationSystemContext someContext)
        {
            _dbContext = someContext;
        }

        public async Task<staff> GetInfo(int staffid)
        {
            return await _dbContext.staff.Where(x => x.StaffId == staffid).FirstOrDefaultAsync();
        }
    }
}
