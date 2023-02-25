"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
console.log("Starting...");
const app = (0, express_1.default)();
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
//# sourceMappingURL=index.js.map