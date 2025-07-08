import mongoose from "mongoose";

const TeamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  logo: String,
  country: String,
  league: String,
  stadium: String,
  votes: {
    type: Number,
    default: 0,
  },
  players: [String],
});

const Team = mongoose.model("Team", TeamSchema);

export default Team;
