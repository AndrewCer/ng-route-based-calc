
app.controller('HomeController', function ($scope) {

})

app.controller('DivController', function ($scope, $routeParams, $location) {
  $scope.firstNumb = $routeParams.numone;
  $scope.secondNumb = $routeParams.numtwo;
  $scope.addedNums = Number($routeParams.numone) / Number($routeParams.numtwo)
})

app.controller('AddController', function ($scope, $routeParams, $location) {
  console.log($location.search());
  $scope.firstNumb = $location.search().x;
  $scope.secondNumb = $location.search().y;
  $scope.addedNums = Number($location.search().x) + Number($location.search().y)
})
