const app = require("./index");
const http = require("http");
const connectDB = require("./config/db");
connectDB();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT,() => {
  console.log(`Server is live at ${PORT}`);
});