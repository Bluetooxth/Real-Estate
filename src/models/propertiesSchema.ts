import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})

const Properties = mongoose.models.Properties || mongoose.model("Properties", propertiesSchema)
export default Properties;