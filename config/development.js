'use strict';

/**
 * File: development
 * Created by: tanmv
 * Date: 10/12/2018
 * Time: 21:41
 *
 */

module.exports = {
	rabbitMq: {
		vhost: 'my_vhost',
		host: 'localhost',
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