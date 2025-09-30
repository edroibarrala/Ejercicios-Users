const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to the User API"});
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

