using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class TarefaItem
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        public string Texto { get; set; }

        public bool Concluido { get; set; }
    }
}