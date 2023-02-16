const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const todoSchema = require('../models/todos');

router.get("/", (req, res, next) => {
  todoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.post("/", (req, res, next) => {
  todoSchema.create(req.body, (error, data) => {
    if(error) {
      return next(error);
    }

    res.json(data)
  })
})

router.put('/update-todo/:id', (req, res, next) => {
  todoSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (error, data) => {
    if(error) {
      return next(error)
    }

    res.json(data);
    console.log(data);
  })
})

router.delete('/delete-todo/:id', (req, res, next) => {
  todoSchema.findByIdAndDelete(req.params.id, (error, data) => {
    if(error) {
      return next(error)
    }

    res.status(200).json({
      msg: data,
    });
  })
})


module.exports = router;
