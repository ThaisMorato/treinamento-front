using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatorio")]
        [MaxLength(60, ErrorMessage = "Deve conter entre 3 e 60 caracteres")]
        [MinLength(3, ErrorMessage = "Deve conter entre 3 e 60 caracteres")]
        public string Title { get; set; }


        [MaxLength(1024, ErrorMessage = "Deve conter no máximo 1024 caracteres")]
        public string Description { get; set; }


        [Required(ErrorMessage = "Este campo é obrigatorio")]
        [Range(1, int.MaxValue, ErrorMessage = "O preçodeve ser maior que zero")]
        public decimal Price { get; set; }


        [Required(ErrorMessage = "Este campo é obrigatorio")]
        [Range(1, int.MaxValue, ErrorMessage = "Categoria inválida")]
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
    
}