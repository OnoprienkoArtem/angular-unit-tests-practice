import {countries} from './countries';

describe('countries', () => {
  it('should contain countries codes', () => {
    const result = countries();

    expect(result).toContain('UA');
  });
});
