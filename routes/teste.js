module.exports = function(express){
	var router = express.Router();

	router.get('/', function(req, res){
		res.render('teste/');
	})

	return router;
}