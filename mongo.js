const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const db = "mongodb://localhost:27017/blog"
mongoose.connect(db).then(()=>{
    console.log("connection establisshed");
})

const postSchema = mongoose.Schema(
    {
        title: String,
        body: String
    }
)

module.exports = mongoose.model("Post", postSchema)