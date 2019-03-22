app.controller("MainController", function($scope) {
  $scope.selectedPerson = 0;
  $scope.selectedGenre = null;
  $scope.people = [
    {
      id: 0,
      name: "Superman",
      talent: ["Strong", "Clever", "Leader", "Flight"],
      live: true
    },
    {
      id: 1,
      name: "Spiderman",
      talent: ["Web", "Fast", "Clever"],
      live: true
    },
    {
      id: 2,
      name: "Batman",
      talent: ["Strong", "Clever", "Clever", "Skilled"],
      live: true
    },
    { id: 3, name: "Antman", talent: ["Small", "Fast", "Funny"], live: true }
  ];
  $scope.newPerson = null;
  $scope.addNew = function() {
    if ($scope.newPerson != null && $scope.newPerson != "") {
      $scope.people.push({
        id: $scope.people.length,
        name: $scope.newPerson,
        talent: ["Strong", "Clever", "Clever", "Skilled"],
        live: true,
        music: []
      });
    }
  };
});
