const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

// POST: save a chat
router.post("/", async (req, res) => {
  const { userMessage, botReply } = req.body;

  if (!userMessage || !botReply) {
    return res.status(400).json({ error: "Both fields are required" });
  }

  try {
    const chat = new Chat({ userMessage, botReply });
    await chat.save();
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: retrieve all chats
router.get("/", async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: -1 });
    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
