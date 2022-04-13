const Post = require("../models/post.model");
const multer = require("multer");
const path = require('path')

//define file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

//upload file middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|mp4/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

//REST api

const create = async (req, res, next) => {
  try {  
  let info = {
      image: req.file.path,
      title: req.body.title,
      description: req.body.description,
    };

    const ifPostIsExists = await Post.findOne({
      where: {
        title:req.body.title
      }
    })

    if(ifPostIsExists){
      return res.json('Post exists')
    }

    const post = await Post.create(info);
    res.status(200).send(post);
    console.log(post);
  } catch (error) {
    console.log(error)
  } 
};

const getAll = async (req, res, next) =>{
  const getPosts = await Post.findAll();
      if (!getPosts.length) {
        return next("There are no posts");
      }
      res.json(getPosts);
}

const getOne = async (req, res, next) => {

}

const update = async (req, res, next) => {

}
const deletePost = async (req, res, next) => {

}
module.exports = { upload, create, getAll };

// class PostController {
//   async create(req, res, next) {
//     const { title, description } = req.body;

//     const ifPostIsExists = await Post.findOne({
//       where: {
//         title,
//       },
//     });

//     if (ifPostIsExists) {
//       return next(res.json({
//         error: `Post with "${title} already exists`
//       }));
//     } else if (title.length < 3 || description.length < 10) {
//       return next(
//         res.json({
//           error:"title can not be less 3 symbols and description can not be less 10 symbols"
//         })
//       );
//     }

//     const createPost = await Post.create({
//       title,
//       description,
//     });
//     res.json(createPost);
//   }

//   async getAll(req, res, next) {
//     const getPosts = await Post.findAll();
//     if (!getPosts.length) {
//       return next("There are no posts");
//     }
//     res.json(getPosts);
//   }
// }

// module.exports = new PostController();
