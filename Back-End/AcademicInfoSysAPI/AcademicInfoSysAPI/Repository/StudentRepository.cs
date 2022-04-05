using AcademicInfoSysAPI.dbContext;

namespace AcademicInfoSysAPI.Repository
{

    public interface IStudentRepository
    {
        Task</*some_otherDTO*/> GetInfo(string param1, int param2);
    }
    public class StudentRepository : IStudentRepository
    {
        private readonly AcademicInformationSystemContext _dbContext;
        public Task<object> GetInfo(string param1, int param2)
        {
            throw new System.NotImplementedException();
        }
    }
}
