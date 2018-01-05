const { describe, it } = require('mocha');
const chai = require('chai');
const { expect } = chai;

chai.should();

describe('Forward', () => {
  describe('Dir', () => {
    it('should forward all Dir modules', () => {
      let Dir = require('./ForwardAll');

      Dir.should.have.property('A');
      Dir.A.should.equal('A');

      Dir.should.have.property('B');
      Dir.B.should.equal('B');
    });

    it('should exclude some modules', () => {
      let Dir = require('./ExcludeTest');

      Dir.should.have.property('A');
      Dir.A.should.equal('A');

      expect(Dir.B).to.equal(undefined);
    });
  });
});
