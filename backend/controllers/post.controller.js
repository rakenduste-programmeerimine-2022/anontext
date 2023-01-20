const User = require("../models/user.model");
const Post = require("../models/post.model");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

exports.createNewPost = async (req, res) => {
	var {content, language, public} = req.body
	const authToken = req.get("Authorization")

	if (!authToken) {
		public = false
		author = null
		email = null
	} else {
		const decodedToken = jwt.decode(authToken)
		const {email} = decodedToken
		var author = await User.findOne({email})
	}
	//kasutajat ei leitud, ei saa avalikku postitust teha
	if (!author) {
		public = false
	}
	
	const link = uuidv4()
	
	const newPost = new Post({
		author,
		content,
		language,
		public,
		link,
		deleted: false
	}).save()
	.then(() => res.json({message: 'Note made!', link: link}))
	.catch(err => res.sendStatus(400).json('Error: ' + err));

}