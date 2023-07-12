import { Schema, model, models } from "mongoose";

const navSchema = new Schema({
    nav_titleOne: String,
    nav_titleTwo: String,
    nav_links: [
        {
            links_title: String,
            links_link: String
        }
    ]
})

const navModel = models.NavDetail || model("NavDetail", navSchema)
export default navModel