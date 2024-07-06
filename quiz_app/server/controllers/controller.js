import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js';

/** Get all questions */
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        console.error("Error fetching questions:", error);
        res.status(500).json({ error: error.message });
    }
}

/** Insert all questions */
export async function insertQuestions(req, res) {
    try {
        // Mapping data to match the schema
        const questionData = questions.map((q, index) => ({
            question: q,
            answer: answers[index]
        }));

        await Questions.insertMany(questionData);
        res.json({ msg: "Data saved successfully..!" });
    } catch (error) {
        console.error("Error inserting questions:", error);
        res.status(500).json({ error: error.message });
    }
}

/** Delete all questions */
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany(); // Deletes all documents in the Questions collection
        res.json({ msg: "All questions deleted successfully..!" });
    } catch (error) {
        console.error("Error deleting questions:", error);
        res.status(500).json({ error: error.message });
    }
}

/** Get all results */
export async function getResult(req, res) {
    try {
        const results = await Results.find();
        res.json(results);
    } catch (error) {
        console.error("Error fetching results:", error);
        res.status(500).json({ error: error.message });
    }
}

/** Store a new result */
export async function storeResult(req, res) {
    try {
        const result = new Results(req.body);
        await result.save();
        res.json({ msg: "Result saved successfully..!" });
    } catch (error) {
        console.error("Error saving result:", error);
        res.status(500).json({ error: error.message });
    }
}

/** Delete all results */
export async function dropResult(req, res) {
    try {
        await Results.deleteMany(); // Deletes all documents in the Results collection
        res.json({ msg: "All results deleted successfully..!" });
    } catch (error) {
        console.error("Error deleting results:", error);
        res.status(500).json({ error: error.message });
    }
}