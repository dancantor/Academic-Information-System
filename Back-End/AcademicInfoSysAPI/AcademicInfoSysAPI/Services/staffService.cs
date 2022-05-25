using AcademicInfoSysAPI.Context.Models;
using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Services
{
    public interface IStaffService
    {
        Task<staffDTO> GetStaffInfoForID(string id);
        Task<bool> UpdateStaffInfoForID(staffDTO data);
        Task<bool> DistributeOptionals();
    }
    public class StaffService : IStaffService
    {
        private readonly IStaffRepository _staffRepository;
        private readonly IStudentRepository _studentRepository;
        private readonly IDisciplineRepository _disciplineRepository;

        public StaffService(IStaffRepository some_repo, IStudentRepository studentRepository,
            IDisciplineRepository disciplineRepository)
        {
            _staffRepository = some_repo;
            _studentRepository = studentRepository;
            _disciplineRepository = disciplineRepository;
        }

        public async Task<bool> DistributeOptionals()
        {
            await _staffRepository.DeleteOptionalsThatAreNotApproved();
            var optionals = await _disciplineRepository.GetOptionalDisciplines(1);
            optionals.AddRange(await _disciplineRepository.GetOptionalDisciplines(2));
            optionals.AddRange(await _disciplineRepository.GetOptionalDisciplines(3));
            List<OptionalDiscipline> optionalDisciplines = optionals;
            Dictionary<int, int> counterDict = new Dictionary<int, int>();
            List<Student> students = await _studentRepository.GetAllStudents();
            List<StudentWithMeanDto> studentWithMeans = new List<StudentWithMeanDto>();
            foreach (var student in students)
            {
                studentWithMeans.Add(new StudentWithMeanDto
                {
                    StudentId = student.StudId,
                    Mean = await GetMeanForStudent(student.StudId)
                });
            }
            studentWithMeans = studentWithMeans.OrderByDescending(s => s.Mean).ToList();
            foreach(var student in studentWithMeans)
            {
                List<OptionalDiscipline> optionalsSorted = await _disciplineRepository.GetOptionalDisciplinesSortedByPriority(student.StudentId);
                int counter = 0;
                foreach (var optional in optionalsSorted)
                {
                    if (counter == 2)
                        break;
                    if (counterDict.ContainsKey(optional.Id) && counterDict[optional.Id] >= optional.NoStudents)
                        continue;
                    if (counterDict.ContainsKey(optional.Id))
                    {
                        counterDict[optional.Id]++;
                    }
                    else
                    {
                        counterDict[optional.Id] = 1;
                    }
                    await _disciplineRepository.MakeOptionalFinal(student.StudentId, optional.Id);
                    counter++;
                }
            }
            return true;

        }

        private async Task<double> GetMeanForStudent(int stud_id)
        {
            List<GradeWithCreditsDto> grades = await this._studentRepository.GetGradesWithCredits(stud_id);
            double denomitor = 0;
            double numerator = 0;
            foreach (GradeWithCreditsDto grade in grades)
            {
                numerator += grade.Value * grade.Credits;
                denomitor += grade.Credits;
            }
            if (denomitor > 0)
                return numerator / denomitor;
            else
                return 0;
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