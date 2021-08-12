const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    tags: [
      {
        type: mongoose.Types.ObjectId,
        require: false,
        ref: 'Post',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', postSchema);
