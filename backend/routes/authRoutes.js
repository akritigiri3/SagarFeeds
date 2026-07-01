const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../config/db");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { fullName, email, phone, role, password } = req.body;

    // 1. Basic validation
    if (!fullName || !email || !role || !password) {
      return res.status(400).json({ message: "Please fill in all required fields." });
    }

    // 2. Check if email already exists
    const [existing] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
    if (existing.length > 0) {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    // 3. Hash the password before saving
    const passwordHash = await bcrypt.hash(password, 10);

    // 4. Insert the new user
    await db.query(
      "INSERT INTO users (full_name, email, phone, role, password_hash) VALUES (?, ?, ?, ?, ?)",
      [fullName, email, phone, role, passwordHash]
    );

    res.status(201).json({ message: "Account created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please enter email and password." });
    }

    // 1. Find the user by email
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (users.length === 0) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const user = users[0];

    // 2. Compare the entered password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // 3. Success — send back basic user info (never the password hash!)
    res.status(200).json({
      message: "Login successful!",
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
});

module.exports = router;