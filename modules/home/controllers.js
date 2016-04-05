'use strict';

angular.module('Home')

.controller('HomeController', function($scope, $http) {
  getData(); // Load all available data 
  function getData(){  
  $http.post("http://plusidea.co/angular/getData.php").success(function(data){
        $scope.data = data;
       });
  };
  $scope.addData = function (nombre,apellidos,estado,nacimiento,sueldo,correo,departamento,ciudad) {
    $http.post("http://plusidea.co/angular/addData.php?nombre="+nombre+"&apellidos="+apellidos+"&estado="+estado+"&nacimiento="+nacimiento+"&sueldo="+sueldo+"&correo="+correo+"&departamento="+departamento+"&ciudad="+ciudad).success(function(data){
        getData();
        $scope.dataInput = "";
      });
  };
});
