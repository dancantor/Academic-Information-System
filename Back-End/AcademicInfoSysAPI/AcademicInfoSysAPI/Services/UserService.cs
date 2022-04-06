using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.Repository;
using System;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Services
{

    public interface IUserService
    {
        Task<LoginResponseDto> CheckLogin(LoginDTO data);
    }
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository some_repo)
        {
            _userRepository = some_repo;
        }

        public async Task<LoginResponseDto> CheckLogin(LoginDTO data)
        {
            var userLogged = await _userRepository.CheckUser(data.username);
            if (userLogged == null || !BCrypt.Net.BCrypt.Verify(data.password, userLogged.Password))
                throw new Exception("User not found in the database");
            return new LoginResponseDto
            {
                id = userLogged.Id,
                type = userLogged.Type
            };
        }
    }
}
