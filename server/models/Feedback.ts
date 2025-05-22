import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profileUrl: { type: String, required: true },
  location: { type: String, required: true },
  feedback: { type: String, required: true }
});

export default mongoose.model('Feedback', feedbackSchema);
