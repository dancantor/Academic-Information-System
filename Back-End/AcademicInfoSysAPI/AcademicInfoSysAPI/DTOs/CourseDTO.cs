namespace AcademicInfoSysAPI.DTOs
{
    public class CourseDTO
    {
        public string Name { get; set; }
        public string ProfessorName { get; set; }
        public int NrOfCredits { get; set; }
        public string Type { get; set; }
    }

    public class CourseDTOSimple
    {
        public int Id { get; set; }
        public string name { get; set; }
    }
    
    public class OptionalCourseForApproveDTO
    {
        public string Name { get; set; }
        public string ProfessorName { get; set; }
        public int NrOfCredits { get; set; }
        public int NrOfStudents { get; set; }
        public int correspondingYear { get; set; }
        public bool isApproved { get; set; }
    }
}
