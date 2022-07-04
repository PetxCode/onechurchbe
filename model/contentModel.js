const mongoose = require("mongoose");

const audioContentSchema = mongoose.Schema(
	{
		title: {
			type: String,
		},
		decription: {
			type: String,
		},
		audio: {
			type: String,
		},

		audioFile: {
			type: String,
		},

		audioID: {
			type: String,
		},
		cost: {
			type: Number,
		},

		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},

		like: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "likes",
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("audioContents", audioContentSchema);
