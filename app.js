const app = require("./index");
const http = require("http");
const connectDB = require("./config/db");
connectDB();
const server = http.createServer(app);
server.listen(process.env.PORT,() => {
  console.log(`Server is live at ${process.env.PORT}`);
});