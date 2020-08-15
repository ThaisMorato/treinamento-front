using System.Collections.generic;
using System.Threading.tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("v1/categories")]
    public class CategoryController : ControllerBase
    {

        [HttpGet]
        [Rout("")]
        public async Task<ActionResul<List<Category>>> Get([FromServices] DataContext context)
        {
            var categories = await context.categories.ToListAsync();
            return categories;
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResul<List<Category>>> Post(
            [FromServices] DataContext context,
            [FromBody] Category model)
        {
            if (ModelState.IsValid)
            {
                context.categories.Add(model);
                await context.SaveChangeAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
