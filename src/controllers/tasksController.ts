import { Request, Response } from 'express';
import TaskService from '../services/tasksService';

const taskService = new TaskService();

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description } = req.body;

  try {
    const task = await taskService.createTask(title, description);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const task = await taskService.updateTask(parseInt(id, 10), title, description, completed);

    if (!task) {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const { message } = await taskService.deleteTask(parseInt(id, 10));

    if (message !== 'Task deleted successfully') {
      res.status(404).json({ message: 'Task not found' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
