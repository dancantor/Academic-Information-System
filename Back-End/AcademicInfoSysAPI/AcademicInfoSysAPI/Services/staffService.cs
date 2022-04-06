using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.Repository;
using System;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Services
{
    public interface IStaffService
    {
        Task<staffDTO> GetStaffInfoForID(string id);
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
            return new staffDTO
            {
                Cnp = userInfo.Cnp,
                Id = userInfo.StaffId,
            };
        }
    }
}