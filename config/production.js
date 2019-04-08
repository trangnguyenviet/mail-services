'use strict';

/**
 * File: production
 * Created by: tanmv
 * Date: 10/12/2018
 * Time: 21:41
 *
 */

module.exports = {
	rabbitMq: {
		host: '10.0.0.60',
		port: 5672,
		login: 'admin',
		password: 'admin@123',
		connectionTimeout: 10000,
		noDelay: true,
		ssl: {
			enabled : false
		}
	}
};