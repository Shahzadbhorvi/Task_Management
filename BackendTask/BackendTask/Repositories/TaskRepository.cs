using BackendTask.Data;
using BackendTask.Models;
using BackendTask.Repositories.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;


namespace BackendTask.Repositories

{
    public class TaskRepository : ITaskRepository
    {
        private readonly Task_DB _dbRepository;
        public TaskRepository(Task_DB dbRepository)
        {
            _dbRepository = dbRepository;
        }
        public async Task<TaskInfo> GetTaskById(int id)
        {
            var getid = await _dbRepository.Tasks.FindAsync(id);
            return getid;
        }

        public async Task<IEnumerable<TaskInfo>> GetAllTasks()
        {
            return await _dbRepository.Tasks.ToListAsync();

        }

        public async Task<TaskInfo> AddTask(TaskInfo task)
        {
            _dbRepository.Tasks.Add(task);
            await _dbRepository.SaveChangesAsync();
            return task;

        }

        public async Task<TaskInfo> UpdateTask(TaskInfo task)
        {
            var getid = await _dbRepository.Tasks.FindAsync(task.Id);
            if (getid == null)
            {
                throw new ArgumentException(" Id is not exist ");
              
            }
            _dbRepository.Tasks.Update(getid);
            await _dbRepository.SaveChangesAsync();
            return task;
        }

        public async Task DeleteTask(TaskInfo task)
        {
            _dbRepository.Tasks.Remove(task);
            await _dbRepository.SaveChangesAsync();
          
        }
    }
}
