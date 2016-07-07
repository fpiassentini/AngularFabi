app.controller('TesteController', function ($scope, TesteService, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    TesteService.ChamarGoggle("Teste")

    $http.get("http://scgnode.azurewebsites.net/AcordoBilateral/Consultar2")
        .then(function (response) {
            console.log(response.data);
        },function (response) {
            alert('Um erro ocorreu');
        });
});



