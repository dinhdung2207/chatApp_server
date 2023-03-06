import express from "express";
import router from "./src/routes/index.js";
import { connectDB } from "./src/data/connect.js";
import { MONGODB_URL, PORT } from "./src/constants/variable.js";

const app = express();

app.use("/api", router);

connectDB(MONGODB_URL)
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`🛵 App running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ Connect to Mongodb Error", { err });
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
