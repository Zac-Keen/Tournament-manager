// For CommonJS (require)
const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']); // Force Cloudflare and Google DNS

// For ES Modules (import)
// import { setServers } from 'node:dns';
// setServers(['1.1.1.1', '8.8.8.8']);


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Tournament API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});