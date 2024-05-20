import mongoose from "mongoose";
import app from "./app";

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
