﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ServiceAPI.Models
{
    public partial class Gender
    {
        public Gender()
        {
            Customer = new HashSet<Customer>();
        }

        public int Id { get; set; }
        public string Gendername { get; set; }
        public bool? Isactive { get; set; }

        public virtual ICollection<Customer> Customer { get; set; }
    }
}
