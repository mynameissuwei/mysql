const handleUserRouter = (req, res) => {
  const method = req.method; // GET POST

  // Get blog list
  if (method === "POST" && req.path === "/api/blog/login") {
    return {
      msg: "This is a blog list interface",
    };
  }
};


module.exports = handleUserRouter;