app.get("/users", async (req, res) => {
  let { search, sort, order } = req.query;

  let filter = {};

  if (search) {
    filter.name = { $regex: search, $options: "i" };
  }

  let sortOption = {};
  if (sort) {
    sortOption[sort] = order === "desc" ? -1 : 1;
  }

  const users = await User.find(filter).sort(sortOption);

  res.json(users);
});
