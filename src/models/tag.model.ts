const mongoose = require('mongoose');

const { Schema } = mongoose;

const tagSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Tag', tagSchema);
