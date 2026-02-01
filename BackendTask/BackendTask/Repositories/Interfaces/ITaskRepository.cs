using BackendTask.Models;

namespace BackendTask.Repositories.Interfaces
{
    public interface ITaskRepository
    {
        Task<IEnumerable<TaskInfo>> GetAllTasks();
        Task<TaskInfo> GetTaskById(int taskId);
        Task<TaskInfo> AddTask(TaskInfo task);
        Task<TaskInfo> UpdateTask(TaskInfo task);
        Task DeleteTask(TaskInfo task);
    }
}
