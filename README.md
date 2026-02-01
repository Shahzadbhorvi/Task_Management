# Task Management System

A full-stack task management CRUD application built with **Clean Architecture** principles, featuring ASP.NET Core backend and React frontend.

## 🏗️ Architecture

This project follows **Clean Architecture** principles with clear separation of concerns:

```
BackendTask/
├── Domain/              # Enterprise Business Rules
│   ├── Entities/       # Core business entities
│   └── Interfaces/     # Repository interfaces
├── Application/         # Application Business Rules
│   ├── DTOs/           # Data Transfer Objects
│   ├── Services/       # Business logic
│   └── Interfaces/     # Service interfaces
├── Infrastructure/      # External Concerns
│   ├── Data/           # Database context & repositories
│   └── Repositories/   # Repository implementations
└── API/                # Presentation Layer
    └── Controllers/    # API endpoints
```

### Clean Architecture Benefits:
- ✅ **Independent of Frameworks** - Business logic doesn't depend on external libraries
- ✅ **Testable** - Business logic can be tested without UI, database, or external elements
- ✅ **Independent of UI** - UI can change without changing business logic
- ✅ **Independent of Database** - Can switch databases without changing business rules
- ✅ **Maintainable** - Clear separation makes code easier to understand and modify

## 🚀 Technologies

### Backend
- **ASP.NET Core 8.0** - Web API framework
- **Entity Framework Core** - ORM for database operations
- **SQL Server** - Database
- **Clean Architecture** - Architectural pattern
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Hooks** - State management

## 📋 Features

### CRUD Operations
- ✅ **Create** - Add new tasks with name, description, status, and due date
- ✅ **Read** - View all tasks with formatted display
- ✅ **Update** - Modify existing task details
- ✅ **Delete** - Remove tasks from the system

### Additional Features
- 📊 Task status tracking (Pending, In Progress, Completed)
- 📅 Due date management
- 🎨 Responsive UI with Tailwind CSS
- 🔄 Real-time updates
- ⚡ Fast and efficient data loading
- 🛡️ CORS-enabled API

## 📦 Project Structure

```
Task_Management/
├── BackendTask/                    # ASP.NET Core Backend
│   ├── Controllers/
│   │   └── TaskController.cs      # REST API endpoints
│   ├── Models/
│   │   └── TaskItem.cs            # Task entity/model
│   ├── Data/
│   │   └── ApplicationDbContext.cs # EF Core context
│   ├── Services/                   # Business logic layer
│   ├── Repositories/               # Data access layer
│   ├── Program.cs                  # Application entry point
│   └── appsettings.json           # Configuration
│
├── frontend/                       # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── Tasks.jsx          # Task list component
│   │   ├── services/
│   │   │   ├── api.js             # Axios configuration
│   │   │   └── taskService.js     # API service layer
│   │   ├── App.jsx                # Main app component
│   │   └── main.jsx               # Application entry
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── .gitignore
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18 or higher)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or SQL Server Express

### Backend Setup

1. **Navigate to backend directory:**
```bash
cd BackendTask
```

2. **Restore dependencies:**
```bash
dotnet restore
```

3. **Update database connection string:**
Edit `appsettings.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=TaskManagementDB;Trusted_Connection=True;"
  }
}
```

4. **Apply migrations (if using EF Core):**
```bash
dotnet ef database update
```

5. **Run the backend:**
```bash
dotnet run
```

Backend API will be available at: `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Update API base URL (if needed):**
Edit `src/services/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:5000';
```

4. **Run the frontend:**
```bash
npm run dev
```

Frontend will be available at: `http://localhost:5173`

## 🔧 Configuration

### CORS Configuration (Backend)

The backend is configured to allow requests from the React frontend:

```csharp
// Program.cs
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

app.UseCors("ReactApp");
```

### Environment Variables

**Backend (`appsettings.json`):**
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Your-Connection-String-Here"
  }
}
```

**Frontend (`.env`):**
```env
VITE_API_URL=http://localhost:5000
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/task` | Get all tasks |
| GET | `/api/task/{id}` | Get task by ID |
| POST | `/api/task` | Create new task |
| PUT | `/api/task/{id}` | Update task |
| DELETE | `/api/task/{id}` | Delete task |

### Request/Response Examples

**GET `/api/task` - Get all tasks**
```json
[
  {
    "id": 1,
    "name": "Build project",
    "description": "Completion in 2 days",
    "status": 2,
    "dueDate": "2025-10-04T04:23:28.229"
  }
]
```

**POST `/api/task` - Create task**
```json
// Request Body
{
  "name": "New Task",
  "description": "Task description",
  "status": 0,
  "dueDate": "2025-02-15T00:00:00"
}

// Response
{
  "id": 2,
  "name": "New Task",
  "description": "Task description",
  "status": 0,
  "dueDate": "2025-02-15T00:00:00"
}
```

## 🎯 Task Status Codes

| Status | Code | Description |
|--------|------|-------------|
| Pending | 0 | Task is pending |
| In Progress | 1 | Task is being worked on |
| Completed | 2 | Task is completed |

## 🧪 Testing

### Backend Testing
```bash
cd BackendTask
dotnet test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 📱 Usage

1. Start the backend server
2. Start the frontend development server
3. Open browser to `http://localhost:5173`
4. You'll see the task list interface
5. Tasks will be loaded automatically
6. Each task displays:
   - Task name
   - Description
   - Status (color-coded badge)
   - Due date

## 🚧 Future Enhancements

- [ ] User authentication & authorization
- [ ] Task filtering and sorting
- [ ] Task priority levels
- [ ] Task categories/tags
- [ ] Search functionality
- [ ] Dark mode
- [ ] Task comments/notes
- [ ] File attachments
- [ ] Email notifications
- [ ] Task analytics dashboard

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Shahzad Bhorvi**

- GitHub: [@Shahzadbhorvi](https://github.com/Shahzadbhorvi)
- Repository: [Task_Management](https://github.com/Shahzadbhorvi/Task_Management)

## 🙏 Acknowledgments

- Clean Architecture principles by Robert C. Martin
- ASP.NET Core documentation
- React documentation
- Tailwind CSS framework

## 📞 Support

For support, email shehzadbhorvii@gmail.com or open an issue in the GitHub repository.

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
