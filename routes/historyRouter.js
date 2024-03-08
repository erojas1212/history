const express = require("express");
const History = require("../models/history.js");
const historyRouter = express.Router();

//Get all
historyRouter.get("/", (req, res, next) => {
  History.find((err, histories) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(histories);
  });
});

// Get One
historyRouter.get("/:historyId", (req, res, next) => {
  History.find({ _id: req.params.historyId }, (err, history) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(history);
  });
});

//Post
historyRouter.post("/", (req, res, next) => {
  const newHistory = new History(req.body);
  newHistory.save((err, savedHistory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedHistory);
  });
});

// Delete
historyRouter.delete("/:historyId", (req, res, next) => {
  History.findOneAndDelete(
    { _id: req.params.historyId },
    (err, deleteHistory) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(
          `Successfully deleted history ${deleteHistory.event} from the db`
        );
    }
  );
});

// Update
historyRouter.put("/:historyId", (req, res, next) => {
  History.findOneAndUpdate(
    { _id: req.params.historyId },
    req.body,
    { new: true },
    (err, updatedHistory) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedHistory);
    }
  );
});

module.exports = historyRouter;
