using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Helpers
{
    public interface IFileStorageService
    {
        Task DeleteFile(string fileRoute, string containerName);
        Task<string> SaveFile(string containerName, IFormFile file);
        Task<string> EditFile(string containerName, IFormFile file, string fileRoute);
    
    }
}
