using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        private readonly PolicyQuester2021Context _context;

        public CommonController(PolicyQuester2021Context context)
        {
            _context = context;
        }

      
        [HttpGet, Route("getGenders")]
        public async Task<ActionResult<IEnumerable<Gender>>> GetCustomer()
        {
            var genderList = await _context.Gender.ToListAsync();

            if (genderList == null)
            {
                return NotFound();
            }

            return genderList;
        }


        [HttpGet, Route("getRegion")]
        public async Task<ActionResult<IEnumerable<Region>>> GetRegion()
        {
            var regionList = await _context.Region.ToListAsync();

            if (regionList == null)
            {
                return NotFound();
            }

            return regionList;
        }

        [HttpGet, Route("getMaritialStatus")]
        public async Task<ActionResult<IEnumerable<MaritialStatus>>> GetMaritialStatus()
        {
            var statusList = await _context.MaritialStatus.ToListAsync();

            if (statusList == null)
            {
                return NotFound();
            }

            return statusList;
        }

        [HttpGet, Route("searchPolicies/{policyID}")]
        public async Task<ActionResult<IEnumerable<Policy>>> SearchPolicies(string policyID)
        {
            var policyList = await _context.Policy.Where(o => o.Id.ToString().Contains(policyID) || o.Customerid.ToString().Contains(policyID)).ToListAsync();

            if (policyList == null)
            {
                return new List<Policy>();
            }

            return policyList;
        }

        [HttpGet, Route("getVehicleType")]
        public async Task<ActionResult<IEnumerable<VehicleSegment>>> GetVehicleType()
        {
            var vehicleList = await _context.VehicleSegment.ToListAsync();

            if (vehicleList == null)
            {
                return NotFound();
            }

            return vehicleList;
        }

        [HttpGet, Route("getFuelType")]
        public async Task<ActionResult<IEnumerable<FuelSegment>>> GetFuelTypes()
        {
            var fuelList = await _context.FuelSegment.ToListAsync();

            if (fuelList == null)
            {
                return NotFound();
            }

            return fuelList;
        }

        [HttpGet, Route("GetChartData/{id}")]
        public IList<int> GetChartData(int id)
        {
            List<int> monthlySales = new List<int>();
            for(int i=1; i<=12; i++)
            {
                monthlySales.Add(getPolicyPurchasedByMonth(i, id));
            }

            return monthlySales;
        }


        [HttpGet, Route("GetCustomerName/{id}")]
        public ActionResult<string> GetCustomerName(int id)
        {
            var clientName = _context.Customer.FirstOrDefault(o => o.Id == id).Clientname;
            return Ok(new { clientName });
        }


        [HttpGet, Route("GetFuelSegment/{id}")]
        public ActionResult<string> GetFuelSegment(int id)
        {
            var segment = _context.FuelSegment.FirstOrDefault(o => o.Id == id).Segment;
            return Ok(new { segment });
        }

        [HttpGet, Route("GetVehicleSegment/{id}")]
        public ActionResult<string> GetVehicleSegment(int id)
        {
            var segment = _context.VehicleSegment.FirstOrDefault(o => o.Id == id).Segment;
            return Ok(new { segment });
        }

        private int getPolicyPurchasedByMonth(int month, int region)
        {
            var result = _context.Policy
                .Include(o => o.Customer)
                .Where(x => x.Dateofpurchase.Value.Month == month)
                .ToList();

            if(region != 0)
            {
                result = result.Where(o => o.Customer.Region == region).ToList();
            }

            return result.Count;
        }
    }


}
