require('dotenv').config();

export const express = require('express');
const app = express();

const userRoute = require('./routes/user-route');

app.use(express.json());

app.use('/user', userRoute)

const PORT:string = process.env.PORT || '8000';
app.listen(PORT, () => console.log('SERVER RUN ON PORT ' + PORT));

