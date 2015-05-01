$(document).ready(function() {
    console.log('merry reunions');
    var reunionsDate = new Date(2015, 04, 28, 12);
    var presentDate = new Date();

    var ONE_DAY = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    var daysRemaining = Math.floor(Math.abs((presentDate.getTime() - reunionsDate.getTime()) / (ONE_DAY)));
    var hoursRemaining = Math.ceil(24 - Math.abs((presentDate.getHours() - reunionsDate.getHours())));
    // display countdown
    $('#countdown').html('Only ' + daysRemaining + ' days, ' + hoursRemaining + ' hours \'til Reunions!');

    function backgroundGradient() {
        var topGradients = [
            '#FFE4AC', '#FFE2A7', '#FFE1A3', '#FFDF9E', '#FFDE9A', '#FFDC95', '#FFDB91', '#FFD98C', '#FFD888', '#FFD683', '#FFD57F', '#FFD37A', '#FFD276', '#FFD071', '#FFCF6D', '#FFCE68', '#FFCC64', '#FFCB5F', '#FFC95B', '#FFC856', '#FFC652', '#FFC54D', '#FFC349', '#FFC244', '#FFC040', '#FFBF3B', '#FFBD37', '#FFBC32', '#FFBB2E'
        ];

        var botGradients = [
            '#4B4B4B', '#494949', '#484848', '#474747', '#464646', '#454545', '#444444', '#434343', '#424242', '#414141', '#404040', '#3F3F3F', '#3E3E3E', '#3D3D3D', '#3C3C3C', '#3B3B3B', '#3A3A3A', '#393939', '#383838', '#373737', '#363636', '#353535', '#343434', '#333333', '#323232', '#313131', '#303030', '#2F2F2F', '#2E2E2E'
        ];

        var gradIndex = topGradients.length - daysRemaining;
        if (gradIndex > topGradients.length - 1)
            gradIndex = topGradients.length - 1;

        function getCssValuePrefix() {
            var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
            var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
            var isChrome = !!window.chrome && !isOpera; // Chrome 1+
            var isIE = /*@cc_on!@*/ false || !!document.documentMode; // At least IE6
            var rtrnVal = ''; //default to standard syntax

            if (isOpera) rtrnVal = '-o-';
            if (isFirefox) rtrnVal = '-moz-';
            if (isSafari || isChrome) rtrnVal = '-webkit-';
            return rtrnVal;
        }

        // Setting the gradient with the proper prefix
        document.body.style.backgroundImage = getCssValuePrefix() + 'linear-gradient(' + topGradients[gradIndex] + ',#FFFFFF,' + botGradients[gradIndex] + ')';
    }

    backgroundGradient();
});