import dotenv from "dotenv";
dotenv.config();

import express from "express";
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";

const app = express();

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

// Default API
app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend project" });
});

// app.post("/login", (req, res) => {
//   res.json({ message: "Login Succesfull" });
// });
// app.post("/logout", (req, res) => {
//   res.json({ message: "Logout Succesfull" });
// });
// app.post("/register", (req, res) => {
//   res.json({ message: "Register Succesfull" });
// });
// app.put("/update", (req, res) => {
//   res.json({ message: "Update Succesfull" });
// });
// app.delete("/delete", (req, res) => {
//   res.json({ message: "Delete Succesfull" });
// });
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started on port : ", port);
});
