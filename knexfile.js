'use strict';

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL || 'postgres://localhost/clarkeagency'
    },
    production: {
        client : 'postgresql',
        connection: process.env.DATABASE_URL || 'postgres://localhost/clarkeagency',
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
