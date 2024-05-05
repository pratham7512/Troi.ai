const express=require("express");
const app=express();
const groqResponse=require("./test")
const {Chats} = require('./db');
const cors =require("cors");
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.static("public"));
app.use(cors('*'))

app.post('/api/v1/response', async (req, res) => {
    try {
        const body = req.body; // Ensure req.body is parsed properly based on your setup
        const response = await groqResponse(`${body.msg}`);
        console.log(response)
        res.status(200).send(response);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
})

app.post('/postchats', async (req, res) => {
    try {
      const { userId, chats } = req.body;
      const chatHistory = new Chats({
        userId,
        chats
      });
      await chatHistory.save();
      res.status(201).json({ message: 'Chats saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});

app.post('/chathistory', async (req, res) => {
    try {
        // Extract userId from the request body
        const userId = req.body.userId;
        const chatHistory = await Chats.findOne({ userId: userId });
        if (!chatHistory) {
            return res.status(404).json({ message: 'Chat history not found' });
        }
        res.json(chatHistory.messages[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.listen(3000);