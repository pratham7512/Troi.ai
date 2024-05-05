const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://prathameshdesai679:rajendra1969@cluster0.zq2d8gi.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0");

const ChatSchema = new mongoose.Schema({
    bot: String,
    human: String
   });

const chatHistorySchema = new mongoose.Schema({
 userId: {
    type: String,
    required: true
 },
 timestamp: {
    type: Date,
    default: Date.now
 },
 messages: [{
    type: [ChatSchema],
    required: true
 }]
});

const Chats = mongoose.model('Chats', chatHistorySchema);

module.exports = { Chats };
