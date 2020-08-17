using System.Collections.Generic;

namespace backend.Models
{
    public interface ITarefaRepositorio
    {
        bool ItemExiste(int id);
        IEnumerable<TarefaItem> All { get; }
        TarefaItem Find(int id);
        void Insert(TarefaItem item);
        void Update(TarefaItem item);
        void Delete(int id);
    }
}