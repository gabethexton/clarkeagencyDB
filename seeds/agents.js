'use strict';

exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('agents').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('agents').insert({
                    id: 1,
                    username: 'cathie',
                    password: '1234',
                    firstname: 'Cathie',
                    lastname: 'Elliott',
                    displayname: 'Cat',
                    title: 'Broker-Owner',
                    phone: "555.123.1234",
                    email: "cathie@clarkeagency.net",
                    bio: "Cathie Elliott is the Broker Owner of the Clarke Agency, Inc. of Gunnison, Colorado. She is one of the area's top listing and selling real estate brokers. Cathie holds a Masters in Business Administration and is a Graduate of the Realtor Institute. She has also worked as a Small Business Development Center (SBDC) counselor for the S.B.A. and Assistant Professor of Business at Western State College (now Western State Colorado University) in Gunnison. Click on Small Business Library for some of her current articles.Since 1980, Cathie has been listing and selling real estate in the Gunnison, Colorado area with professionalism and commitment, priding herself in high ethical standards, honesty, and integrity. Excellent customer service is her strength, and helping buyers and sellers is a priority.",
                    created: new Date()
                }),
                knex('agents').insert({
                    id: 2,
                    username: 'josh',
                    password: '1234',
                    firstname: 'Josh',
                    lastname: 'Townsend',
                    displayname: 'Joshy',
                    title: "Broker-Associate",
                    phone: "555.123.1234",
                    email: "josh@clarkeagency.net",
                    bio: "Josh Townsend is a Broker Associate at The Clarke Agency, Inc. He has lived in the Gunnison Valley since 1985 and also works part time for Gunnison Valley Health as a CRCST. Josh enjoys raising his two boys as well as playing golf and hockey. He takes pride in home ownership and immaculate lawn care. Josh has great vision and extensive experience in home additions, construction remodels, and design from the ground up. Josh looks forward to chatting with you and answering questions you have about the beautiful Gunnison Valley.",
                    created: new Date()
                }), knex('agents').insert({
                    id: 3,
                    username: 'audrie',
                    password: '1234',
                    firstname: "Audrie",
                    lastname: "Townsend",
                    displayname: "Aud",
                    title: "Office Manager and Broker Associate",
                    phone: "555.123.1234",
                    email: "audrie@clarkeagency.net",
                    bio: "Audrie Townsend is the office manager and Broker Associate. She is a graduate of Western State College (now Western State Colorado University) with a degree in Business Administration, emphases in Marketing and Entrepreneurship. She also received a minor in Communications. Audrie graduated in May, 2004, receiving Magna Cum Laude honors. She has worked for The Clarke Agency, Inc. as a personal assistant since 1997 and also works part-time for a financial institution. Audrie exhibits high ethical standards and integrity. She looks forward to assisting you on your journey in buying or selling Real Estate.",
                    created: new Date()
                }),
                knex('agents').insert({
                    id: 4,
                    username: 'gabe',
                    password: '1234',
                    firstname: 'Gabriel',
                    lastname: 'Thexton',
                    displayname: 'Gabe',
                    title: 'Web Guy',
                    phone: "555.123.1234",
                    email: "gabethexton@gmail.com",
                    bio: "SuperShortTestBio",
                    created: new Date()
                }),
                knex.raw('ALTER SEQUENCE agents_id_seq RESTART WITH 5')
            ]);
        });
};
