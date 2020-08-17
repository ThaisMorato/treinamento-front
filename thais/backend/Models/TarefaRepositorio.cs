using System.Collections.Generic;
using System.Linq;
using backend.Models;

namespace backend.Models
{
    public class TarefaRepositorio : ITarefaRepositorio
    {
        private List<TarefaItem> _tarefaLista;
        public TarefaRepositorio()
        {
            InitializeData();
        }
        private void InitializeData()
        {
            _tarefaLista = new List<TarefaItem>();
            var tarefaItem1 = new TarefaItem
            {
                Id = 1,
                Texto = "Criando aplicações com Xamarin",
                Concluido = true
            };
            var tarefaItem2 = new TarefaItem
            {
                Id = 2,
                Texto = "Desenvolvimento de aplicação multiplataforma",
                Concluido = false
            };
            var tarefaItem3 = new TarefaItem
            {
                Id = 3,
                Texto = "Publicando Aplicações",
                Concluido = false,
            };
            _tarefaLista.Add(tarefaItem1);
            _tarefaLista.Add(tarefaItem2);
            _tarefaLista.Add(tarefaItem3);
        }
        public IEnumerable<TarefaItem> All
        {
            get { return _tarefaLista; }
        }
        public void Delete(int id)
        {
            _tarefaLista.Remove(this.Find(id));
        }
        public TarefaItem Find(int id)
        {
            return _tarefaLista.FirstOrDefault(item => item.Id == id);
        }
        public void Insert(TarefaItem item)
        {
            _tarefaLista.Add(item);
        }
        public bool ItemExiste(int id)
        {
            return _tarefaLista.Any(item => item.Id == id);
        }
        public void Update(TarefaItem item)
        {
            var tarefaItem = this.Find(item.Id);
            var index = _tarefaLista.IndexOf(tarefaItem);
            _tarefaLista.RemoveAt(index);
            _tarefaLista.Insert(index, item);
        }
    }
}