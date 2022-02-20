"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
const routes_1 = __importDefault(require("./routes/routes"));
const connect_1 = __importDefault(require("./db/connect"));
const body_parser_1 = __importDefault(require("body-parser"));
(0, connect_1.default)();
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('tiny'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(routes_1.default);
app.listen(port, () => {
    console.log(colors_1.default.blue(`App listening on port ${port}`));
});
