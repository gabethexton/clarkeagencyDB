'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.createTable('listing_pics', function (table) {
        table.increments();
        table.integer('listing_id');
        table.string('url').notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('listing_pics');
};
