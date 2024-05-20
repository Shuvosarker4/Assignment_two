import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  await mongoose.connect(process.env.DB_URL as string);

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
