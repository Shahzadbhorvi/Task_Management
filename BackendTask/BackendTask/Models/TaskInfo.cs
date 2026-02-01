using System.ComponentModel.DataAnnotations;

namespace BackendTask.Models
{
    public class TaskInfo
    {
        [Key]
        public int Id { get; set; }
        public  required string Name { get; set; }
        public string? Description { get; set; }
        public required Status Status { get; set; } = Status.ToDo;    // To-Do, In progress, Completed
        public DateTime DueDate { get; set; }

    }
    public enum Status
    {
        ToDo = 0,
        InProgress = 1,
        Completed = 2
    }
       
}
