const {Router} = require('express');
const {submitForm} = require('../controllers/bookingform');
const router = Router();

router.post('/submitform', submitForm);

module.exports = router;