angular.module('profile', [

])
    .controller('ProfileCtrl', function ($scope, ProfileService) {
        $scope.profiles = ProfileService.getProfile();
        $scope.addProfile = addProfile;

        function addProfile(newProfile) {
            ProfileService.addProfile(newProfile);

        }
    })


angular.module('profile').service('ProfileService', function () {
    var profiles = [
        { "fName": "Ravi", "lName": "Rajpurohit", "age": 22, "city": "Pune" },
        { "fName": "Sujay", "lName": "Pujari", "age": 25, "city": "Mumbai" },
        { "fName": "Sanket", "lName": "Rasane", "age": 27, "city": "Jaipur" },
        { "fName": "Parth", "lName": "Gharpure", "age": 19, "city": "Delhi" },
    ];

    this.getProfile = function () {
        return profiles;
    }


    function addProfile(newProfile) {
        console.log("hiiiiiiiiiiiiiiiiiiiii");
        profiles.push(newProfile);
    }

    this.addProfile = addProfile;
})