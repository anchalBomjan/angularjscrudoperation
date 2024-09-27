app.factory('studentService', function() {
    var students = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 }
    ];

    return {
        getAllStudents: function() {
            return students;
        },
        getStudentById: function(id) {
            return students.find(student => student.id === parseInt(id));
        },
        addStudent: function(student) {
            student.id = students.length + 1;
            students.push(student);
        },
        updateStudent: function(student) {
            for (var i = 0; i < students.length; i++) {
                if (students[i].id === student.id) {
                    students[i] = student;
                    break;
                }
            }
        },
        deleteStudent: function(id) {
            var index = students.findIndex(student => student.id === id);
            if (index !== -1) {
                students.splice(index, 1);
            }
        }
    };
});
