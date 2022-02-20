"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskById = exports.deleteTaskById = exports.getTaskById = exports.getAllTask = exports.addTask = void 0;
const tasks_model_1 = __importDefault(require("../models/tasks.model"));
const addTask = (req, res) => {
    const task = new tasks_model_1.default(req.body);
    task
        .save()
        .then(() => {
        res.status(201).send({ message: 'Success', Data: task });
    })
        .catch(err => {
        res.send(err);
    });
};
exports.addTask = addTask;
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTask = yield tasks_model_1.default.find({});
        res.status(200).send({ message: 'Success', Data: allTask });
    }
    catch (error) {
        res.send(error);
    }
});
exports.getAllTask = getAllTask;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = yield tasks_model_1.default.find({ _id: req.params.id });
        res.send({ message: 'Success', Data: _id });
    }
    catch (error) {
        res.send(error);
    }
});
exports.getTaskById = getTaskById;
const deleteTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield tasks_model_1.default.findOneAndDelete({ _id: req.params.id });
        res.send({ message: 'Success' });
    }
    catch (error) {
        res.send(error);
    }
});
exports.deleteTaskById = deleteTaskById;
const updateTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield tasks_model_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.send({ message: 'Success', Data: task });
    }
    catch (error) {
        res.send(error);
    }
});
exports.updateTaskById = updateTaskById;
