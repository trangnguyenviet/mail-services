'use strict';

/**
 * File: index
 * Created by: tanmv
 * Date: 10/12/2018
 * Time: 21:19
 *
 */

'use strict';

import { isEmail } from "../libs/Validate";
import { toJson } from "../libs/Parse";
import SendMail from '../service/SendMail';

export default (connection) => {
	connection.queue('send-mail', {
		autoDelete: false
	}, queue => {
		queue.subscribe({ack: true, prefetchCount: 1}, async (message) => {
			if(typeof message === 'string') {
				message = toJson(message);
			}

			if(process.env.NODE_ENV === 'development') {
				console.log(message);
			}

			switch (message.action) {
				case 'teacher':
					try {
						if(isEmail(message.to)) {
							const result = await SendMail(message.from, message.to, message.subject, message.html);
							if(process.env.NODE_ENV === 'development') {
								console.log(result);
							}
						}
						queue.shift(false);
					} catch(e) {
						queue.shift(true);
						console.error(e);
					}
					break;
				default:
					queue.shift(false);
					break;
			}
		});
	});
};
