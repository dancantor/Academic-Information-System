using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.Context.Models
{
    public partial class Contract
    {
        public int Id { get; set; }
        public int? StudId { get; set; }
        public string Description { get; set; }
        public bool? Signed { get; set; }

        public virtual Student Stud { get; set; }
    }
}
