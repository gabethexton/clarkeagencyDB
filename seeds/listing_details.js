'use strict';

exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('listing_details').del()
        // LISTING 1 DETAILS LISTING 1 DETAILS LISTING 1 DETAILS LISTING 1 DETAILS LISTING 1 DETAILS LISTING 1 DETAILS LISTING 1 DETAILS
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('listing_details').insert({
                    id: 1,
                    listing_id: 1,
                    detail: "Approximately 1,140 sq. ft.",
                }),
                knex('listing_details').insert({
                    id: 2,
                    listing_id: 1,
                    detail: "3 bedroom; 2 bath",
                }),
                knex('listing_details').insert({
                    id: 3,
                    listing_id: 1,
                    detail: "440 sq.ft. 2 car garage",
                }),
                knex('listing_details').insert({
                    id: 4,
                    listing_id: 1,
                    detail: "Built in 2002",
                }),
                knex('listing_details').insert({
                    id: 5,
                    listing_id: 1,
                    detail: "$25 per month dues",
                }),
                knex('listing_details').insert({
                    id: 6,
                    listing_id: 1,
                    detail: "$708 annual real property taxes",
                }),
                knex('listing_details').insert({
                    id: 7,
                    listing_id: 1,
                    detail: ".11 acre across from the Community Center",
                }),
                knex('listing_details').insert({
                    id: 8,
                    listing_id: 1,
                    detail: "Main floor master bedroom suite",
                }),
                knex('listing_details').insert({
                    id: 9,
                    listing_id: 1,
                    detail: "Great location within walking distance of WSCU, schools, downtown, & bus to the ski area",
                }), knex('listing_details').insert({
                    id: 10,
                    listing_id: 1,
                    detail: "Energy star rated for efficiency with double pane windows & low utility bills",
                }),
                // LISTING 2 DETAILS LISTING 2 DETAILS LISTING 2 DETAILS LISTING 2 DETAILS LISTING 2 DETAILS LISTING 2 DETAILS LISTING 2 DETAILS LISTING 2 DETAILS
                knex('listing_details').insert({
                    id: 11,
                    listing_id: 2,
                    detail: "2 bedroom; 2 bath",
                }),
                knex('listing_details').insert({
                    id: 12,
                    listing_id: 2,
                    detail: "1,224 sq. ft. apartment",
                }),
                knex('listing_details').insert({
                    id: 13,
                    listing_id: 2,
                    detail: "840 sq. ft. garage & office",
                }),
                knex('listing_details').insert({
                    id: 14,
                    listing_id: 2,
                    detail: "1,360 sq. ft. shop area",
                }),
                knex('listing_details').insert({
                    id: 15,
                    listing_id: 2,
                    detail: "$2,439 annual real property taxes",
                }),
                knex('listing_details').insert({
                    id: 16,
                    listing_id: 2,
                    detail: "Zoned Industrial",
                }),
                knex('listing_details').insert({
                    id: 17,
                    listing_id: 2,
                    detail: "Metal building on concrete slab",
                }),
                knex('listing_details').insert({
                    id: 18,
                    listing_id: 2,
                    detail: "Built in 2005",
                }),
                knex('listing_details').insert({
                    id: 19,
                    listing_id: 2,
                    detail: "Great for auto repair/painting, carpentry, metal work",
                }),
                knex('listing_details').insert({
                    id: 20,
                    listing_id: 2,
                    detail: "Upstairs kitchen, living room, utility room, bath & 2 bedrooms",
                }),
                // LISTING 3 DETAILS LISTING 3 DETAILS LISTING 3 DETAILS LISTING 3 DETAILS LISTING 3 DETAILS LISTING 3 DETAILS LISTING 3 DETAILS
                knex('listing_details').insert({
                    id: 21,
                    listing_id: 3,
                    detail: "Approximately 2,816 sq. ft.",
                }),
                knex('listing_details').insert({
                    id: 22,
                    listing_id: 3,
                    detail: "4 bedroom; 3 bath",
                }),
                knex('listing_details').insert({
                    id: 23,
                    listing_id: 3,
                    detail: "Built in 1975 with remodeling",
                }),
                knex('listing_details').insert({
                    id: 24,
                    listing_id: 3,
                    detail: "Water & fishing rights",
                }),
                knex('listing_details').insert({
                    id: 25,
                    listing_id: 3,
                    detail: "624 sq.ft. 2 car attached garage",
                }),
                knex('listing_details').insert({
                    id: 26,
                    listing_id: 3,
                    detail: "Large breezeway for storage, & sports equipment",
                }),
                knex('listing_details').insert({
                    id: 27,
                    listing_id: 3,
                    detail: "1.306 acres",
                }),
                knex('listing_details').insert({
                    id: 28,
                    listing_id: 3,
                    detail: "$1,572 annual real property taxes",
                }),
                knex('listing_details').insert({
                    id: 29,
                    listing_id: 3,
                    detail: "Deck overlooking the river",
                }),
                knex('listing_details').insert({
                    id: 30,
                    listing_id: 3,
                    detail: "Balcony off the master bedroom",
                }),
                knex.raw('ALTER SEQUENCE listing_details_id_seq RESTART WITH 31')
            ]);
        });

};
