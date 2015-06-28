import <%= upperCaseName %>Module from './<%= name %>';

describe('Filter::<%= upperCaseName %>', ()=>{
    let $filter;

    beforeEach(window.module(<%= upperCaseName %>Module.name));

    beforeEach(
        inject((_$filter_)=>{
            $filter = _$filter_;
        })
    );

    describe('FilterFunction()', ()=>{
        it('should return only items which start with "a"', ()=>{

            //Arrange
            let items = ['apple', 'banana', 'apricot'];
            let result = null;

            // Act.
            result = $filter('<%= camelCaseName %>')(items);

            // Assert.
            expect(result).toContain("apple");
            expect(result).toContain("apricot");
            expect(result).not.toContain("banana");

        });
    });

});