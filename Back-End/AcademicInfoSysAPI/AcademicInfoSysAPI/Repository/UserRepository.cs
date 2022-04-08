﻿using AcademicInfoSysAPI.dbContext;
using AcademicInfoSysAPI.TempDir;
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
        private readonly AcademicInformationSystemContext _dbContext;

        public UserRepository(AcademicInformationSystemContext some_context)
        {
            _dbContext = some_context;
        }

        public async Task<GenericUser> CheckUser(string username)
        {
            return await _dbContext.GenericUsers.Where(x => x.Username == username).FirstOrDefaultAsync();

        }
    }
}
