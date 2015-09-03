import angular from 'angular';

/**
 * <%= upperCaseName %>Filter does what?.
 */
export function <%= upperCaseName %>Filter() {
    return (items)=> {
        return items.filter((item)=> {
          //only return items which start with the letter a
          return /^a/i.test(item);
        });
    };
};

export default angular.module('<%= angularModuleName %>', [])
.filter('<%= camelCaseName %>', <%= upperCaseName %>Filter);
