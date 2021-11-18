const custom = (req, res) => {
  res.status(404).send("Hi Pulkit I am your custom middleware");
};
module.exports = custom;
