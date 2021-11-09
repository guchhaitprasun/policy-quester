using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ServiceAPI.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Policy = new HashSet<Policy>();
        }

        public int Id { get; set; }
        public string Clientname { get; set; }
        public string Emailaddress { get; set; }
        public int? Gender { get; set; }
        public int? Maritialstatus { get; set; }
        public int? Region { get; set; }
        public int? Incomegroup { get; set; }
        public bool? Isactive { get; set; }

        public virtual Gender GenderNavigation { get; set; }
        public virtual IncomeGroup IncomegroupNavigation { get; set; }
        public virtual MaritialStatus MaritialstatusNavigation { get; set; }
        public virtual Region RegionNavigation { get; set; }
        public virtual ICollection<Policy> Policy { get; set; }
    }
}
