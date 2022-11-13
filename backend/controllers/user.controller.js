const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
})

const User = mongoose.model("User", userSchema)

//Uue kasutaja loomine
//Väga algeline, peab kindlaks tegema, et kõik info on korrektne ja et sama kasutajanimega kasutajaid ei ole juba olemas ect...
//Samuti parooli hashimine
exports.create = async(req, res) => {

	const newUser = await User.create({
		username: req.params.username,
		email: req.params.email,
		password: req.params.password,
	})
}