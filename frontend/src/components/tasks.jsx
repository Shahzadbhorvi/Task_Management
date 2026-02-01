import React from 'react';
import { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService';

export default function Tasks() {
    const [tasks, setTasks] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            try {
                const data = await getTasks();
                setTasks(data);
                setError(null);
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setError(error.message || 'Failed to fetch tasks');
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, []);

    const getStatusBadge = (status) => {
        const statusMap = {
            0: { text: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
            1: { text: 'In Progress', color: 'bg-blue-100 text-blue-800' },
            2: { text: 'Completed', color: 'bg-green-100 text-green-800' },
        };
        return statusMap[status] || { text: 'Unknown', color: 'bg-gray-100 text-gray-800' };
    };

    return(
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Tasks</h1>
                    <p className="text-gray-600">Manage and track your tasks</p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">Error: {error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Task List */}
                {!loading && tasks.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No tasks</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by creating a new task.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {tasks.map((task) => {
                            const statusInfo = getStatusBadge(task.status);
                            return (
                                <div 
                                    key={task.id} 
                                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-gray-200"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {task.name}
                                            </h3>
                                            <p className="text-gray-600 mb-3">
                                                {task.description}
                                            </p>
                                            <div className="flex flex-wrap gap-3 items-center">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                                                    {statusInfo.text}
                                                </span>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    Due: {new Date(task.dueDate).toLocaleDateString('en-US', { 
                                                        year: 'numeric', 
                                                        month: 'short', 
                                                        day: 'numeric' 
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}