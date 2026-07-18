const memberModel = require("../models/memberModel");

const getAllMembers = async () => {
  return await memberModel.getAllMembers();
};

module.exports = {
  getAllMembers,
};
