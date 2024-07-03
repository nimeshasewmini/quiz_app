import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'


/**get all questions */
export async function getQuestions(req,res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({error})
    }
}

/**insert all questions */
export async function insertQuestions(req,res){
   try {
    Questions.insertMany({ questions:[0], answers:[1] }, function(error,data){
        res.json({ msg : "data saved successfully..!"})
    })
   } catch (error) {
    res.json({error})
   }
}

/**delete all questions */
export async function dropQuestions(req,res){
    res.json("questions api delete request");
}

/**get all result */
export async function getResult(req,res){
    res.json("result api get request");
}   

/**insert all result */
export async function storeResult(req,res){
    res.json("result api post request");
}

/**delete all result */
export async function dropResult(req,res){
    res.json("result api delete request");
}
