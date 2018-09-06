var app = angular.module("apps", []);
app.controller("ctrl", function($scope) {
	/* Array Select 1 */

	$scope.exam = [ "Internal-1", "Internal-2", "Internal-3", "Semester" ];

	/* Array Select 2 */

	$scope.colleges = [ {
		"college-id" : 8118,
		"collegeName" : "KCET",
		"Location" : "MANAPPARAI"
	}, {
		"college-id" : 8567,
		"collegeName" : "SIT",
		"Location" : "KARIYAPATTI"
	}, {
		"college-id" : 6828,
		"collegeName" : "ThiyagaRaja",
		"Location" : "MADURAI"
	}, {
		"college-id" : 9438,
		"collegeName" : "SCET",
		"Location" : "ARUPPUKOTTAI"
	} ];

	/* Array Select 3 */

	$scope.StudentName = [ {
		"person-id" : 1,
		"firstName" : "Mari",
		"lastName" : "Muthu",
		"Location" : "Thonugal"
	}, {
		"person-id" : 2,
		"firstName" : "Jefry",
		"lastName" : "Ramax",
		"Location" : "MANAPPARAI"
	}, {
		"person-id" : 3,
		"firstName" : "Hemanth",
		"lastName" : "Kumar",
		"Location" : "Sivagangai"
	}, {
		"person-id" : 4,
		"firstName" : "Henry",
		"lastName" : "Baskar",
		"Location" : "MANAPPARAI"
	} ];

	/* Array Select 4 */

	$scope.SubjectName = [ {
		"firstName" : "Computer",
		"lastName" : "Programming"
	}, {
		"firstName" : "Computer",
		"lastName" : "Graphics"
	}, {
		"firstName" : "Mobile",
		"lastName" : "Computing"
	}, {
		"firstName" : "Computer",
		"lastName" : "Network"
	}, ];

	/* Array Select 5 */

	$scope.StaffName = [ {
		"person-id":1,
		"firstName" : "Mari",
		"lastName" : "Murugan",
		"Location" : "Virudhunagar"
	}, {
		"person-id" : 2,
		"firstName" : "Stephen",
		"lastName" : "Raj",
		"Location" : "Thirunelveli"
	}, {
		"person-id" : 3,
		"firstName" : "Saranya",
		"lastName" : "Durai",
		"Location" : "Manapparai"
	}, {
		"person-id" : 4,
		"firstName" : "Raja",
		"lastName" : "Dhanushkodi",
		"Location" : "Madurai"
	} ];

	/* Multiple Select */

	$scope.subjects = [ {
		"subject" : "DBMS"
	}, {
		"subject" : "TOC"
	}, {
		"subject" : "TQM"
	}, {
		"subject" : "OOAD"
	}, {
		"subject" : "OOPS"
	}

	];
});