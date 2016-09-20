'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.createTable('listings', function (table) {
        table.increments();
        table.string('address').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('zip').notNullable();
        table.integer('price');
        table.string('description').notNullable();
        table.string('notes').notNullable();
        // table.integer('pics_id')
        //     .references('listing_pics.id').onDelete("CASCADE");
        // table.integer('details_id')
        //     .references('listing_details.id').onDelete("CASCADE");
        // table.timestamp('created');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('listings');
};
