using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ServiceAPI.Models
{
    public partial class Policy
    {
        public int Id { get; set; }
        public DateTime? Dateofpurchase { get; set; }
        public int? Customerid { get; set; }
        public int? Vehicletype { get; set; }
        public int? Fueltype { get; set; }
        public decimal? Premium { get; set; }
        public bool? Bodilyinjuryliability { get; set; }
        public bool? Personinjuryprotection { get; set; }
        public bool? Propertydamageliability { get; set; }
        public bool? Collision { get; set; }
        public bool? Comprehensive { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual FuelSegment FueltypeNavigation { get; set; }
        public virtual VehicleSegment VehicletypeNavigation { get; set; }
    }
}
