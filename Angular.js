<script>
var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["ekmek","domates","çikolata"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }    
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }
});
</script>