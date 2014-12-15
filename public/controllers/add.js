angular.module('MyApp')
    .controller('AddCtrl', function ($scope, $alert, Show, Lang) {
        $scope.languages = [];
        $scope.selectedLanguage = 0;
        Lang.getAll().then(function (result){
            $scope.selectedLanguage = navigator.language || navigator.userLanguage;
            $scope.languages = result.data;
        });
        $scope.addShow = function () {
            Show.save({showName: $scope.showName, lang: $scope.selectedLanguage}).$promise
                .then(function () {
                    $scope.showName = '';
                    $scope.addForm.$setPristine();
                    $alert({
                        content: 'TV show has been added.',
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                })
                .catch(function (response) {
                    $scope.showName = '';
                    $scope.addForm.$setPristine();
                    $alert({
                        content: response.data.message,
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                });
        };
    });