using AcademicInfoSysAPI.DTOs;
using AcademicInfoSysAPI.Repository;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AcademicInfoSysAPI.Services
{
    public interface ITeacherService
    {
        Task<TeacherDTO> GetTeacherInfoForID(string id);
        Task<bool> UpdateTeacherInfoForID(TeacherDTO data);
        Task<bool> ProposeOptional(ProposedOptionalDTO optional);
        Task<bool> PostGrade(GradeToPostDTO post);
        Task<List<OptionalCourseForApproveDTO>> GetCourses();
        Task ApproveCourses(List<OptionalCourseForApproveDTO> courses);
    }
    public class TeacherService : ITeacherService
    {
        private readonly ITeacherRepository _teacherRepository;

        public TeacherService(ITeacherRepository some_repo)
        {
            _teacherRepository = some_repo;
        }
        public async Task<TeacherDTO> GetTeacherInfoForID(string id)
        {
            var userInfo = await _teacherRepository.GetInfo(Int32.Parse(id));
            if (userInfo == null)
            {
                return null;
            }
            return new TeacherDTO
            {
                CNP = userInfo.Cnp,
                Id = userInfo.TeacherId,
                first_name = userInfo.FirstName,
                last_name = userInfo.LastName,
                age = (int)userInfo.Age,
                isChief = (bool)userInfo.IsChief
            };
        }

        public async Task<bool> PostGrade(GradeToPostDTO post)
        {
            if (await _teacherRepository.PostGrade(post))
            {
                return true;
            }
            return false;
        }

        public async Task<bool> ProposeOptional(ProposedOptionalDTO optional)
        {
            if (await _teacherRepository.ProposeOptional(optional))
            {
                return true;
            }
            return false;

        }

        public async Task<bool> UpdateTeacherInfoForID(TeacherDTO data)
        {
            if (await _teacherRepository.UpdateTeacherInfoForID(data))
            {
                return true;
            }
            return false;
        }

        public async Task<List<OptionalCourseForApproveDTO>> GetCourses()
        {
            return await _teacherRepository.GetCourses();
        }

        public async Task ApproveCourses(List<OptionalCourseForApproveDTO> courses)
        {
            foreach (var course in courses)
            {
                await _teacherRepository.ApproveCourse(course);
            }
        }
    }
}