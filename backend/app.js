const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));
app.use(express.json({ limit: '100mb' }));
app.use('/auth', authRoutes);
// app.use('/user', userRoutes);

module.exports = app;