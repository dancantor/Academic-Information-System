using AcademicInfoSysAPI.Context;
using AcademicInfoSysAPI.Context.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Repository
{
    public interface IUserRepository
    {
        Task<GenericUser> CheckUser(string username);
    }
    public class UserRepository : IUserRepository
    {
        private readonly AcademicInfoSysAPI_dbContext _dbContext;

        public UserRepository(AcademicInfoSysAPI_dbContext some_context)
        {
            _dbContext = some_context;
        }

        public async Task<GenericUser> CheckUser(string username)
        {
            return await _dbContext.GenericUsers.Where(x => x.Username == username).FirstOrDefaultAsync();

        }
    }
}
