const { Users } = require("../models");
const crypto = require("crypto");
require("dotenv").config();

const rooms = new Map();

module.exports = {
  index: (req, res) => {
    res.send("Selamat datang di game");
  },
  create: async (req, res) => {
    const user = req.body;
    try {
      const user = await Users.authenticate(req.body);
      const roomId = crypto.randomBytes(4).toString("hex");
      const room = {
        id: roomId,
        players: [user.username],
      };
      rooms.set(roomId, room);
      res.json({ room });
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
  join: async (req, res) => {
    const { roomId } = req.body;
    try {
      const user = await Users.authenticate(req.body);
      const room = rooms.get(roomId);
      if (!room) {
        return res.status(400).send("Room not found.");
      }
      if (room.id !== roomId) {
        return res.status(400).send("Invalid invitation code.");
      }
      if (room.players.length >= 2) {
        return res.status(400).send("Room is full.");
      }
      room.players.push(user.username);
      rooms.set(roomId, room);
      res.json({ room });
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
};
