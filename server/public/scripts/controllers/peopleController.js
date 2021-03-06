myApp.controller('PeopleController', ['$scope', 'exampleFactory', function($scope, exampleFactory) {
  console.log('People Controller');

  $scope.message = 'People!';
  $scope.formName = '';
  $scope.dataFactory = exampleFactory;
  $scope.people = $scope.dataFactory.people;
  $scope.thing = $scope.dataFactory.thing;
  $scope.number = $scope.dataFactory.number();

  // Adds a person and then is visible, via the factory, to the Addresses page.
  // Does not store in the DB
  $scope.addPerson = function() {
    // exampleFactory.people.push($scope.formName);
    $scope.dataFactory.addPerson($scope.formName);
    $scope.dataFactory.thing.name = $scope.formName;
    $scope.formName = '';
  }

  $scope.addOne = function() {
    $scope.number = $scope.dataFactory.addOne();
  }


}]);
