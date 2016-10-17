// Sentiment Analysis 2
//
// Re-implement the sentiment analysis, but this time make use of regex.
// The use of regex for processing text-based data is very powerful.
// If you would notice in the previous approach to doing sentiment analysis, there
// words that were like the ones in our keywords that weren't counted because they
// weren't an exact match.
//
// This could've been remedied by adding the other variations of the word,
// for example: fortune --> fortunes, respect --> respected, oppress --> oppressed,
// or death --> deaths. This would've have worked, but with a regex based keyword
// list, it's more obvious and expressive that we're working with variations of
// those keywords.
//

var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|ed)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(noble)|(resolut(e|ion)?)/gi;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or)?)/gi;

function sentiment(text) {
  var sentiment;
  var textArray = text.toLowerCase().replace(/\n/g, ' ').replace(/[\,\!\.\?]/g, '').split(' ');

  var positiveWords = text.match(positiveRegex);
  var negativeWords = text.match(negativeRegex);

  if (positiveWords.length > negativeWords.length) {
    sentiment = 'Positive';
  } else if (positiveWords.length < negativeWords.length) {
    sentiment = 'Negative';
  } else {
    sentiment = 'Neutral';
  }

  console.log('There are ' + positiveWords.length + ' positive words in the text.');
  console.log('Positive sentiments: ' + positiveWords.join(', '));
  console.log('There are ' + negativeWords.length + ' negative words in the text.');
  console.log('Positive sentiments: ' + negativeWords.join(', '));
  console.log('The sentiment of the text is ' + sentiment + '.');
}

sentiment(text);

// console output

// There are 9 positive type words in the text.
// Positive sentiments: nobler, fortune, devoutly, dream, dreams, respect, love, patient, resolution
//
// There are 10 negative type words in the text.
// Negative sentiments: troubles, die, heartache, die, death, scorns, oppressor's, despised, weary, death
//
// The sentiment of the text is Negative.
