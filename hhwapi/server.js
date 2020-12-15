import express from 'express';
import cors from 'cors';
import knex from 'knex';
import {drumsList, addDrum} from './controllers/drums.js';


// const db = knex({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user : 'postgres',
//         password : 'root',
//         database: 'smart-brain'
//     }
// });

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{res.send('success')});
app.get('/drums', (req, res)=>{drumsList(req, res)});
app.post('/createdrum', (req, res)=>{addDrum(req,res)});
//app.put('/image', (req, res)=> {handleImage(req, res, db)});
//app.post('/imageurl', (req, res)=> {handleApiCall(req, res)});

app.listen(3000, ()=>{
    console.log('app is running');
});