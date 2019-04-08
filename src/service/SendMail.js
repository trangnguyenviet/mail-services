'use strict';

/**
 * File: Email
 * Created by: tanmv
 * Date: 10/12/2018
 * Time: 21:54
 *
 */

import nodemailer from 'nodemailer';
import config from '../../config';

const transporter = nodemailer.createTransport(config.mail);

export default async (from, to, subject, html) => {
	return new Promise((resolve, reject) => {
		transporter.sendMail({
			from, to, subject, html
		}, (error, info) => {
			if(error) reject(error);
			else resolve(info);
		});
	});
}