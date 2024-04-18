function determineGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 49 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

var marks = prompt("Please enter the student's marks (0-100):");
marks = Number(marks);

if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    var grade = determineGrade(marks);
    alert("The grade is: " + grade);
} else {
    alert("Invalid input. Marks should be between 0 and 100.");
}
