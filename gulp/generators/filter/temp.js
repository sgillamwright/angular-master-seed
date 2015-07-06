import angular from 'angular';

export function <%= upperCaseName %>Filter() {
    return (items)=> {
        return items.filter((item)=> {
          //only return items which start with the letter a
          return /^a/i.test(item);
        });
    };
};

export default angular.module('<%= upperCaseName %>Filter', [])
.filter('<%= camelCaseName %>', <%= upperCaseName %>Filter);