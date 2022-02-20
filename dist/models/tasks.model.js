"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});
const taskModel = (0, mongoose_1.model)('task', taskSchema);
exports.default = taskModel;
