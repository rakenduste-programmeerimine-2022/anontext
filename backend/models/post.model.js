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
	language: {
		type: String,
		required: true,
	},
	public: {
		type: Boolean,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	deleted: {
		type: Boolean,
		required: true
	},
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post;