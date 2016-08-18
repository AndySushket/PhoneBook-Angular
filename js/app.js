var app = angular.module("MyApp", [])
app.controller("myController", function ($scope) {
    $scope.filters = "";
    $scope.people = [{
        firstName: "Andrew"
        , lastName: "Sushket"
        , number: "0630653554"
    }, {
        firstName: "Andrew"
        , lastName: "Pupkin"
        , number: "063658756"
    }, {
        firstName: "Petya"
        , lastName: "Juk"
        , number: "0682565869"
    }, {
        firstName: "Kurt"
        , lastName: "Kabein"
        , number: "0985689541"
    }, {
        firstName: "Sergiy"
        , lastName: "Petrov"
        , number: "0931992081"
    }];
    $scope.add = function () {
            $scope.editFirstName = "";
            $scope.editLastName = "";
            $scope.editNumber = "";
            $(".adding").css({
                display: "block"
            });
            $(".adding").animate({
                top: "0px"
            }, 1000);
        }
        //    $scope.delete = function (index) { //deleting 
        //        $scope.people.splice(index, 1);
        //    };
    $scope.delete = function (item) {
        for (var i in $scope.people) {
            if ($scope.people[i] === item) {
                $scope.people.splice(i, 1);
            }
        }
    };
    $scope.change = function (item) { //edit 
        $(".edit").css({
            display: "block"
        });
        $(".edit").animate({
            top: "0px"
        }, 1000);
        for (var i in $scope.people) {
            if ($scope.people[i] === item) {
                $scope.editFirstName = $scope.people[i].firstName;
                $scope.editLastName = $scope.people[i].lastName;
                $scope.editNumber = $scope.people[i].number;
                $scope.index=i;
            }
        }
    };
    $scope.save = function () { //saving edit
        $(".edit").animate({
            top: "-200px"
        }, 1000);
        setTimeout(function () {
            $(".edit").css({
                display: "none"
            });
            $(".background").css({
                display: "none"
            });
        }, 1000);
        $scope.people[$scope.index].firstName = $scope.editFirstName;
        $scope.people[$scope.index].lastName = $scope.editLastName;
        $scope.people[$scope.index].number = $scope.editNumber;
    };
    $scope.addNew = function () { //saving edit
        $(".adding").animate({
            top: "-200px"
        }, 1000);
        setTimeout(function () {
            $(".adding").css({
                display: "none"
            })
        }, 1000);
        $scope.people.push({
            firstName: $scope.editFirstName
            , lastName: $scope.editLastName
            , number: $scope.editNumber
        });
    };
    $scope.filter = function (option) {
        $scope.filters = option;
    }
});
