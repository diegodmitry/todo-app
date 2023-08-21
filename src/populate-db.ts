import Task from './models/Task';

async function populateDb() {
  await Task.sync({ force: true });

  await Task.bulkCreate([
    {
      title: 'Task 1',
      description: 'Description for task 1',
      completed: false,
    },
    {
      title: 'Task 2',
      description: 'Description for task 2',
      completed: true,
    },
    {
      title: 'Task 3',
      description: 'Description for task 3',
      completed: false,
    },
  ]);

  console.log('Database populated successfully');
}

populateDb();