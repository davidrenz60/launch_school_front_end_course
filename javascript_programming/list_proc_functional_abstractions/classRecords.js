// Exercise: Class Records Summary
//
// One of the things that faculty do at the end of term is to make a class record summary of students based on the weighted scores of exams and exercises.

// Exams and Exercises
//
// The grading areas are exams and exercises, with the following weight:
//
// Grading Area	Weight
// Exam	65%
// Exercises	35%
// Each standard term has 4 exams, and several exercises.
// Every exam has a fixed total possible score of 100. Exercises, on the other hand,
// have varying score values and count, but the total value of exercise values always add up to 100.
// For example, a given term may have 5 exercises with possible total scores of [30, 20, 10, 20, 20]
// while another term may have 3 exercises with possible total scores of [20, 30, 50].
//
// When determing a student's grade, we'll first get a student's average score from the 4 exams,
// then add up all the exercise scores to get a number (out of 100).
// Then we'll apply the weights to get a final score, and use the following table to get the letter equivalent:
//
// Percent Grade	Letter Equivalent
// 93 - 100	A
// 85 - 92	B
// 77 - 84	C
// 69 - 76	D
// 60 - 68	E
// 0 - 59	F
// Let's work through an example. For a term with 3 exercises of [20, 30, 50],
// a student got [90, 80, 95, 70] on her 4 exams, and [20, 15, 40] on her exercises.
// We'll go through the following steps to get her final score:

// 1. Student average exam score: (90 + 80 + 95 + 71) / 4 = 84;
// 2. Student exercise score: 20 + 15 + 40 = 75;
// 3. Apply weights to get the final score: 84 * .65 + 75 * .35 = 80.85,
//    and round to the nearest integer: 81
// 4. The student's final score is expressed as "81 (C)", after looking up in the table above.
// Source Data and Class Record Summary Format
//
// The source data is in the format of student id and scores:

// var studentScores = {
//   student1: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: []
//     },
//   },
//   student2: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: []
//     },
//   },
//   student3: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: []
//     },
//   },
//   studentN: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: []
//     },
//   },
// };
// The class record summary needs to be in the format of:
//
// {
//   studentGrades: [ '93 (A)', '81 (C)', '86 (B)', '100 (A)', '69 (D)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 }
//   ],
// }
// The exam averages should round to one digit after the decimal point.
//
// Function Requirements
//
// Given these information, implement a function that will take a studentScores object and returns a class record summary object.
//
// You can use the following code to test out your implemention.

function generateClassRecordSummary(scores) {
  return {
    studentGrades: generateStudentGrades(scores),
    exams: generateExamData(scores),
  };
}

function generateStudentGrades(scores) {
  return Object.keys(scores).map(function(student) {
    var examScores = scores[student].scores.exams;
    var exerciseScores = scores[student].scores.exercises;

    var percentGrade = calculatePercentGrade(examScores, exerciseScores);
    return formatPercentAndLetterGrade(percentGrade);
  });
}

function generateExamData(scores) {
  var scoresPerStudent = Object.keys(scores).map(function(student) {
    return scores[student].scores.exams;
  });

  var scoresPerExam = transpose(scoresPerStudent);
  return scoresPerExam.map(function(scores) {
    return {
      average: calculateExamAverage(scores),
      minimum: findMinScore(scores),
      maximum: findMaxScore(scores),
    };
  });
}

function calculatePercentGrade(examScores, exerciseScores) {
  var avgExamScore = calculateExamAverage(examScores);
  var exerciseScore = calculateExerciseScore(exerciseScores);

  return Math.round(avgExamScore * 0.65 + exerciseScore * 0.35);
}

function formatPercentAndLetterGrade(percent) {
  var letter;

  if (percent > 92) {
    letter = 'A';
  } else if (percent > 84) {
    letter = 'B';
  } else if (percent > 76) {
    letter = 'C';
  } else if (percent > 68) {
    letter = 'D';
  } else if (percent > 59) {
    letter = 'E';
  } else {
    letter = 'F';
  }

  return percent + ' ('+ letter + ')';
}

function transpose(array) {
  return array[0].map(function(col, colIndex) {
    return array.map(function(row) {
      return row[colIndex];
    });
  });
}

function calculateExerciseScore(exerciseScores) {
  return exerciseScores.reduce(function(sum, score) {
    return sum + score;
  });
}

function calculateExamAverage(examScores) {
  var total = examScores.reduce(function(sum, score) {
    return sum + score;
  });

  return Number((total / examScores.length).toFixed(1));
}

function findMinScore(scores) {
  return scores.reduce(function(result, score) {
    return result <= score ? result : score;
  });
}

function findMaxScore(scores) {
  return scores.reduce(function(result, score) {
    return result >= score ? result : score;
  });
}

////////////////////////////////////////

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

generateClassRecordSummary(studentScores);

// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
