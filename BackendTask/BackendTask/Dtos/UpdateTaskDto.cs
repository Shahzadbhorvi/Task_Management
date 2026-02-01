using BackendTask.Models;

namespace BackendTask.Dtos
{
    public class UpdateTaskDto
    {   
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public required Status Status { get; set; } = Status.ToDo;
        public DateTime DueDate { get; set; }
    }
}
