const {Router} = require('express');
const {submitForm} = require('../controllers/bookingform');
const router = Router();

router.post('/api/submitform', submitForm);

module.exports = router;