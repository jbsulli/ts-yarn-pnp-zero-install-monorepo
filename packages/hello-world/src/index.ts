import express from "express";

console.log("Starting...");

const app = express();
const port = 7777;

app.get("/", (_, res) => {
  res.send("Hello world!");
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const shutdown = () => {
  console.log("Shutting down...");

  server.close(() => {
    console.log("Server closed");
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
