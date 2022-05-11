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
    }
}
