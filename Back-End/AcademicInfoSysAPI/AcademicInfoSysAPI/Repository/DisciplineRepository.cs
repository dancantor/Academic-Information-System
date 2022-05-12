using AcademicInfoSysAPI.Context;
using AcademicInfoSysAPI.Context.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Repository
{
    public interface IDisciplineRepository
    {
        Task<List<OptionalDiscipline>> GetOptionalDisciplines(int year);
        Task<List<StandardDiscipline>> GetStandardDisciplines(int year);
        Task<bool> InsertTemporaryOptional(OptionalDisciplineList odl);
        Task<List<OptionalDiscipline>> GetOptionalDisciplinesSortedByPriority(int studentId);
    }
    public class DisciplineRepository : IDisciplineRepository
    {
        private readonly AcademicInfoSysAPI_dbContext _dbContext;

        public DisciplineRepository(AcademicInfoSysAPI_dbContext someContext)
        {
            _dbContext = someContext;
        }
        public async Task<List<OptionalDiscipline>> GetOptionalDisciplines(int year)
        {
            return await _dbContext.OptionalDisciplines.Where(x => x.CoresopondingYear == year).Include(x => x.Teacher).ToListAsync();
        }

        public async Task<List<StandardDiscipline>> GetStandardDisciplines(int year)
        {
            return await _dbContext.StandardDisciplines.Where(x => x.CorespondingYear == year).Include(x => x.Teacher).ToListAsync();
        }

        public async Task<List<OptionalDiscipline>> GetOptionalDisciplinesSortedByPriority(int studentId)
        {
            return await _dbContext.OptionalDisciplines.Join(
                _dbContext.OptionalDisciplineLists, od => od.Id, odl => odl.OptionalDisciplineId,
                (od, odl) => new { optionalDiscipline = od, optionalDisciplineList = odl }).Join(
                _dbContext.Students, odl => odl.optionalDisciplineList.StudId, s => s.StudId,
                (oddl, s) => new { discipline_list = oddl, stud = s}).Where(result => result.stud.StudId == studentId)
                .OrderBy(result => result.discipline_list.optionalDisciplineList.OrderPreference)
                .Select(result => new OptionalDiscipline
                {
                    Id = result.discipline_list.optionalDiscipline.Id,
                    Name = result.discipline_list.optionalDiscipline.Name,
                    Teacher = result.discipline_list.optionalDiscipline.Teacher,
                    NoCredits = result.discipline_list.optionalDiscipline.NoCredits,
                }).ToListAsync();
                
        }

        public async Task<bool> InsertTemporaryOptional(OptionalDisciplineList odl)
        {
            _dbContext.Add(odl);
            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}
