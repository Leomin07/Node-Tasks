"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_controller_1 = require("../controllers/tasks.controller");
const tasks_controller_2 = require("../controllers/tasks.controller");
const router = (0, express_1.Router)();
router.route('/tasks').post(tasks_controller_2.addTask).get(tasks_controller_2.getAllTask);
router
    .route('/tasks/:id')
    .get(tasks_controller_2.getTaskById)
    .delete(tasks_controller_1.deleteTaskById)
    .put(tasks_controller_1.updateTaskById);
exports.default = router;
