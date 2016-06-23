'use strict';

function HttpService($http) {

  return {

    setData: function (response) {
      angular.extend(this, response);
    },

    load: function (endurl, customheaders, dataToPass, args, method) {
      return $http({
        url: endurl,
        method: 'GET'
      }).then(function (response, status, headers, config) {
        return response;
      }, function (response, status, headers, config) {
        return false;
      });
    },

    delete: function (url, id) {
      $http.delete(url + '/' + id);
    },

    update: function (url, data) {

      $http.put(url, data)
        .success(function (data, status, headers, config) {
          console.log("PUT SUCCESS" + data + status + headers + config);
        })
        .error(function (data, status, headers, config) {
          console.log("PUT ERROR" + data + status + headers + config);
        });
    },
    patch: function (url, paramsValues) {
      $http({
        url: url+'/'+paramsValues.id,
        method: 'PATCH',
        params: paramsValues
      })
        .success(function (response) {
          console.log(response);
        }).
      error(function (response) {
        console.log(response);
        return false;
      });
    }
  };
}
