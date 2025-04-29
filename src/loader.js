const server = require("./config/server")
require("./config/database")

const routes = require("./config/routes");
server.use("/api", routes); 


