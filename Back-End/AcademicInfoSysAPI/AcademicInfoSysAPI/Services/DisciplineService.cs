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
        Task<List<DisciplineWithIdDTO>> GetAllOptionalDisciplines();
        Task<bool> InsertTemporaryOptional(OptionalTemporaryDTO optional);
        Task<List<DisciplineWithIdDTO>> GetOptionalDisciplinesSortedByPriority(int studentId);
        Task<List<CourseDTO>> GetCoursesForStudent(int stud_id, int year);
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
        public async Task<List<DisciplineWithIdDTO>> GetAllOptionalDisciplines()
        {
            var optionalDisciplines = await _disciplineRepository.GetOptionalDisciplines(3);
            List<DisciplineWithIdDTO> disciplines = new List<DisciplineWithIdDTO>();
            foreach (var discipline in optionalDisciplines)
            {
                disciplines.Add(new DisciplineWithIdDTO
                {
                    ProfessorName = discipline.Teacher.FirstName + " " + discipline.Teacher.LastName,
                    NrOfCredits = (int)discipline.NoCredits,
                    Name = discipline.Name,
                    id = discipline.Id
                });
            }
            return disciplines;
        }

        public async Task<bool> InsertTemporaryOptional(OptionalTemporaryDTO optional)
        {
            if (await _disciplineRepository.InsertTemporaryOptional(new Context.Models.OptionalDisciplineList
            {
                OptionalDisciplineId = optional.disciplineID,
                StudId = optional.studID,
                OrderPreference = optional.order
            }))
            {
                return true;
            }
            return false;
               
        }

        public async Task<List<DisciplineWithIdDTO>> GetOptionalDisciplinesSortedByPriority(int studentId)
        {
            var optionalDisciplines = await _disciplineRepository.GetOptionalDisciplinesSortedByPriority(studentId);
            List<DisciplineWithIdDTO> disciplines = new List<DisciplineWithIdDTO>();
            foreach (var discipline in optionalDisciplines)
            {
                disciplines.Add(new DisciplineWithIdDTO
                {
                    ProfessorName = discipline.Teacher.FirstName + " " + discipline.Teacher.LastName,
                    NrOfCredits = (int)discipline.NoCredits,
                    Name = discipline.Name,
                    id = discipline.Id
                });
            }
            return disciplines;
        }

        public async Task<List<CourseDTO>> GetCoursesForStudent(int stud_id, int year)
        {
            // this is for the OptionalDisciplineList that has 3 ids as attributes
            var enrolled_courses_with_ids = await _disciplineRepository.GetAssignedOptionalDisciplinesList(stud_id);

            // a list that contains the optionalDiscipine of the student
            var enrolled_courses = await _disciplineRepository.GetAssignedOptionalDisciplines(enrolled_courses_with_ids);
            var standardCourses = await _disciplineRepository.GetStandardDisciplines(year);
            var courses = new List<CourseDTO>();

            foreach (var course in standardCourses)
            {
                courses.Add(new CourseDTO
                {
                    Name = course.Name,
                    NrOfCredits = (int)course.NoCredits,
                    ProfessorName = course.Teacher.LastName + " " + course.Teacher.FirstName,
                    Type = "Mandatory"
                });
            }

            foreach (var course in enrolled_courses)
            {
                courses.Add(new CourseDTO 
                {
                    Name = course.Name,
                    NrOfCredits = (int)course.NoCredits,
                    ProfessorName = course.Teacher.LastName + " " + course.Teacher.FirstName,
                    Type = "Optional"
                });
            }
            return courses;
        }
    }
}
