using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.TempDir
{
    public partial class GenericUser
    {
        public GenericUser()
        {
            Students = new HashSet<Student>();
            Teachers = new HashSet<Teacher>();
            staff = new HashSet<staff>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Type { get; set; }

        public virtual ICollection<Student> Students { get; set; }
        public virtual ICollection<Teacher> Teachers { get; set; }
        public virtual ICollection<staff> staff { get; set; }
    }
}
