using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.TempDir
{
    public partial class OptionalDisciplineList
    {
        public int OptionalDisciplineId { get; set; }
        public int StudId { get; set; }
        public int? OrderPreference { get; set; }

        public virtual OptionalDiscipline OptionalDiscipline { get; set; }
        public virtual Student Stud { get; set; }
    }
}
