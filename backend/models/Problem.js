const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    testCases: [
        {
            input: { type: String, required: true },
            output: { type: String, required: true },
        },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Problem = mongoose.model('Problem', ProblemSchema);
module.exports = Problem;
