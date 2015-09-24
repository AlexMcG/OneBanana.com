//$('#register-submit').click(
//		function() {
//			if ($scope.password != $scope.password) {
//				alert("Passwords do not match!");
//				$(location).attr('href', "html/index.html");
//			} else {
//				//$(location).attr('href', "html/index.html");
//			}
//		});


//$scope.add = function() {
//	if ($scope.emailReg != $scope.emailReg2) {
//		$scope.IsMatch = true;
//		return false;
//	}
//	$scope.IsMatch = false;
//};

var app = angular.module('match', []);
function match($scope){
	if ($scope.password != $scope.password) {
		alert("Passwords do not match!");
		$(location).attr('href', "html/index.html");
	} else {
		//$(location).attr('href', "html/index.html");
		alert("Match!");
	}
}