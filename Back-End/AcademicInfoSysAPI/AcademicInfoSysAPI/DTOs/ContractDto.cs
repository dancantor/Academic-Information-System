using Microsoft.AspNetCore.Http;

namespace AcademicInfoSysAPI.DTOs
{
    public class ContractDto
    {
        public int studId { get; set; }
        public IFormFile contract { get; set; }
    }
}
