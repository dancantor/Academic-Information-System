using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.Repository;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Services
{
    public interface IDisciplineService
    {
        Task<List<CurriculumDTO>> GetAllDisciplinesForYear(int id);
        Task<List<AssignedCourseDTO>> GetAssignedOptionalDisciplines(int stud_id);
    }
    public class DisciplineService : IDisciplineService
    {
        private readonly IDisciplineRepository _disciplineRepository;

        public DisciplineService(IDisciplineRepository some_repo)
        {
            _disciplineRepository = some_repo;
        }
        public async Task<List<CurriculumDTO>> GetAllDisciplinesForYear(int id)
        {
            var optionalDisciplines = await _disciplineRepository.GetOptionalDisciplines(id);
            var standardDisciplines = await _disciplineRepository.GetStandardDisciplines(id);
            List<CurriculumDTO> disciplines = new List<CurriculumDTO>();

            foreach (var discipline in standardDisciplines)
            {
                disciplines.Add(new CurriculumDTO
                {
                    ProfessorName = discipline.Teacher.FirstName + " " + discipline.Teacher.LastName,
                    NrOfCredits = (int)discipline.NoCredits,
                    Name = discipline.Name
                });
            }

            foreach (var discipline in optionalDisciplines)
            {
                disciplines.Add(new CurriculumDTO
                {
                    ProfessorName = discipline.Teacher.FirstName + " " + discipline.Teacher.LastName,
                    NrOfCredits = (int)discipline.NoCredits,
                    Name = discipline.Name
                });
            }
            return disciplines;

        }
        public async Task<List<AssignedCourseDTO>> GetAssignedOptionalDisciplines(int stud_id)
        {
            // this is for the OptionalDisciplineList that has 3 ids as attributes
            var enrolled_courses_with_ids = await _disciplineRepository.GetAssignedOptionalDisciplinesList(stud_id);
            
            // a list that contains the optionalDiscipine of the student
            var enrolled_courses = await _disciplineRepository.GetAssignedOptionalDisciplines(enrolled_courses_with_ids);

            return await _disciplineRepository.GetAssignedOptionalDisciplinesForDTO(enrolled_courses);
            
        }
    }
}
