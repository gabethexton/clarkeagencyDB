'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('listings').insert({
            id: 1,
            address:"1406 Rock Creek Rd.",
            city:"Gunnison",
            state:"CO",
            zip:"81230",
            price:18000,
            description: "This 3 bedroom/2 bath home was built in 2002 and is affordable & in good shape.",
            notes:"Deed restricted property so buyers must meet financial qualifications through the Gunnison County Housing Authority."
        }),
        knex('listings').insert({
            id: 2,
            address:"721 S 9th",
            city:"Gunnison",
            state:"CO",
            zip:"81230",
            price:365000,
            description:"Unique property with huge shop building/garage with nicely designed owner’s apartment upstairs.",
            notes:"Two bedroom apartment above 2000+ sq. ft. shop just 1 block from the commercial airport & 2 blocks from the non-commercial airport."
        }),
        knex('listings').insert({
            id: 3,
            address:"1050 Camino Del Rio ",
            city:"Gunnison",
            state:"CO",
            zip:"81230",
            price:565000,
            description:"Gunnison River front home features large deck over the river, 1.3 wooded acres, water & fishing rights.",
            notes:"Log home with spacious rooms on a private road close to the Dos Rios Golf course. Balcony off master bedroom."
        }),
        knex.raw('ALTER SEQUENCE listings_id_seq RESTART WITH 4')
      ]);
    });
};
