 var urls = [
        "http://www.kittenwar.com/",
        'http://heeeeeeeey.com/',
        'http://eelslap.com/',
        'http://www.staggeringbeauty.com/',
        'http://www.omfgdogs.com/',
        'http://burymewithmymoney.com/',
        'http://www.fallingfalling.com/',
        'http://ducksarethebest.com/',
        'http://www.republiquedesmangues.fr/',
        'http://www.trypap.com/',
        'http://www.hristu.net/',
        'http://www.partridgegetslucky.com/',
        'http://www.rrrgggbbb.com/',
        'http://www.sanger.dk/',
        'http://www.geodu.de/',
        'http://beesbeesbees.com/',
        'http://breakglasstosoundalarm.com/',
        'http://www.koalastothemax.com/',
        'http://grandpanoclothes.com/',
        'http://www.everydayim.com/',
        'http://www.haneke.net/',
        'http://instantostrich.com/',
        'http://r33b.net/',
        'http://cat-bounce.com/'
    ];

    function goSomewhere() {
        var url = urls[Math.floor(Math.random()*urls.length)];
        window.location = url; // redirect
    }