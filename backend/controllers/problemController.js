const Problem = require('../models/Problem');

exports.createProblem = async (req, res) => {
  const { title, description, difficulty, testCases } = req.body;
  try {
    const problem = new Problem({ title, description, difficulty, testCases, user: req.user.id });
    await problem.save();
    res.status(201).json(problem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating problem' });
  }
};

exports.getProblems = async (req, res) => {
  try {
    const problems = await Problem.find({ user: req.user.id });
    res.status(200).json(problems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching problems' });
  }
};

exports.getProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem || problem.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching problem' });
  }
};

exports.updateProblem = async (req, res) => {
  const { title, description, difficulty, testCases } = req.body;
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem || problem.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    problem.title = title || problem.title;
    problem.description = description || problem.description;
    problem.difficulty = difficulty || problem.difficulty;
    problem.testCases = testCases || problem.testCases;
    await problem.save();
    res.status(200).json(problem);
  } catch (error) {
    res.status(500).json({ message: 'Error updating problem' });
  }
};

exports.deleteProblem = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem || problem.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    await problem.remove();
    res.status(200).json({ message: 'Problem deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting problem' });
  }
};
