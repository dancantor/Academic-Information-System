namespace AcademicInfoSysAPI.DTOs
{
    public class GradeDTO
    {
        public string CourseName { get; set; }
        public int Grade { get; set; }
    }

    public class GradeToPostDTO
    {
        public int studId { get; set; }
        public int courseId { get; set; }
        public int value { get; set; }
    }
}
