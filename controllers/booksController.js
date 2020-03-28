const db = require("../models");

module.exports = {
  getSavedBooks: function(req, res) {
    db.Book.find({}).then(dbBookData => res.json(dbBookData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  saveBook: function(req, res) {
    db.Book.create(req.body).then(dbBookData => res.json(dbBookData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  removeBook: function(req, res) {
    db.Book.remove({
      _id: req.params.id
    }).then(dbBookData => res.json(dbBookData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  }
};
