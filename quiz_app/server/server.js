import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';


/**import connection file */
import connect from './database/conn.js';

const app = express()

/**app middlwares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/**application port */
const port = process.env.PORT || 8080;

connect();

/**route */
app.use('/api', router) /**apis */

app.get('/', (req,res) => {
    try{
        res.json("Get Request")
    }catch (error) {
        res.json(error)
    }
})

/**start server only when we have valid connection */
connect().then(() => {
    try {                    
            app.listen(port,()=>{
                console.log(`server connected to http://localhost:${port}`)
            })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error=> {
    console.log("Invalid Database Connecton");
})
