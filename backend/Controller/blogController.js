const blogController = require("express").Router();
const Blog = require("../Models/BlogModel");
const verifyToken = require("../middleware/verifyToken");

blogController.get("/getAll", async (req, res) => {
  try {
    //to get all details of user instead of deriving user again from id
    const blogs = await Blog.find().populate("userId", "-password");
    return res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

blogController.get("/find/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "userId",
      "-password"
    );
    blog.views += 1;
    await blog.save();
    return res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

blogController.get("/featured", async (req, res) => {
  try {
    const blogs = await Blog.find({ featured: true })
      .populate("userId", "-password")
      .limit(3);
    return res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

blogController.post("/", verifyToken, async (req, res) => {
  try {
    //req.user.id is set by the middleware
    const blog = await Blog.create({ ...req.body, userId: req.user.id });
    return res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

blogController.put("/update/:id", verifyToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.param.id);
    if (blog.userId !== req.user.id) {
      throw new Error("You can only update....");
    }
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).populate("userId", "-password");

    return res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

blogController.put("/likeBlog/:id", verifyToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.likes.includes(req.user.id)) {
      //Already liked the blog so remove
      blog.likes = blog.likes.filter((userId) => userId !== req.user.id);
      await blog.save();

      return res.status(200).json({
        msg: "Blog disliked successfullly!",
      });
    } else {
      blog.likes.push(req.user.id);
      await blog.save();
      return res.status(200).json({ msg: "Blog liked successfullly!" });
    }
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

blogController.delete("/deleteBlog/:id", verifyToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.userId !== req.user.id) {
      throw new Error("you can delete only your blog");
    }
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Post deleted successfully " });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = blogController;
