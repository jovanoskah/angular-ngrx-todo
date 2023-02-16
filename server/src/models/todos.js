const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  text: {
    type: String
  },
  isCompleted: {
    type: Boolean
  }
}, {
  collection: 'todos',
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})


todoSchema.virtual('id', {
  id: this.id
});

module.exports = mongoose.model("Todo", todoSchema);

