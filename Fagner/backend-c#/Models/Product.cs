using System.ComponentModel.DataAnootations;

namespace backend.Models
{
    public class Product
    {
        [key]
        public int Id { get; set; }

        [required(ErrorMessage = "Este campo é obrigatorio")]
        [MaxLength(60, ErrorMessage = "Deve conter entre 3 e 60 caracteres")]
        [MinLength(3, ErrorMessage = "Deve conter entre 3 e 60 caracteres")]
        public string Title { get; set; }

        [required(ErrorMessage = "Este campo é obrigatorio")]
        [range(1, int.MaxValue, ErrorMessage = "Categoria inválida")]
        public int CategoryId { get; set; }
        public category Category { get; set; }
    }
    
}