const mongoose = require("mongoose")
const antSchema = mongoose.Schema({
    count: Number,
    type: String,
    size: Number
})
module.exports = mongoose.model("Ant",
    antSchema)