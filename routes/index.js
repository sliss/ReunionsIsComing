
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Reunions "Advent" Calendar' });
};

exports.day = function(req, res){
    console.log('params:', req.params);
    res.render('index', { title: 'Reunions "Advent" Calendar' });
};