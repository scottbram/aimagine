export const config = {
	runtime: 'nodejs',
};

const { ABSTRACT_API_KEY } = process.env
const { OPENAI_API_KEY } = process.env

// exports.handler = async (event, context) => {
export default async function handler (request, response) {
	const axios = require('axios');

	const now = new Date();
	const year = (now.toLocaleString("en-US", { year: "numeric" }));
	const month = (now.toLocaleString("en-US", { month: "2-digit" }));
	const day = (now.toLocaleString("en-US", { day: "2-digit" }));

	await axios.get(`https://holidays.abstractapi.com/v1/?api_key=${ABSTRACT_API_KEY}&country=US&year=${ year }&month=${month}&day=${day}`)
	.then( resp => {
		let respObj;

		respObj = {
			statusCode: 200,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(resp.data)
		};

		// return respObj;
		response(respObj);
	})
	.catch( err => {
		let errObj;

		const errBody = {
			'err_msg': err.message
		};

		errObj = {
			statusCode: 500,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(errBody)
		};

		response(errObj);
	});

	/* try {
		let respObj

		const resp = await mydoc_data('mydoc_locations')
			.select({
				maxRecords: 100,
				filterByFormula: filterFormula
			})
			.firstPage()

		if (typeof resp !== 'undefined') {
			respObj = {
				statusCode: 200,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(resp)
			}
		} else {
			respObj = {
				statusCode: 204,
				body: 'I got nada...'
			}
		}

		return respObj
	} catch (errObj) {
		const errBody = {
			'err_msg': errObj.message
		}

		return {
			statusCode: 500,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(errBody)
		}
	} */
};
