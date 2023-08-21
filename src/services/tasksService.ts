import Task from '../models/Task';

class TasksService {
  async getAllTasks() {
    try {
      const tasks = await Task.findAll();
      return tasks;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  async createTask(title: string, description: string) {
    try {
      const task = await Task.create({ title, description });
      return task;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  async updateTask(id: number, title: string, description: string, completed: boolean) {
    try {
      const task = await Task.findByPk(id);

      if (!task) {
        throw new Error('Task not found');
      }

      task.title = title;
      task.description = description;
      task.completed = completed;

      await task.save();

      return task;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  async deleteTask(id: number) {
    try {
      const task = await Task.findByPk(id);

      if (!task) {
        throw new Error('Task not found');
      }

      await task.destroy();

      return { message: 'Task deleted successfully' };
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }
}

// export TasksService class
export default TasksService;