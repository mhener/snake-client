const { on } = require("events");
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT,
  },);

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // returns
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  
  });

  conn.on("connect", () => {
    conn.write("Name: MAR");
  });

  return conn;
};

module.exports = connect;
