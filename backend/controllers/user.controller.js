const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

exports.register = async (req, res) => {
	const {username, email, password} = req.body

	//Kui kasutajanimi v email on juba andmebaasis olemas, siis nah
	if (await User.findOne({email}) || await User.findOne({username})) {
		return res.status(400).send({message: "Username or email already taken!"})
	}

	//Kui pole saadetud mingeid vajalikke andmeid, hetkel ei t66ta
	if(!username || !email || !password) {
		res.send("Some fields were not filled in!")
		return
	}

	const hashedPassword = bcrypt.hashSync(password, 10);

	const newUser = new User({
		username,
		email,
		password: hashedPassword
	})

	newUser.save()
		.then(() => res.json('User added!'))
		.catch(err => res.sendStatus(400).json('Error: ' + err));
}

exports.login = async(req, res) => {
	const {username, password} = req.body

	const user = await User.findOne({username})

	if (!user) {
		res.status(400).send({message: "Incorrect user or password"})
		return
	}

	const comparePasswords = await bcrypt.compare(password, user.password)

	if (!comparePasswords) {
		res.status(400).send({message: "Incorrect user or password"})
		return
	}

	//k6ik good, saame sisse logida

	const token = jwt.sign(
		{user_id: user.__id, username: user.username, email: user.email},
		process.env.JWT_KEY,
		{
			expiresIn: "24h",
		}
	);

	res.send({message: "Successful login", token});
}

exports.getUser = async (req, res) => {
	const authToken = req.get("Authorization")
	console.log(authToken)

	if (!authToken) {
		return res.status(400).send({message: "Not logged in!"})
	}
	const { userid, username, email } = jwt.decode(authToken)
	console.log(username)
	res.status(200).send({username: username})

}