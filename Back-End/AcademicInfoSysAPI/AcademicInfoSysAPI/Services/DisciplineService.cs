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
        Task<List<CurriculumDTO>> GetAllOptionalDisciplines();
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

        public async Task<List<CurriculumDTO>> GetAllOptionalDisciplines()
        {
            var optionalDisciplines = await _disciplineRepository.GetOptionalDisciplines(3);
            List<CurriculumDTO> disciplines = new List<CurriculumDTO>();
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
    }
}
