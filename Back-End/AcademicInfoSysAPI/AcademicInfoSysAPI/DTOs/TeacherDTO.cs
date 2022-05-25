namespace AcademicInfoSysAPI.DTOs
{
    public class TeacherDTO
    {

            public int Id { get; set; }
            public string first_name { get; set; }
            public string last_name { get; set; }
            public int age { get; set; }
            public string CNP { get; set; }

            public bool isChief { get; set; }

    }
}
