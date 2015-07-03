import angular from 'angular';

export function SuperpowersFilter() {
    return (items, isEnabled)=> {
        if (isEnabled) {
            //enabled so only return our filtered items
            return items.filter((item)=> {
                return item.hasSuperPowers;
            });
        } else {
            //disabled so return everything
            return items;
        }
    };
};

export default angular.module('SuperpowersFilter', [])
.filter('superpowers', SuperpowersFilter);