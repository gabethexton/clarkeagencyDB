'use strict';

var questionObjects = [{id: 5, name: abc}, {id: 6, name: xyz}];
// first query makes something like this array ^^, then..
questionObjects.forEach(function(question, index) {
  this.knex.select('answersTable.answers').from('questionsTable').leftJoin(
  'answersTable',
  'answersTable.questionId',
  'questionsTable.id').where('answersTable.questionId', question.id)
  .then(function(answers) {
    answers = answers.map(/*make your answers look the way you want...*/);
    questionObjects[index].answers = answers;
});


var listings = data;

listings.forEach(function (listing, index) {
    knex('listing_details')
    .select('*')
    .where('listing_details.listing', listing.id)
    .then(function (data) {
        listing.details = data;
    });
});
