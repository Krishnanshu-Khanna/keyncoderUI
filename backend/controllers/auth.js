import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";

export const register = async (req, res) => {
    await body('email')
        .isEmail().withMessage('Invalid email address')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                throw new Error('Email already in use');
            }
        })
        .run(req);

    await body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {
            type,
            name,
            email,
            password,
            phone,
            college,
            yearOfGraduation,
            programmeEnrolled,
            coursesAccessed,
        } = req.body;  // req body is destructured.

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);  // salt for hashing is generated
        const passwordHash = await bcrypt.hash(password, salt); // hashed password is created.

        const newUser = new User({
            type,
            name,
            email,
            password: passwordHash,
            phone,
            college,
            yearOfGraduation,
            programmeEnrolled,
            coursesAccessed,
        });             // here the User mongoose schema is invoked and hashed password is stored 

        const savedUser = await newUser.save(); // this new user is stored in database
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

        res.status(201).json({ token, savedUser });
        res.status(201).json(savedUser);

    } catch (err) {
        res.status(500).json({ error: err.message, msg: "error in registering" });
    }
}

// Login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body; // req body is destructed

        const user = await User.findOne({ email: email });  // database search is done using key email === req.body.email

        if (!user) return res.status(400).json({ msg: "User does not exist" });  // if no database match is found error thrown of non-existent user

        const isMatch = await bcrypt.compare(password, user.password);  // checks the normal password with hashed password 

        if (!isMatch) return res.status(400).json({ msg: "Password doesnt match" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // function to create the jwt token

        delete user.password;
        res.status(200).json({ token, user });

    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}