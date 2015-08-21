
app.controller('HomeController', function ($scope) {

})

app.controller('DivController', function ($scope, $routeParams) {
  $scope.firstNumb = $routeParams.numone;
  $scope.secondNumb = $routeParams.numtwo;
  $scope.addedNums = Number($routeParams.numone) / Number($routeParams.numtwo)
})

app.controller('AddController', function ($scope, $routeParams) {
  $scope.firstNumb = $routeParams.numone;
  $scope.secondNumb = $routeParams.numtwo;
  $scope.addedNums = Number($routeParams.numone) + Number($routeParams.numtwo)
})
