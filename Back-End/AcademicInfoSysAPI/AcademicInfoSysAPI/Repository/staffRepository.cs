using AcademicInfoSysAPI.Context;
using AcademicInfoSysAPI.Context.Models;
using AcademicInfoSysAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Repository
{

    public interface IStaffRepository
    {
        Task<staff> GetInfo(int staffId);
        Task<bool> UpdateStaffInfoForID(staffDTO data);
        Task<bool> DeleteOptionalsThatAreNotApproved();
    }
    public class StaffRepository : IStaffRepository
    {
        private readonly AcademicInfoSysAPI_dbContext _dbContext;

        public StaffRepository(AcademicInfoSysAPI_dbContext someContext)
        {
            _dbContext = someContext;
        }

        public async Task<staff> GetInfo(int staffid)
        {
            return await _dbContext.staff.Where(x => x.GenericId == staffid).FirstOrDefaultAsync();
        }
        public async Task<bool> UpdateStaffInfoForID(staffDTO data)
        {
            var staff_to_update = await _dbContext.staff.Where(x => x.StaffId == data.Id).FirstOrDefaultAsync();
            if (staff_to_update != null)
            {
                staff_to_update.Cnp = data.CNP;
                staff_to_update.FirstName = data.first_name;
                staff_to_update.LastName = data.last_name;
                staff_to_update.Age = data.age;
                await _dbContext.SaveChangesAsync();
                return true;
            }
            else
            {
                return false;
            }

        }

        public async Task<bool> DeleteOptionalsThatAreNotApproved()
        {
            var optionalsToBeDeleted = await _dbContext.OptionalDisciplines.Where(optional => !optional.IsApproved ?? false).ToListAsync();
            var discipliesLists = await _dbContext.OptionalDisciplineLists.ToListAsync();
            discipliesLists.RemoveAll(disc => optionalsToBeDeleted.All(optional => optional.Id != disc.OptionalDisciplineId));
            var optionalGrades = await _dbContext.OptionalGrades.ToListAsync();
            optionalGrades.RemoveAll(grade => optionalsToBeDeleted.All(optional => optional.Id != grade.OptionalDisciplineId));
            foreach (var discipline in discipliesLists)
            {
                _dbContext.OptionalDisciplineLists.Remove(discipline);
            }
            foreach (var grade in optionalGrades)
            {
                _dbContext.OptionalGrades.Remove(grade);
            }
            foreach(var optional in optionalsToBeDeleted)
            {
                _dbContext.OptionalDisciplines.Remove(optional);
            }
            

            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}
