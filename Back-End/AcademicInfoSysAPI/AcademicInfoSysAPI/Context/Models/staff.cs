using System;
using System.Collections.Generic;

namespace AcademicInfoSysAPI.TempDir
{
    public partial class staff
    {
        public int? staffId { get; set; }
        public int GenericId { get; set; }
        public string Cnp { get; set; }

        public virtual GenericUser Generic { get; set; }
    }
}
