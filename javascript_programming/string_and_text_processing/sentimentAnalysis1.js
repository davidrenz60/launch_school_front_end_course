// Sentiment Analysis 1
//
// Sentiment analysis or sometimes also known as opinion mining is an approach to
// determine subjective information in a text and convert it into something more
// concrete. For example, we may derive based on keywords used in the text whether
// the mood was positive, negative or neutral.
//
// The use of sentiment analysis adds a dimension of data to content that is mostly
//  text based. Its basic task is classifying the polarity of given sentence, text,
//  or document. In this exercise, we will build something similar and simpler.
//
// There are lots of ways to implement a sentiment analysis. For this exercises,
// we will come up with two sets of arrays for words and do a keyword-based
// approach. The first of two arrays will contain words that connote a "positive"
// sentiment, while the second a "negative". Given the number of positive and
// negative words, the sentiment score can be computed as the difference between
// the count of the two. If the positive score is greater than the negative, then
// sentiment is positive. If positive is less than negative then then the sentiment
// is negative. If the two are equal, then the sentiment is neutral.
//
// Implement a function that takes a text as an argument and returns whether it had
// a positive, negative, or neutral disposition, given sets of positive and negative words.
//
// Excerpt of text taken from Wikipedia article comparing different versions of
// "To be, or not to be".

var textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

// Example

var positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
var negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];


function sentiment(text) {
  var sentiment;
  var textArray = text.toLowerCase().replace(/\n/g, ' ').replace(/[\,\!\.\?]/g, '').split(' ');
  var foundPositiveWords = textArray.filter(function(word) {
    return positiveWords.includes(word);
  });

  var foundNegativeWords = textArray.filter(function(word) {
    return negativeWords.includes(word);
  });

  if (foundPositiveWords.length > foundNegativeWords.length) {
    sentiment = 'Positive';
  } else if (foundPositiveWords.length < foundNegativeWords.length) {
    sentiment = 'Negative';
  } else {
    sentiment = 'Neutral';
  }

  console.log('There are ' + foundPositiveWords.length + ' positive words in the text.');
  console.log('Positive sentiments: ' + foundPositiveWords.join(', '));
  console.log('There are ' + foundNegativeWords.length + ' negative words in the text.');
  console.log('Positive sentiments: ' + foundNegativeWords.join(', '));
  console.log('The sentiment of the text is ' + sentiment + '.');
}

sentiment(textExcerpt);

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution
//
// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death
//
// The sentiment of the text is Negative.
