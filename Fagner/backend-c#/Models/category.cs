using System.ComponentModel.DataAnnotations;

namespace backend.Models
{

    public class Category
    {
        [key]

        public int Id { get; set; }

        [required(ErrorMessage = "Este campo é obrigatorio")]
        [MaxLength(60, ErrorMessage = "Deve conter entre 3 e 60 caracteres")]
        [MinLength(3, ErrorMessage = "Deve conter entre 3 e 60 caracteres")]

        public string Title { get; set; }
    }
}