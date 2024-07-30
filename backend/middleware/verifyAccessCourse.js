import User from "../models/User.js";

export const verifyAccessCourse = async (req, res, next) => {
    try {
        const { userId, course } = req.body;
        //   const { course } = req.body;
        //   const userId = req.user.id; // Assuming userId is part of the JWT payload

        const user = await User.findById(userId);
        if (!user) return res.status(400).json({ msg: 'User does not exist' });

        if (user.coursesAccessed.includes(course)) {
            req.course = course; // Store the course information in the request object
            next(); // Proceed to the next middleware or route handler
        } else {
            res.status(200).json({ redirectTo: '/' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};