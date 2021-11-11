using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceAPI.Models;

namespace ServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly PolicyQuester2021Context _context;

        public CustomersController(PolicyQuester2021Context context)
        {
            _context = context;
        }

        // GET: api/Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Object>>> GetCustomer()
        {
            try
            {
                var data = await _context.Customer
               .Include(o => o.GenderNavigation)
               .Include(o => o.IncomegroupNavigation)
               .Include(o => o.MaritialstatusNavigation)
               .Include(o => o.RegionNavigation).ToListAsync();

                var returnResponse = data.Select(o => new
                {
                    o.Clientname
                    ,
                    o.Emailaddress
                    ,
                    o.GenderNavigation.Gendername
                    ,
                    o.IncomegroupNavigation.Incomerange
                    ,
                    o.MaritialstatusNavigation.Statusname
                    ,
                    o.RegionNavigation.Regionname
                }).ToList();
               
                return returnResponse;
            }
            catch (Exception)
            {

                throw;
            }
        }

        // GET: api/Customers/5
        [HttpGet, Route("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            var customer = await _context.Customer.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        [HttpGet, Route("searchCustomer/{searchQuery}")]
        public async Task<ActionResult<IEnumerable<Customer>>> SearchCustomer(string searchQuery)
        {
            var customer = await _context.Customer.Where(o => o.Clientname.Contains(searchQuery) || o.Id.ToString().Contains(searchQuery)).Take(50).ToListAsync();

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(int id, Customer customer)
        {
            if (id != customer.Id)
            {
                return BadRequest();
            }

            _context.Entry(customer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Customers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            _context.Customer.Add(customer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomer", new { id = customer.Id }, customer);
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Customer>> DeleteCustomer(int id)
        {
            var customer = await _context.Customer.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.Customer.Remove(customer);
            await _context.SaveChangesAsync();

            return customer;
        }

        private bool CustomerExists(int id)
        {
            return _context.Customer.Any(e => e.Id == id);
        }
    }
}
