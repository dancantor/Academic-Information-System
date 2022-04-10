using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.Context.Models
{
    public partial class Year2DisciplineList
    {
        public int? StudId { get; set; }
        public int? DisciplineId { get; set; }

        public virtual StandardDiscipline Discipline { get; set; }
        public virtual Student Stud { get; set; }
    }
}
