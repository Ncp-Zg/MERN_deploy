const express = require("express");
const dotenv= require("dotenv")
const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute");
const ordersRoute = require("./Routes/ordersRoute");
const paymentRoute = require("./Routes/paymentRoute");
const connectDB = require("./Config/db");
const cors = require("cors");
const customErrorHandler = require("./Middlewares/errorMiddleware");
const path =require("path");


const app = express();

app.use(cors({origin:"http://localhost:5000", credentials: true}));
app.use(express.json())
dotenv.config();
connectDB();
app.use("/api/users", userRoute );
app.use("/api/products", productRoute );
app.use("/api/orders", ordersRoute );
app.use("/api/payment", paymentRoute );

// --------------------------deployment------------------------------
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------


app.use(customErrorHandler);

const PORT = process.env.PORT
app.listen(PORT,console.log(`server is running on PORT ${PORT}`))

