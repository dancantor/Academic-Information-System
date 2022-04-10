using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.Context.Models
{
    public partial class Student
    {
        public Student()
        {
            Contracts = new HashSet<Contract>();
            OptionalDisciplineLists = new HashSet<OptionalDisciplineList>();
            OptionalGrades = new HashSet<OptionalGrade>();
            StandardGrades = new HashSet<StandardGrade>();
            OptionalDisciplines = new HashSet<OptionalDiscipline>();
        }

        public int? GenericId { get; set; }
        public int StudId { get; set; }
        public string Cnp { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public int Year1 { get; set; }
        public int? Year2 { get; set; }
        public int? ContractId { get; set; }
        public int? OptionalDisciplineListId { get; set; }

        public virtual GenericUser Generic { get; set; }
        public virtual ICollection<Contract> Contracts { get; set; }
        public virtual ICollection<OptionalDisciplineList> OptionalDisciplineLists { get; set; }
        public virtual ICollection<OptionalGrade> OptionalGrades { get; set; }
        public virtual ICollection<StandardGrade> StandardGrades { get; set; }

        public virtual ICollection<OptionalDiscipline> OptionalDisciplines { get; set; }
    }
}
