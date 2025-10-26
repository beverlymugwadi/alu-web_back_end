import { taskFirst, taskNext } from './0-constants.js';

describe('task functions tests', () => {
  test('taskFirst should return correct string', () => {
    expect.assertions(1);
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  test('taskNext should return correct string', () => {
    expect.assertions(1);
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});

