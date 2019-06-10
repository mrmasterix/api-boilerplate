import { testFn } from './test';

describe('First test suite', () => {
  it('method testFN', () => {
    const name: string = 'Alex';
    const result = testFn(name);

    expect(result).toEqual(name);
  });
});
