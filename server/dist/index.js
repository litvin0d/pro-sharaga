"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const HTTP_STATUSES = {
    OK_200: 200,
    NON_AUTHORITATIVE_INFORMATION_203: 203,
    INTERNAL_SERVER_ERROR_500: 500,
    BAD_GATEWAY_502: 502,
};
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(HTTP_STATUSES.OK_200).send("ProSharaga");
});
const server = app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}! Pid: ${process.pid}`);
});
server.on("error", e => console.log(e));
