const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

class userController {
  async reg(req, res, next) {
    try {
      const { username, password } = req.body;
      const ifUserIsExsists = await User.findOne({
        where: {
          username,
        },
      });

      if (ifUserIsExsists) {
        return next(
          res.json({
            error: `User with "${username}" is exists, please login`,
          })
        );
      } else if (!username || !password) {
        return next(
          res.json({
            error: "Username or password can not be empty",
          })
        );
      }
      const hash = await bcrypt.hash(password, 10);
      const createdUser = await User.create({
        username,
        password: hash,
      });
      
      return res.status(200).json(createdUser);
    } catch (error) {
      return res.json("Probably name or password field is lost");
    }
  }

  async login(req, res, next) {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return next(
        res.json({
          fail: "User does not exists",
        })
      );
    } else {
      bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
          return next(
            res.json({
              error: "Incorrect Username or password",
            })
          );
        }
        const accessToken = sign(
          { username: user.username, id: user.id},
          process.env.SECRET_KEY, {expiresIn:'1d'}
        );
        res.json(accessToken);
      });
    }
  }
  async check(req, res, next) {
    res.json(req.user)
  }
}

module.exports = new userController();
