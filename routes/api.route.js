const Router = require('router')
const router = Router();
const { home,createNote,updateNote,deleteNote,search } = require('../controller/notepad.controller');

router.get('/', (req,res) => home(req,res));
router.post('/notes', (req,res) => createNote(req,res));
router.put('/notes/:id', (req,res) => updateNote(req,res));
router.delete('/notes/:id', (req,res) => deleteNote(req,res));
router.get('/search', (req,res) => search(req,res));

module.exports = router;