import hello from './hello.js';

describe('Hello', () => {
  it('should return hello', () => {
    const value = hello();

    expect(value).toBe('Hello');
  });
});
