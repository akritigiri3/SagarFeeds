const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db"); 
const authRoutes = require("./routes/authRoutes"); 
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes); 
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running successfully"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

db.query("SELECT 1")
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Database connection failed:", err.message));