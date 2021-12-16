const Potion = require('../lib/Potion.js');
const Player = require()

describe('creates a random potion object', () => {
  describe("potion test",()=>{
    it("potion testing",()=>{
      const potion = new Potion();
      expect(potion.name).toEqual(expect.any(String));
      expect(potion.name.length).toBeGreaterThan(0);
      expect(potion.value).toEqual(expect.any(Number));
    })
  })
});