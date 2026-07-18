const getAllMembers = (req, res) => {
  res.json({
    success: true,
    message: "All HYPA members fetched successfully.",
    data: []
  });
};

module.exports = {
  getAllMembers,
};
