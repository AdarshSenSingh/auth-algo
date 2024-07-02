const express = require('express');
const router = express.Router();
const {
  createProblem,
  getProblems,
  getProblem,
  updateProblem,
  deleteProblem,
} = require('../controllers/problemController');
const authMiddleware = require('../middlewares/authMiddleware');
  // here route is /problem/....
router.use(authMiddleware);
router.post('/', createProblem);
router.get('/', getProblems);
router.get('/:id', getProblem);
router.put('/:id', updateProblem);
router.delete('/:id', deleteProblem);

module.exports = router;
