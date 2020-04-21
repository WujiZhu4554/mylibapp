const mongoose = require("mongoose");

// import author model
const Author = mongoose.model("author");

    
// function to handle a request to get all authors
const getAllAuthors = async (req, res) => {
    
  try {
    const all_authors = await Author.find();
    return res.send(all_authors);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};
    
  
  

// function to modify author by ID
const updateAuthor = async (req, res) => {
  res.send("Working on this feature");
};

// function to add author
const addAuthor = async (req, res) => {
  const had = await Author.findOne({"id":req.params.id});
  if(!had){
    const result = await Author.create({
      "id":req.params.id,
      "first_name":req.params.first_name,
      "last_name":req.params.last_name
    });
    return res.send(result);
  }else{
    return res.send("User already exist");
  }  
};

// function to get author by id
const getAuthorByID = async (req, res) => {
  try{
    const intended = await Author.findOne({"id":req.params.id});
    return res.send(intended);
  } catch(err){
    res.status(400);
    return res.send("F**k up here");
  }
};

// remember to export the functions
module.exports = {
  getAllAuthors,
  getAuthorByID,
  addAuthor,
  updateAuthor
};