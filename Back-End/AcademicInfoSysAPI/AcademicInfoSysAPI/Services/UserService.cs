using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.Repository;
using System;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Services
{

    public interface IUserService
    {
        Task<string> CheckLogin(LoginDTO data);
    }
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository some_repo)
        {
            _userRepository = some_repo;
        }

        public async Task<string> CheckLogin(LoginDTO data)
        {
            var userLogged = await _userRepository.CheckUser(data.username);
            if (userLogged == null)
                throw new Exception("User not found in the database");
            return userLogged.UserRole;
        }
        public User<User> GetUserInfo()
        {

        }
    }
}
