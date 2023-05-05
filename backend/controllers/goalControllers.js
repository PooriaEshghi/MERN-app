const asyncHandler = require("express-async-handler");

// @desc    Get goals
// @route   Get /api/goals/
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc    Post goal
// @route   Post /api/goals/
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add  a text field");
  }
  res.status(200).json({
    message: "Set goal",
  });
});

// @desc    Update goal
// @route   PUT /api/goals/
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
});

// @desc    Delete goal
// @route   Delete /api/goals/
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Deleted goal " });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
