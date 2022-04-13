using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.Repository;
using System;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Services
{
    public interface IStaffService
    {
        Task<staffDTO> GetStaffInfoForID(string id);
        Task<bool> UpdateStaffInfoForID(staffDTO data);
    }
    public class StaffService : IStaffService
    {
        private readonly IStaffRepository _staffRepository;

        public StaffService(IStaffRepository some_repo)
        {
            _staffRepository = some_repo;
        }
        public async Task<staffDTO> GetStaffInfoForID(string id)
        {
            var userInfo = await _staffRepository.GetInfo(Int32.Parse(id));
            if (userInfo == null)
            {
                return null;
            }
            return new staffDTO
            {
                CNP = userInfo.Cnp,
                Id = (int)userInfo.StaffId,
                first_name = userInfo.FirstName,
                last_name = userInfo.LastName,
                age = (int)userInfo.Age
            };
        }
        public async Task<bool> UpdateStaffInfoForID(staffDTO data)
        {
            if (await _staffRepository.UpdateStaffInfoForID(data))
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}