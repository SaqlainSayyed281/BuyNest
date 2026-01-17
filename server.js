require("dotenv").config()
const express = require("express")
const connectMongo = require("./config/mongo")

const app = express()
app.use(express.json())

const APIRoutes = require("./routes/api.routes")

app.use("/" , APIRoutes)

const PORT = process.env.PORT || 4000

const startServer = async () => {
  try {
    await connectMongo();              // 🔥 mongo first
  

    app.listen(PORT, () => {
      console.log(`🚀 Node Js express Mongo Setup sever running  ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server startup failed:", err.message);
    process.exit(1);
  }
};

startServer();