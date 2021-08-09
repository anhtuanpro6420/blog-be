import { expect } from 'chai';
import 'mocha';
import test from '../hello';

// eslint-disable-next-line no-undef
describe('Hello function', () => {
  // eslint-disable-next-line no-undef
  it('should return hello world', () => {
    const result = test.sum(1, 2);
    expect(result).to.equal(3);
  });
});
