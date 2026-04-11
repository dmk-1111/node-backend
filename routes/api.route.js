const Router = require('router')
const router = Router();
const { home,createNote } = require('../controller/notepad.controller');

router.get('/', (req,res) => home(req,res));
router.post('/notes', (req,res) => createNote(req,res));

module.exports = router;