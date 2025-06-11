const BandMember = require('../models/bandmember');

async function updateBandMembers(req, res) {
  try {
    const bandMembers = req.body;

    if (!Array.isArray(bandMembers) || bandMembers.length === 0) {
      return res.status(400).json({ message: 'Invalid or empty band members array' });
    }
    
    console.log('Band members updating..');
    // Optional: Clear existing data
    await BandMember.deleteMany();

    // Insert new data
    const response = await BandMember.insertMany(bandMembers);

    console.log('Band members updated successfully:', response);
    res.status(200).json({
      message: 'Band members updated successfully',
      insertedCount: response.length
    });
  } catch (error) {
    console.error('Error in updateBandMembers:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function getBandMembers(req, res) {
 try {
    const bandMembers = await BandMember.find();
    if (!bandMembers || bandMembers.length === 0) {
      return res.status(404).json({ message: 'No band members found' });
    }
    res.status(200).json({
        message: 'Band members retrieved successfully',
        bandMembers: bandMembers
    });
 } catch (error) {
    console.error('Error in getBandMembers:', error);
    res.status(500).send('Internal Server Error');
 }
}

module.exports = {
  updateBandMembers,
  getBandMembers
};
