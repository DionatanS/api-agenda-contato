"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contatos_1 = __importDefault(require("./routers/contatos"));
const database_1 = __importDefault(require("./database"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 5000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    (0, database_1.default)();
    (0, contatos_1.default)(app);
});
