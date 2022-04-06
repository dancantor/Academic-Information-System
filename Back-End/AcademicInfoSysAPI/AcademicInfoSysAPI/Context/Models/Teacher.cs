using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.TempDir
{
    public partial class Teacher
    {
        public Teacher()
        {
            OptionalDisciplines = new HashSet<OptionalDiscipline>();
        }

        public int? GenericId { get; set; }
        public int TeacherId { get; set; }
        public string Cnp { get; set; }
        public bool? IsChief { get; set; }

        public virtual GenericUser Generic { get; set; }
        public virtual ICollection<OptionalDiscipline> OptionalDisciplines { get; set; }
    }
}
