express = require("express");
const userHistoryRouter = express.Router();
const UserH = require("../models/userHistory.js");

userHistoryRouter.get("/", (req, res, next) => {
  UserH.find((err, userHistory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(userHistory);
  });
});

userHistoryRouter.post("/", (req, res, next) => {
    const newUserH = new UserH(req.body)
    newUserH.save((err, savedUserH) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUserH)
    })
})

userHistoryRouter.delete("/:userHID", (req, res, next) => {
    UserH.findOneAndDelete({ _id: req.params.userHID }, (err, deleteItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res
            .status(200)
            .send(`Successfully deleted item ${deleteItem} from db`)
    })
})

userHistoryRouter.put("/:userHID", (req, res, next) => {
    UserH.findOneAndUpdate(
        { _id: req.params.userHID },
        req.body,
        { new: true },
        (err, updateUserH) => {
            if(err) {
                res.status(500);
                return next(err)
            }
            return res.status(201).send(updateUserH)
        }
    )
})

module.exports = userHistoryRouter;
