const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
})

const User = mongoose.model("User", userSchema)

//Uue kasutaja loomine
//Väga algeline, peab kindlaks tegema, et kõik info on korrektne ja et sama kasutajanimega kasutajaid ei ole juba olemas ect...
//Samuti parooli hashimine

module.exports = User;