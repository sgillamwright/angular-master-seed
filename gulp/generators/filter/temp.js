import angular from 'angular';

export function <%= upperCaseName %>Filter() {
    return (items)=> {
        return items.filter((item)=> {
          return /^a/i.test(item);
        });
    };
};

export default angular.module('<%= upperCaseName %>Filter', [])
.filter('<%= camelCaseName %>', <%= upperCaseName %>Filter);