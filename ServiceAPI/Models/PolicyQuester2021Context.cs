using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace ServiceAPI.Models
{
    public partial class PolicyQuester2021Context : DbContext
    {
        public PolicyQuester2021Context()
        {
        }

        public PolicyQuester2021Context(DbContextOptions<PolicyQuester2021Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<FuelSegment> FuelSegment { get; set; }
        public virtual DbSet<Gender> Gender { get; set; }
        public virtual DbSet<IncomeGroup> IncomeGroup { get; set; }
        public virtual DbSet<MaritialStatus> MaritialStatus { get; set; }
        public virtual DbSet<Policy> Policy { get; set; }
        public virtual DbSet<ProvidedDataSet> ProvidedDataSet { get; set; }
        public virtual DbSet<Region> Region { get; set; }
        public virtual DbSet<VehicleSegment> VehicleSegment { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer("Server=PRASUNGUCHHAIT;Database=PolicyQuester2021;Trusted_Connection=True;");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Clientname)
                    .HasColumnName("CLIENTNAME")
                    .HasMaxLength(100);

                entity.Property(e => e.Emailaddress)
                    .HasColumnName("EMAILADDRESS")
                    .HasMaxLength(100);

                entity.Property(e => e.Gender).HasColumnName("GENDER");

                entity.Property(e => e.Incomegroup).HasColumnName("INCOMEGROUP");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.Maritialstatus).HasColumnName("MARITIALSTATUS");

                entity.Property(e => e.Region).HasColumnName("REGION");

                entity.HasOne(d => d.GenderNavigation)
                    .WithMany(p => p.Customer)
                    .HasForeignKey(d => d.Gender)
                    .HasConstraintName("FK__Customer__GENDER__300424B4");

                entity.HasOne(d => d.IncomegroupNavigation)
                    .WithMany(p => p.Customer)
                    .HasForeignKey(d => d.Incomegroup)
                    .HasConstraintName("FK__Customer__INCOME__32E0915F");

                entity.HasOne(d => d.MaritialstatusNavigation)
                    .WithMany(p => p.Customer)
                    .HasForeignKey(d => d.Maritialstatus)
                    .HasConstraintName("FK__Customer__MARITI__30F848ED");

                entity.HasOne(d => d.RegionNavigation)
                    .WithMany(p => p.Customer)
                    .HasForeignKey(d => d.Region)
                    .HasConstraintName("FK__Customer__REGION__31EC6D26");
            });

            modelBuilder.Entity<FuelSegment>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.Segment)
                    .HasColumnName("SEGMENT")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Gender>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Gendername)
                    .HasColumnName("GENDERNAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");
            });

            modelBuilder.Entity<IncomeGroup>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Incomerange)
                    .HasColumnName("INCOMERANGE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");
            });

            modelBuilder.Entity<MaritialStatus>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.Statusname)
                    .HasColumnName("STATUSNAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Policy>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Bodilyinjuryliability).HasColumnName("BODILYINJURYLIABILITY");

                entity.Property(e => e.Collision).HasColumnName("COLLISION");

                entity.Property(e => e.Comprehensive).HasColumnName("COMPREHENSIVE");

                entity.Property(e => e.Customerid).HasColumnName("CUSTOMERID");

                entity.Property(e => e.Dateofpurchase)
                    .HasColumnName("DATEOFPURCHASE")
                    .HasColumnType("date");

                entity.Property(e => e.Fueltype).HasColumnName("FUELTYPE");

                entity.Property(e => e.Personinjuryprotection).HasColumnName("PERSONINJURYPROTECTION");

                entity.Property(e => e.Premium)
                    .HasColumnName("PREMIUM")
                    .HasColumnType("decimal(10, 2)");

                entity.Property(e => e.Propertydamageliability).HasColumnName("PROPERTYDAMAGELIABILITY");

                entity.Property(e => e.Vehicletype).HasColumnName("VEHICLETYPE");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Policy)
                    .HasForeignKey(d => d.Customerid)
                    .HasConstraintName("FK__Policy__CUSTOMER__3F466844");

                entity.HasOne(d => d.FueltypeNavigation)
                    .WithMany(p => p.Policy)
                    .HasForeignKey(d => d.Fueltype)
                    .HasConstraintName("FK__Policy__FUELTYPE__412EB0B6");

                entity.HasOne(d => d.VehicletypeNavigation)
                    .WithMany(p => p.Policy)
                    .HasForeignKey(d => d.Vehicletype)
                    .HasConstraintName("FK__Policy__VEHICLET__403A8C7D");
            });

            modelBuilder.Entity<ProvidedDataSet>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("'ProvidedDataSet'");

                entity.Property(e => e.BodilyInjuryLiability).HasColumnName("bodily injury liability");

                entity.Property(e => e.Collision).HasColumnName(" collision");

                entity.Property(e => e.Comprehensive).HasColumnName(" comprehensive");

                entity.Property(e => e.CustomerGender)
                    .HasColumnName("Customer_Gender")
                    .HasMaxLength(255);

                entity.Property(e => e.CustomerId).HasColumnName("Customer_id");

                entity.Property(e => e.CustomerIncomeGroup)
                    .HasColumnName("Customer_Income group")
                    .HasMaxLength(255);

                entity.Property(e => e.CustomerMaritalStatus).HasColumnName("Customer_Marital_status");

                entity.Property(e => e.CustomerRegion)
                    .HasColumnName("Customer_Region")
                    .HasMaxLength(255);

                entity.Property(e => e.DateOfPurchase)
                    .HasColumnName("Date of Purchase")
                    .HasMaxLength(255);

                entity.Property(e => e.Dateofpurchase1)
                    .HasColumnName("dateofpurchase")
                    .HasColumnType("date");

                entity.Property(e => e.Fuel).HasMaxLength(255);

                entity.Property(e => e.Fuelid).HasColumnName("FUELID");

                entity.Property(e => e.PersonalInjuryProtection).HasColumnName(" personal injury protection");

                entity.Property(e => e.PolicyId).HasColumnName("Policy_id");

                entity.Property(e => e.PropertyDamageLiability).HasColumnName(" property damage liability");

                entity.Property(e => e.VehicleSegment)
                    .HasColumnName("VEHICLE_SEGMENT")
                    .HasMaxLength(255);

                entity.Property(e => e.Vehiclesegmentid).HasColumnName("VEHICLESEGMENTID");
            });

            modelBuilder.Entity<Region>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.Regionname)
                    .HasColumnName("REGIONNAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VehicleSegment>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Isactive).HasColumnName("ISACTIVE");

                entity.Property(e => e.Segment)
                    .HasColumnName("SEGMENT")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
