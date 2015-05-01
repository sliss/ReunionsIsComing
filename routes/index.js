
/*
 * GET home page.
 */


var titles = {
    1: 'Are you ready?',
    2: 'Powerful fans',
    3: 'Reunions Advent Calendar',
    4: 'Reunions Advent Calendar',
    5: 'Reunions Advent Calendar',
    6: 'Reunions Advent Calendar',
    7: 'Reunions Advent Calendar',
    8: 'Reunions Advent Calendar',
    9: 'Reunions Advent Calendar',
    10: 'Reunions Advent Calendar',
    11: 'Reunions Advent Calendar',
    12: 'Reunions Advent Calendar',
    13: 'Reunions Advent Calendar',
    14: 'Reunions Advent Calendar',
    15: 'Reunions Advent Calendar',
    16: 'Reunions Advent Calendar',
    17: 'Reunions Advent Calendar',
    18: 'Reunions Advent Calendar',
    19: 'Reunions Advent Calendar',
    20: 'Reunions Advent Calendar',
    21: 'Reunions Advent Calendar',
    22: 'Reunions Advent Calendar',
    23: 'Reunions Advent Calendar',
    24: 'Reunions Advent Calendar',
    25: 'Reunions Advent Calendar',
    26: 'Reunions Advent Calendar',
    27: 'Reunions Advent Calendar',
    28: 'Reunions Advent Calendar'
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

exports.test = function(req, res){
    res.render('test', { title: 'Test' });
};