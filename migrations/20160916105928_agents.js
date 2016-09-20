'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.createTable('agents', function (table) {
        table.increments();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('displayname');
        table.string('title');
        table.string('phone').notNullable();
        table.string('email').notNullable();
        table.string('bio', 1000);
        table.timestamp('created');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('agents');
};
