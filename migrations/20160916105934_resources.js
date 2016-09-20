'use strict';


exports.up = function (knex, Promise) {
    return knex.schema.createTable('resources', function (table) {
        table.increments();
        table.string('category').notNullable();
        table.string('subcategory');
        table.string('title').notNullable();
        table.integer('agent_id')
            .references('agents.id').onDelete("CASCADE");
        table.string('text', 10000);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('resources');

};
