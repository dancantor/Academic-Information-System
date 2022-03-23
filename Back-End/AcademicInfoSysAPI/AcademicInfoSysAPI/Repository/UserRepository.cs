using AcademicInfoSysAPI.Context;
using AcademicInfoSysAPI.Context.Models;
using AcademicInfoSysAPI.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Repository
{
    public interface IUserRepository
    {
        Task<User> CheckUser(string username);
    }
    public class UserRepository : IUserRepository
    {
        private readonly UserContext _dbContext;

        public UserRepository(UserContext some_context)
        {
            _dbContext = some_context;
        }

        public async Task<User> CheckUser(string username)
        {
            return await _dbContext.Users.Where(x => x.Username == username)
                .FirstOrDefaultAsync<User>();
        }
    }
}
