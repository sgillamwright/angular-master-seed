import SuperpowersModule from './superpowers';

describe('Filter::Superpowers', () => {
  let $filter;

  beforeEach(window.module(SuperpowersModule.name));

  beforeEach(
    inject((_$filter_) => {
      $filter = _$filter_;
    })
  );

  describe('FilterFunction()', () => {
    it('should return only items where hasSuperPowers = true when isEnabled = true', () => {

      //Arrange
      let items = [
        {
          "name": "Thor",
          "hasSuperPowers": true
        },
        {
          "name": "Iron Man",
          "hasSuperPowers": false
        }
      ];

      let result = null;
      let isEnabled = true;

      // Act.
      result = $filter('superpowers')(items, isEnabled);

      // Assert.
      expect(result).toBeArray();
      expect(result).toBeArrayOfSize(1);
      expect(result).toContain(items[0]);
      expect(result).not.toContain(items[1]);

    });

    it('should return all items (no filter) when isEnabled = false', () => {

      //Arrange
      let items = [
        {
          "name": "Thor",
          "hasSuperPowers": true
        },
        {
          "name": "Iron Man",
          "hasSuperPowers": false
        }
      ];

      let result = null;
      let isEnabled = false;

      // Act.
      result = $filter('superpowers')(items, isEnabled);

      // Assert.
      expect(result).toBeArray();
      expect(result).toBeArrayOfSize(2);
      expect(result).toContain(items[0], items[1]);

    });
  });

});
