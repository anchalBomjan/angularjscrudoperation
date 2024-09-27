app.controller('studentController', function($scope, $routeParams, $location, studentService) {
    // Get all students
    $scope.students = studentService.getAllStudents();

    // Add or Edit student
    if ($routeParams.id) {
        $scope.student = angular.copy(studentService.getStudentById($routeParams.id));
    } else {
        $scope.student = {};
    }

    // Add new student
    $scope.addStudent = function() {
        studentService.addStudent($scope.student);
        $location.path('/students');
    };

    // Update student
    $scope.updateStudent = function() {
        studentService.updateStudent($scope.student);
        $location.path('/students');
    };

    // Delete student
    $scope.deleteStudent = function(id) {
        studentService.deleteStudent(id);
        $scope.students = studentService.getAllStudents(); // Refresh the list
    };
});
