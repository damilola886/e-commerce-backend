import express from "express";
import db from "./dummydatabase/db";

const app = express();
// get all users
app.get("/https://jsonplaceholder.typicode.com/api/users", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Users have been retrieved successfully",
    users: db,
  });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
