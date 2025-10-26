import { taskFirst, taskNext } from './0-constants.js';

test('taskFirst should return correct string', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('taskNext should return correct string', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
