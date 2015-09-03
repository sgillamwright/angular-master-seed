//utility library
import lodash from 'lodash';

export default class SuggestionInputController {

  /**
   * @param {$log} $log - Angular Loggig Service.
   */
	constructor($log){
		this.$log = $log.getInstance('SuggestionInputController', true);
    this.$log.debug("constructor");
    this._ = lodash;
    this.selectedItem = undefined;
    this.searchText = angular.copy(this.suggestModel);
	}

  /**
   * Returns filtered list of unique results from the data source
   * @param {string} query - value to filter data source by
   */
  querySearch (query) {
      let results = query ? this.suggestData.filter( this.createFilterFor(query) ) : this.suggestData;
      let uniqueResults = this._.uniq(results, this.suggestProperty);
      return uniqueResults;
  }

  searchTextChange(text) {
      if (text !== null) {
          this.suggestModel = text;
      }
  }

  selectedItemChange(item) {
      if (item !== undefined && item !== null) {
          this.suggestModel = item[this.suggestProperty];
      }
  }

  createFilterFor(query) {
      let displayProperty = this.suggestProperty;
      let lowercaseQuery = angular.lowercase(query);
      if (query.length) {
          return (suggestion) => {
              return (angular.lowercase(suggestion[displayProperty]).indexOf(lowercaseQuery) === 0);
          };
      } else {
          return false;
      }
  }

}

SuggestionInputController.$inject = ['$log'];
