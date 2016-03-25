(function() {
  "use strict";

  var validate =function (fetchDataService) {
      this.verify = function(username, password) {

             fetchDataService.getCustomers()
              .then(function (returnedData) {
                var i = 0;
                var count = 0;
           
                angular.forEach(returnedData.data, function(value){
                  while (i < 10) {
                    if(value[i].username == username) {
                      if(value[i].password == password) {
                       console.log("Logged In");
                       count = count + 1;
                      }
                    }
                    i = i + 1;
                  }

                  if (count === 0) {
                    console.log("Username or password is wrong");
                  }
                });
              });   
      };
        
  };
      angular.module('assignment1App')
        .service ('validate', ['fetchDataService', validate]);
}());