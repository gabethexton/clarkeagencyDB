'use strict';

exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('listing_pics').del()
        .then(function () {
            return Promise.all([
                // lISTING 1 PICS lISTING 1 PICS lISTING 1 PICS lISTING 1 PICS lISTING 1 PICS
                knex('listing_pics').insert({
                    id: 1,
                    listing_id: 1,
                    url: "http://clarkeagency.net/images/1406RockCreekRd-ditch.jpg"
                }),
                knex('listing_pics').insert({
                    id: 2,
                    listing_id: 1,
                    url: "http://clarkeagency.net/images/1406RockCreekRd-1kitchen1.jpg"
                }),
                knex('listing_pics').insert({
                    id: 3,
                    listing_id: 1,
                    url: "http://clarkeagency.net/images/1406RockCreekRd-garage.jpg"
                }),
                knex('listing_pics').insert({
                    id: 4,
                    listing_id: 1,
                    url: "http://clarkeagency.net/images/1406RockCreekRd-4bath2.jpg"
                }),
                knex('listing_pics').insert({
                    id: 5,
                    listing_id: 1,
                    url: "http://clarkeagency.net/images/1406RockCreekRd-dining.jpg"
                }),
                //LISTING 2 PICS LISTING 2 PICS LISTING 2 PICS LISTING 2 PICS LISTING 2 PICS
                knex('listing_pics').insert({
                    id: 6,
                    listing_id: 2,
                    url: "http://clarkeagency.net/images/721S9th-dining1.jpg"
                }),
                knex('listing_pics').insert({
                    id: 7,
                    listing_id: 2,
                    url: "http://clarkeagency.net/images/721S9th-garage1.jpg"
                }),
                knex('listing_pics').insert({
                    id: 8,
                    listing_id: 2,
                    url: "http://clarkeagency.net/images/721S9th-kitchen1.jpg"
                }),
                knex('listing_pics').insert({
                    id: 9,
                    listing_id: 2,
                    url: "http://clarkeagency.net/images/721S9th-shop2.jpg"
                }),
                knex('listing_pics').insert({
                    id: 10,
                    listing_id: 2,
                    url: "http://clarkeagency.net/images/721S9th-living1.jpg"
                }),
                // LISTING 3 PICS LISTING 3 PICS LISTING 3 PICS LISTING 3 PICS LISTING 3 PICS
                knex('listing_pics').insert({
                    id: 11,
                    listing_id: 3,
                    url: "http://clarkeagency.net/images/1050CaminodelRio-1kitchen1.jpg"
                }),
                knex('listing_pics').insert({
                    id: 12,
                    listing_id: 3,
                    url: "http://clarkeagency.net/images/1050CaminodelRio-1kitchen2.jpg"
                }),
                knex('listing_pics').insert({
                    id: 13,
                    listing_id: 3,
                    url: "http://clarkeagency.net/images/1050CaminodelRio-2living1.jpg"
                }),
                knex('listing_pics').insert({
                    id: 14,
                    listing_id: 3,
                    url: "http://clarkeagency.net/images/1050CaminodelRio-river2.jpg"
                }),
                knex('listing_pics').insert({
                    id: 15,
                    listing_id: 3,
                    url: "http://clarkeagency.net/images/1050CaminodelRio-close.jpg"
                }),
                knex.raw('ALTER SEQUENCE listing_pics_id_seq RESTART WITH 16')
            ]);
        });
};
