using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class TarefaController : Controller
    {
        private readonly ITarefaRepositorio _tarefaRepositorio;
        public TarefaController(ITarefaRepositorio tarefaRepositorio)
        {
            _tarefaRepositorio = tarefaRepositorio;
        }
    }
}