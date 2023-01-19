const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	content: {
		type: String,
		required: true,
	},
	deleted: {
		type: Boolean,
		required: true
	},
	timestamps: true
})

const Post = mongoose.model("User", postSchema)

module.exports = Post;