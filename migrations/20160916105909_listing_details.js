'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.createTable('listing_details', function (table) {
        table.increments();
        table.integer('listing_id');
        table.string('detail').notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('listing_details');

};
