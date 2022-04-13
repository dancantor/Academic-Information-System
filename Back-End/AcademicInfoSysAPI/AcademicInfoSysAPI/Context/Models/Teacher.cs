using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.Context.Models
{
    public partial class Teacher
    {
        public Teacher()
        {
            OptionalDisciplines = new HashSet<OptionalDiscipline>();
        }

        public int? GenericId { get; set; }
        public int TeacherId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public string Cnp { get; set; }
        public bool? IsChief { get; set; }

        public virtual GenericUser Generic { get; set; }
        public virtual ICollection<OptionalDiscipline> OptionalDisciplines { get; set; }
    }
}
