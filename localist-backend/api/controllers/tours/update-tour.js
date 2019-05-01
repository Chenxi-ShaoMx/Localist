module.exports = {
	friendlyName : 'update-tour',

	description  : 'Update a tour',

	inputs       : {
		title          : {
			required    : true,
			type        : 'string',
			description : 'Title of tour'
		},

		description    : {
			required    : true,
			type        : 'string',
			maxLength   : 200,
			example     : 'passwordlol',
			description :
				'The unencrypted password to use for the new account.'
		},

		duration_short : {
			required    : true,
			type        : 'number',
			description : 'The minimum duration in min.'
		},

		duration_long  : {
			required    : true,
			type        : 'number',
			description : 'The maximum duration in min.'
		},

		price_low      : {
			required    : true,
			type        : 'number',
			description : 'The minimum price in dollars.'
		},

		price_high     : {
			required    : true,
			type        : 'number',
			description : 'The maximum price in dollars.'
		}
	},

	exits        : {
		success : {
			description : 'Tour updated successfully.'
		},

		invalid : {
			responseType : 'badRequest',
			description  :
				'The provided fullName, password and/or email address are invalid.'
		}
	},

	fn           : async function (inputs){
		// Initialize Firebase
		var firebase = require('../../database/firebase.js')
		var database = firebase.database()
		var toursRef = database.ref('tours')
		var key = this.req.params.id

		var tour = toursRef.child(key).update({
			title       : inputs.title,
			description : inputs.description,
			duration    : {
				short : inputs.duration_short,
				long  : inputs.duration_long
			},
			price       : {
				low  : inputs.price_low,
				high : inputs.price_high
			}
		})

		this.res.json(tour)
	}
}
