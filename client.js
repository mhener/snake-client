// establishes a connection with the game server
const { on } = require("events");
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
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
