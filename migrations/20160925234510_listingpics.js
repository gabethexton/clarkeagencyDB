'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.table('listings', function (table) {
        table.string('pic');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.table('listings', function (table) {
        table.dropColumn('pic');
    });
};
