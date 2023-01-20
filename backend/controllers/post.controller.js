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

exports.getUserPosts = async (req, res) => {
	const authToken = req.get("Authorization")
	if (!authToken) {
		res.status(400).send({message: "You aren't logged in"})
		return
	}

	const decodedToken = jwt.decode(authToken)
	const username = decodedToken.username
	if (!username) {
		res.status(400).send({message: "This token isn't valid"})
		return
	}

	const user = await User.findOne({username})

	if (!user) {
		res.status(400).send({message: "Something is REALLY wrong."})
		return
	} 

	Post.find({author: user}, function(err, posts) {
		return res.end(JSON.stringify(posts))
	})
}

exports.getPost = async (req, res) => {
	Post.findOne({link: req.params.postid}, function(err, post) {
		console.log(JSON.stringify(post))
		return res.end(JSON.stringify(post))
	})
}