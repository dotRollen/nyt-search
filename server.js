require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const server = require('http').createServer(app);
const io = require ('socket.io')(server);

const allRoutes = require('./routes');
const { CLIENT_ORIGIN } = require('./config/client.config');

app.use(cors({
    origin: CLIENT_ORIGIN
}));

app.set('io', io);

app.use(express.static('client/build'));

app.use('/', allRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactSearch');

server.listen(process.env.PORT || 8080, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${process.env.PORT || 8080}!`);
});
