const demoHandler = async (req, res) => {
  try {
    res.send("hey, this a demo route");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  demoHandler,
};
