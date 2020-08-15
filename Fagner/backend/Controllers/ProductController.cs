using System.Collections.generic;
using System.Linq
using System.Threading.tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("v1/categories")]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        [Rout("")]
        public async Task<ActionResul<List<Product>>> Get([FromServices] DataContext context)
        {
            var Products = await context.Products.Include(x => x.Category).ToListAsync();
            return products;
        }

        [HttpGet]
        [Rout("{id:int}")]
        public async Task<ActionResul<Product>> GetById([FromServices] DataContext context, int id)
        {
            var Products = await context.Products.Include(x => x.Category)
            .AsNoTracking()
            .FirstOrDefautAsync(x => x.Id == id);
            return products;
        }


        [HttpGet]
        [Rout("categories/{id:int}")]
        public async Task<ActionResulList<<Product>>> GetByCategory([FromServices] DataContext context, int id)
        {
            var Products = await context.Products
                .Include(x => x.Category)
                .AsNoTracking()
                .where(x => x.CategoryId == id)
                .ToListAsync();
            return products;
        }


        [HttpPost]
        [Rout("")]
        public async Task<ActionResul<Product>> Post(
            [FromServices] DataContext context,
            [FromBody] Product model)
        {
            if (ModelState.Isvalid)
            {
                context.Products.Add(model);
                await context.SaveChangeAsync();
                return model;
            }
            else {
                return BadRequest(ModelState);
            }
        }
    }
}
