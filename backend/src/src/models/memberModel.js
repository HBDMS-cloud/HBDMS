const pool = require("../config/database");

const getAllMembers = async () => {
  const result = await pool.query("SELECT * FROM members");
  return result.rows;
};

module.exports = {
  getAllMembers,
};
