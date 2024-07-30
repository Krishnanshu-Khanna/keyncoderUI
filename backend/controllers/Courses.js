import Course from "../models/Course.js";
import User from "../models/User.js";

export const registerCourse = async (req, res) => {
    try {
        // return res.end("Hello, worl!");
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.status(201).json({ success: true, data: newCourse });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

export const getCourse = async (req, res) => {
    try {
        const topCourses = await Course.find().sort({ rating: -1 }).limit(5);
        res.status(201).json(topCourses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top courses' });
    }
};

// Check if user has access to a course
// _id

export const checkCourseAccess = async (req, res) => {
    try {
        console.log("checks out!");
        res.send("checks out");
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

