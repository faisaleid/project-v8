const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Auth");
const user = require("../models/Auth");

router.post("/signup", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "User created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});

router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "login failed",
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "login failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            },
            `${process.env.JWT_SECRET_KEY}`,
            {
              expiresIn: "1h",
            }
          );
          user.token = token;
          user.save().then((user) => {
            return res.status(200).json({
              message: "login successful",
              token: token,
            });
          });
        } else {
          res.status(401).json({
            message: "login failed",
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:userId", (req, res, next) => {
  User.findById({ _id: req.params.userId }, user)
    .exec()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "User deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/:logOut", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      user.token = "";
      user.save().then((user) => {
        return res.status(200).json({
          message: "logout successful",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.put("/:id", (req, res) => {
  console.log("Hi");
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user), res.send("User Updated successfully");
    }
  );
});

router.get("/", (req, res) => {
  User.find({}, (err, usr) => {
    if (err) {
      res.send(err);
    }
    res.json(usr);
  });
});

module.exports = router;
