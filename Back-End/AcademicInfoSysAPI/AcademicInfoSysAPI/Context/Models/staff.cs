using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.Context.Models
{
    public partial class staff
    {
        public int? GenericId { get; set; }
        public int StaffId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public string Cnp { get; set; }

        public virtual GenericUser Generic { get; set; }
    }
}
