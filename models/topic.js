import mongoose , {Schema} from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        desc : String,
        notepath : String,
    }
)

const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchema);

export default Topic;