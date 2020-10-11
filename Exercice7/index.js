'use strict';

/**
 * ComputeNotes: Calculate the average of a student's grades
 * @param {number[]} grades all the grades of a student
 */
var ComputeNotes = function ComputeNotes(grades) {
  this.grades = grades;
}

/**
 * Calculate the average grade of the student
 */
ComputeNotes.prototype.averageGrade = function() {
  var sumNotes = 0;
  this.grades.forEach(function(grade) {
    sumNotes += grade
  })

  return (sumNotes/this.grades.length).toFixed(2)
}

/**
 * run our app
 */
ComputeNotes.prototype.run = function() {
  var textHtml = {
    'listGrades': document.createElement('p'),
    'averageGrade': document.createElement('span')
  }

  textHtml['listGrades'].textContent = 'Cet étudiant à pour notes : ' + this.grades;
  textHtml['averageGrade'].textContent = 'Ce qui lui fait ' + this.averageGrade() + ' de moyenne';

  for (const key in textHtml) {
    document.body.appendChild(textHtml[key])
  }
}

var student = new ComputeNotes([12, 12, 12, 13, 19, 18, 18, 19, 19, 6, 3, 3, 3, 17, 18]);
student.run();