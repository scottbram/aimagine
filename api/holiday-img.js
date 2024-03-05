const { ABSTRACT_API_KEY } = process.env
const { OPENAI_API_KEY } = process.env

exports.handler = async (event, context) => {
	const axios = require('axios');

	axios.get(`https://holidays.abstractapi.com/v1/?api_key=${ ABSTRACT_API_KEY }&country=US&year=2020&month=12&day=25`)
	.then( resp => {
		console.log(resp.data);

		return resp.data
	})
	.catch( err => {
		console.log(err);
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
