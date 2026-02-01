
import Api from './Api';

export const getTasks = async () => {
    try {
        const response = await Api.get('/api/Task');
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};