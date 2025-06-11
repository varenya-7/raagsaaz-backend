const mongoose = require('mongoose');

const SocialSchema = new mongoose.Schema({
  platform: String,
  url: String,
});

const BandMemberSchema = new mongoose.Schema({
  name: String,
  instrument: String,
  image: String,
  bio: String,
  socials: [SocialSchema],
} ,{ collection: "bandmembers"  , timestamps: true });

const BandMember = mongoose.model('BandMember', BandMemberSchema);

module.exports = BandMember;
