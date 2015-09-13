/**
 * Created by Shawn on 9/12/15.
 */
angular.module("myapp", [])
	.controller("MyController", function($scope, $http) {
		$scope.myForm = {};

		$scope.myForm.submitTheForm = function(item, event) {
			var dataObject = {
				name : $scope.myForm.name
				,car  : $scope.myForm.car
			};

			var responsePromise = $http.post("/angularjs-examples/json-test-data.jsp", dataObject, {});
			responsePromise.success(function(dataFromServer, status, headers, config) {
				console.log(dataFromServer.title);
			});
			responsePromise.error(function(data, status, headers, config) {
				alert("Submitting form failed!");
			});
		}

	});

//$("#taskForm").submit(function(event){
//	event.preventDefault();
//	var formData = $("#taskForm").serialize();
//	formData += "&complete=false";
//	$.ajax({
//		type: "POST",
//		data: formData,
//		url: "/api/todos",
//		success: function(data){
//			taskData = data;
//			appendTasks();
//		}
//	});
//});
