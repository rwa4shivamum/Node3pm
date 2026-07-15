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
    const {id} = req.params
    const unid = id.split("=")[1]
    const data = await Student.findById({_id:`${unid}`});
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
    const data = await Student.find();
    let { search, sort, order } = req.query;

    let filter = {};

    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    let sortOption = {};
    if (sort) {
      sortOption[sort] = order === "desc" ? -1 : 1;
    }

    const users = await Student.find(filter).sort(sortOption);
    res.json({
      status: true,
      message: "Response getting succusfully",
      data: [data],
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error getting in getAllStudents ${error.message}`,
    });
  }
};
