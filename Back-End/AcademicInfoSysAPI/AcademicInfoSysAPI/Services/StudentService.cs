namespace AcademicInfoSysAPI.Services
{
    public interface IStudentService
    {
        Task</*someDTO*/> GetStudentInfoForID(DTO data);
    }
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _studentRepository;

        public StudentService(IStudentRepository some_repo)
        {
            _studentRepository = some_repo;
        }

        Task</*someDTO*/> GetStudentInfoForID(DTO data);
        {
            //no need to search for the student as it is already logged in the site
        }
    }
}
