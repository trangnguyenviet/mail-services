'use strict';

/**
 * File: index
 * Created by: tanmv
 * Date: 10/12/2018
 * Time: 21:36
 *
 */
const production = require('./production');
const development = require('./development');

const config = {
	mail: {
		host: 'email-smtp.us-east-1.amazonaws.com',
		port: 465,
		secure: true, // use SSL
		auth: {
			user: 'AKIAJRS2KEXE77J2ID6A',
			pass: 'AoWoYGIDWO7tQXttvArcXTRS6sJllRd1YBvLOeYmyJV7'
		}
	}
};

const configFinal = process.env.NODE_ENV === 'production' ? Object.assign(config, production): Object.assign(config, development);
module.exports = configFinal;