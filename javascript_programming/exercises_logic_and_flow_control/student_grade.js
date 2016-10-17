var scores = [];
var avgScore;
var grade;

function avg(scores) {
  var score = 0;
  for (i = 0; i < scores.length; i++) {
    score += scores[i];
  }

  return (score / scores.length);
}

function scoreToGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 50) {
    return 'C';
  } else {
    return 'F';
  }
}

scores.push(Number(prompt('Enter score 1')));
scores.push(Number(prompt('Enter score 2')));
scores.push(Number(prompt('Enter score 3')));

avgScore = avg(scores);
grade = scoreToGrade(avgScore);

console.log('Based on the average of your 3 scores your letter grade is \"' + grade + '\"');
