using BackendTask.Dtos;
using BackendTask.Models;
using BackendTask.Repositories.Interfaces;
using Microsoft.VisualBasic;

namespace BackendTask.Services
{
    public class TaskService
    {

        private readonly ITaskRepository _taskRepository;

        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }
        public async Task<IEnumerable<TaskDto>> GetAllTasksAsync()
        {
            var tasks = await _taskRepository.GetAllTasks();
            return tasks.Select(t => new TaskDto
            {
                Id = t.Id,
                Name = t.Name,
                Description = t.Description,
                Status = t.Status,
                DueDate = t.DueDate
            });
        }

        public  async Task<TaskDto>   GetById( int id )
        {
           var getid =await _taskRepository.GetTaskById(id);
            return new TaskDto
            {
                 Id = getid.Id,
                Name = getid.Name,
                Description = getid.Description,
                Status = getid.Status,
                DueDate = getid.DueDate,

            };
        }

        public async Task<TaskDto> AddTaskAsync(TaskCreateDto dto)
        {
            var task = new TaskInfo
            {
                Name = dto.Name,
                Description = dto.Description,
                Status = dto.Status,
                DueDate = dto.DueDate
            };

            var created = await _taskRepository.AddTask(task);

            return new TaskDto
            {
                Id = created.Id,
                Name = created.Name,
                Description = created.Description,
                Status = created.Status,
                DueDate = created.DueDate
            };
        }
        public async Task<TaskInfo>  UpdateTask(UpdateTaskDto dto)
        {
            var getTaskId = await _taskRepository.GetTaskById(dto.Id);
            return await _taskRepository.UpdateTask(getTaskId);
        }
        public async Task<bool> DeleteTaskByIdAsync(int id)
        {
            var task = await _taskRepository.GetTaskById(id);
            if (task == null) return false;

            await _taskRepository.DeleteTask(task);
            return true;
        }

    }
}
