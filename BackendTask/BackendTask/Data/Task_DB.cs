using BackendTask.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendTask.Data
{
    public class Task_DB: DbContext
    {
        public Task_DB(DbContextOptions<Task_DB> dbContext): base(dbContext){
        
        }
        public DbSet<TaskInfo>  Tasks { get; set; }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<TaskInfo>().ToTable("TaskInfo"); // 
        //}
    }
}
