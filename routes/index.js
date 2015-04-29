
/*
 * GET home page.
 */


var titles = {
    1: 'Clockwork',
    2: 'Oranges'
};


function timeCheck(day){
    day = parseInt(day);
    var allowedDate = new Date(2015,04, day);
    var today = new Date();
    if(today >= allowedDate){
        return true;
    }

    return false;
}

exports.index = function(req, res){
    res.render('index', { title: 'Reunions "Advent" Calendar' });
};

exports.day = function(req, res){
    var day = req.params.day;
    console.log('day type:', typeof day);
    if(!isNaN(day) && day <= 28){
        if(timeCheck(day)){
            res.render(day, { title: titles[day] });
        } else {
            res.render('tooSoon', {title: 'For shame!'});
        }
    }
    else {
        res.redirect('/');
    }
};