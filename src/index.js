'use strict';

/**
 * File: index
 * Created by: tanmv
 * Date: 10/12/2018
 * Time: 21:16
 *
 */

import RabbitMq from './libs/RabbitMq';
import queueController from './queueController';
import config from '../config';

const init = async () => {

	// RabbitMq
	try {
		const rabbitMqClient = await RabbitMq(config.rabbitMq);
		queueController(rabbitMqClient);
	} catch (e) {
		console.error(e);
		process.exit(1);
	}

};

init();