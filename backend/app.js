const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// const userRoutes = require('./routes/userRoutes');
const app = express();


app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));
app.use(express.json({ limit: '100mb' }));
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// app.use('/user', userRoutes);

module.exports = app;