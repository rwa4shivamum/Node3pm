import { Student } from "../models/studentsSchema.js";

export const createStudents = async (req, res) => {
  try {
    const { name, email, password, gender, hobby, city } = req.body;
    if (
      !name ||
      !email ||
      !password ||
      !gender ||
      !email.includes("@") ||
      password.length < 8
    ) {
      res.json({
        status: false,
        message: "Field is missing",
      });
    }
    await Student.create({ name, email, password, gender, hobby, city });
    res.json({
      status: true,
      message: "I am posting the students successfully",
      data: { name, email, password, gender, hobby, city },
    });
  } catch (error) {
    res.json({
      status: false,
      message: `Error gettting ${error.message}`,
    });
  }
};

export const createManyStudents = async (req, res) => {
  try {
    const data = req.body;

    await Student.insertMany(data);

    res.json({
      status: true,
      data1: data,
    });
  } catch (error) {
    res.json({
      status: false,
      message: `Error inserting many Data ${error.message}`,
    });
  }
};

export const getStudents = async (req, res) => {
  try {
    const { id } = req.params;
    const unid = id.split("=")[1];
    const data = await Student.findById({ _id: `${unid}` });
    res.json({
      status: true,
      message: "Response getting succusfully",
      data: [data],
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const { search, sort, order} = req.query;

    // 🔍 SEARCH FILTER
    let filter = {};
    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    // 🔃 SORT OPTION
    let sortOption = {};
    if (sort) {
      sortOption[sort] = order === "desc" ? -1 : 1;
    }

    // 📄 QUERY WITH SEARCH + SORT
    const students = await Student.find(filter)
      .sort(sortOption)

    res.status(200).json({
      status: true,
      message: "Students fetched successfully",
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};