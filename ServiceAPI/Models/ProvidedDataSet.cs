using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ServiceAPI.Models
{
    public partial class ProvidedDataSet
    {
        public double? PolicyId { get; set; }
        public string DateOfPurchase { get; set; }
        public double? CustomerId { get; set; }
        public string Fuel { get; set; }
        public string VehicleSegment { get; set; }
        public double? Premium { get; set; }
        public double? BodilyInjuryLiability { get; set; }
        public double? PersonalInjuryProtection { get; set; }
        public double? PropertyDamageLiability { get; set; }
        public double? Collision { get; set; }
        public double? Comprehensive { get; set; }
        public string CustomerGender { get; set; }
        public string CustomerIncomeGroup { get; set; }
        public string CustomerRegion { get; set; }
        public double? CustomerMaritalStatus { get; set; }
        public int? Vehiclesegmentid { get; set; }
        public int? Fuelid { get; set; }
        public DateTime? Dateofpurchase1 { get; set; }
    }
}
