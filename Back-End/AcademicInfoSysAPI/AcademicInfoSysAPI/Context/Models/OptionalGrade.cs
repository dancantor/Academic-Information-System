using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.Context.Models
{
    public partial class OptionalGrade
    {
        public int OptionalDisciplineId { get; set; }
        public int StudId { get; set; }
        public int? Value { get; set; }

        public virtual OptionalDiscipline OptionalDiscipline { get; set; }
        public virtual Student Stud { get; set; }
    }
}
