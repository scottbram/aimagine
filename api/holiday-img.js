const { ABSTRACT_API_KEY } = process.env
const { OPENAI_API_KEY } = process.env

exports.handler = async (event, context) => {
	const axios = require('axios');

	const now = new Date();
	const year = (now.toLocaleString("en-US", { year: "numeric" }));
	const month = (now.toLocaleString("en-US", { month: "2-digit" }));
	const day = (now.toLocaleString("en-US", { day: "2-digit" }));

	axios.get(`https://holidays.abstractapi.com/v1/?api_key=${ABSTRACT_API_KEY}&country=US&year=${ year }&month=${month}&day=${day}`)
	.then( resp => {
		let resp_obj;

		resp_obj = {
			statusCode: 200,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(resp.data)
		};

		return resp_obj;
	})
	.catch( err => {
		const errBody = {
			'err_msg': err.message
		};

		return {
			statusCode: 500,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(errBody)
		};
	});

	/* try {
		let resp_obj

		const resp = await mydoc_data('mydoc_locations')
			.select({
				maxRecords: 100,
				filterByFormula: filterFormula
			})
			.firstPage()

		if (typeof resp !== 'undefined') {
			resp_obj = {
				statusCode: 200,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(resp)
			}
		} else {
			resp_obj = {
				statusCode: 204,
				body: 'I got nada...'
			}
		}

		return resp_obj
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
