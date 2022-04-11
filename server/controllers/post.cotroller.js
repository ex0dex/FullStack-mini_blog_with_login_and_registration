const Post = require("../models/post.model");

class PostController {
  async create(req, res, next) {
    const { title, description } = req.body;

    const ifPostIsExists = await Post.findOne({
      where: {
        title,
      },
    });

    if (ifPostIsExists) {
      return next(res.json({
        error: `Post with "${title} already exists`
      }));
    } else if (title.length < 3 || description.length < 10) {
      return next(
        res.json({
          error:"title can not be less 3 symbols and description can not be less 10 symbols"
        })
      );
    } 

    const createPost = await Post.create({
      title,
      description,
    });
    res.json(createPost);
  }

  async getAll(req, res, next) {
    const getPosts = await Post.findAll();
    if (!getPosts.length) {
      return next("There are no posts");
    }
    res.json(getPosts);
  }
}

module.exports = new PostController();
