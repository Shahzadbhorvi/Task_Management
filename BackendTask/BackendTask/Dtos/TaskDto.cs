using BackendTask.Models;
using System.ComponentModel.DataAnnotations;

namespace BackendTask.Dtos
{
    public class TaskDto
    {
        [Key]
        public int Id { get; internal set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public required Status Status { get; set; } = Status.ToDo;    
        public DateTime DueDate { get; set; }
        
    }
}
