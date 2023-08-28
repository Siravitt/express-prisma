const { express } = require('../app')
const router = express.Router();

const { addUser } = require('../controllers/user-controller')

router.get('/all-user', addUser)

module.exports = router;