require('dotenv').config();
const { Pool } = require('pg');


const postgreConnectionString =
    `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;

console.log(postgreConnectionString);

const postgrePool = new Pool({
    connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL : postgreConnectionString,
    ssl: { rejectUnauthorized: false }
});

function getPlaces() {
    return postgrePool.query('select id,name,hasDelivery,hasTakeout,address,phoneNum,type,thumb from mynearbyplaces.places')
    .then(result => {
        console.log(result);
        if (result.rows) {
            return result.rows;
        } else {
            throw Error('The places could not be retrieved from the database.');
        }
    });
}

function getSearchPlace(name) {
    console.log(name)
    return postgrePool.query("select * from mynearbyplaces.places where name LIKE $1", [name])
        .then(result => {
            console.log(result);
            if (result.rows[0]) {
                return result.rows;
            } else {
                throw Error('The place could not be found in the database.');
            }
        });
}

module.exports = {getPlaces, getSearchPlace}