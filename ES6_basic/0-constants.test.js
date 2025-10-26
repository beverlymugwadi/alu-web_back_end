import { taskFirst, taskNext } from './0-constants';

describe('task functions tests', () => {
  it('taskFirst should return correct string', () => {
    expect.assertions(1);
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  it('taskNext should return correct string', () => {
    expect.assertions(1);
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
