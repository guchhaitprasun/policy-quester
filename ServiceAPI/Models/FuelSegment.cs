using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ServiceAPI.Models
{
    public partial class FuelSegment
    {
        public FuelSegment()
        {
            Policy = new HashSet<Policy>();
        }

        public int Id { get; set; }
        public string Segment { get; set; }
        public bool? Isactive { get; set; }

        public virtual ICollection<Policy> Policy { get; set; }
    }
}
