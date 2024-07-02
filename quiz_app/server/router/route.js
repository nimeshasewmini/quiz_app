import {Router} from "express";
const router = Router();

/**import controllers */
import * as controllers from '../controllers/controller.js';


/**Questions Routes apis */

router.route('/questions')
    .get(controllers.getQuestions) /**GET Request */
    .post(controllers.insertQuestions) /**POST Request */
    .delete(controllers.dropQuestions) /**DELETE Request */

router.route('/result')
    .get(controllers.getResult) /**GET Result */
    .post(controllers.storeResult) /**POST Result */
    .delete(controllers.dropResult) /**DELETE Result */

export default router;
