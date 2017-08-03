angular.module('profile',[

])
.controller('ProfileCtrl', function($scope){
    $scope.profiles = [
        {"fName":"Ravi","lName":"Rajpurohit","age":22,"city":"Pune"},
        {"fName":"Sujay","lName":"Pujari","age":25,"city":"Mumbai"},
        {"fName":"Sanket","lName":"Rasane","age":27,"city":"Jaipur"},
        {"fName":"Parth","lName":"Gharpure","age":19,"city":"Delhi"},
    ];




    function addProfile(newProfile) {
        console.log("hiiiiiiiiiiiiiiiiiiiii");
        $scope.profiles.push(newProfile);
    }

    // $scope.add = function(){
    //     console.log="hiii";
    // }

    $scope.addProfile = addProfile;
})