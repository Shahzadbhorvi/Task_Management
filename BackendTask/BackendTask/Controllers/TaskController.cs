using BackendTask.Dtos;
using BackendTask.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskService _service;
        public TaskController(TaskService service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var tasks = await _service.GetAllTasksAsync();
            return Ok(tasks);
        }
        [HttpGet("{id}")]

        public async Task<ActionResult<TaskDto>> GetById(int id) {
            return   await _service.GetById(id);
        
        }

        [HttpPost]
        public async Task<ActionResult<TaskDto>> Create(TaskCreateDto dto)
        {
            var newTask = await _service.AddTaskAsync(dto);
            return CreatedAtAction(nameof(GetAll), new { id = newTask.Id }, newTask);
        }
        [HttpPut(" {id} ")]
        public async Task<ActionResult<UpdateTaskDto>>  UpdateTasks(UpdateTaskDto dto)
        {    
            var getid =_service.GetById(dto.Id);
            var updatedTask = await _service.UpdateTask(dto);
            return Ok(updatedTask);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult>   DeleteTask(int id)
        {
            await _service.DeleteTaskByIdAsync(id);
            return Ok();
        }

    }
}
