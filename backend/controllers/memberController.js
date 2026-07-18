const memberService = require("../services/memberService");

const getAllMembers = async (req, res) => {
  try {
    const members = await memberService.getAllMembers();

    res.json({
      success: true,
      data: members,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllMembers,
};
