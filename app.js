require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const customMiddleware = require("./middleware/custom-test");

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1> API </h1><a href="/api/v1/products">Products route</a>');
});

//products routes
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ...${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
