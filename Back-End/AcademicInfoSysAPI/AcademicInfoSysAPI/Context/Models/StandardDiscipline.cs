using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.Context.Models
{
    public partial class StandardDiscipline
    {
        public StandardDiscipline()
        {
            StandardGrades = new HashSet<StandardGrade>();
        }

        public int Id { get; set; }
        public int? CorespondingYear { get; set; }
        public string Description { get; set; }

        public virtual ICollection<StandardGrade> StandardGrades { get; set; }
    }
}
