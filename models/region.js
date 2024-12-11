const mongoose=require("mongoose")
const region_name_schema = new mongoose.Schema({
    region_name: {
        type: String,
        required: [true, "region_name is required"],
        trim: true,
    },
   
});

module.exports = mongoose.model("region", region_name_schema);