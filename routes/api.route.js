const Router = require('router')
const { home,createUserTable,createUser,updateUser,deleteUser,searchUser } = require("../controller/user.controller");
const router = Router();

router.get("/", (req,res) => home(req,res));
router.get("/tb-users", (req,res) => createUserTable(req,res));
router.post("/users", ( req, res) => createUser(req,res));
router.put("/update/:id", (req,res) => updateUser(req,res)); //:id as path variable to specify which user to update
router.delete("/delete", (req,res) => deleteUser(req,res));
router.get("/search", (req,res) => searchUser(req,res));

module.exports = router;