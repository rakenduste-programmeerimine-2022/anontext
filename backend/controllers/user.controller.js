const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

exports.register = async (req, res) => {
	const {username, email, password} = req.body

	//Kui kasutajanimi v email on juba andmebaasis olemas, siis nah
	if (await User.findOne({email}) || await User.findOne({username})) {
		return res.status(401).json({message: "Username or email already taken!"})
	}

	console.log(username, email, password)

	//Kui pole saadetud mingeid vajalikke andmeid, hetkel ei t66ta
	if(!username || !email || !password) {
		res.send(401)
	}

	const hashedPassword = bcrypt.hashSync(password, 10);

	const newUser = new User({
		username,
		email,
		password: hashedPassword
	})

	newUser.save()
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: ' + err));
}