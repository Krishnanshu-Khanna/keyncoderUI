import Course from "../models/course.js";

export const create_course = async (req, res) => {
  const course = new Course(req.body);
  try {
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const get_course = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const get_all_courses = async (req, res) => {
  const _id = req.params.id;
  try {
    const course = await Course.findById(_id);
    if (!course) {
      return res.status(404).send();
    }
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update_course = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "C_id",
    "C_image",
    "C_Topic",
    "C_title",
    "C_description",
    "Rating",
    "Educator_Names",
    "Educator_Note",
    "Reviews",
    "C_Objectives",
    "Duration",
    "Price",
    "CompletionPercentage",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).send();
    }

    updates.forEach((update) => (course[update] = req.body[update]));
    await course.save();
    res.send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const delete_course = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).send();
    }

    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
};
