export default function LoaderIndicatorConfig($httpProvider) {

    let interceptor = ['$q', '$rootScope', '$log', function ($q, $rootScope, $log) {

      /**
       * The total number of requests made
       */
      let reqsTotal = 0;

      /**
       * The number of requests completed (either successfully or not)
       */
      let reqsCompleted = 0;

      return {
        'request': function(config) {
            $rootScope.isDataLoading = true;
            reqsTotal++;
            return config;
        },

        'response': function(response) {
            if (!response || !response.config) {
                $log.error('Broken interceptor detected: Config object not supplied in response.');
                return response;
            }

            reqsCompleted++;
            if (reqsCompleted >= reqsTotal) {
                $rootScope.isDataLoading = false;
            }
            return response;
        },

        'responseError': function(rejection) {
            if (!rejection || !rejection.config) {
                $log.error('Broken interceptor detected: Config object not supplied in rejection.');
                return $q.reject(rejection);
            }

            reqsCompleted++;
            if (reqsCompleted >= reqsTotal) {
                $rootScope.isDataLoading = false;
            }
            return $q.reject(rejection);
        }
      };
    }];

    $httpProvider.interceptors.push(interceptor);
};

LoaderIndicatorConfig.$inject = ['$httpProvider'];