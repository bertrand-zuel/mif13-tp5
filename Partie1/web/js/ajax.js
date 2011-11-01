$(document).ready(function(){
    envoiHeure();
})

var horloge = new Horloge();

function Horloge()
{
    var heures= "";
    var minutes= "";
    var secondes= "";
}

function majHorloge(h, m, s)
{
    if (horloge.heures != h){
        horloge.heures = h;
        $('#heure').empty();
        $('#heure').append(horloge.heures);
    }
        
    if(horloge.minutes != m){
        horloge.minutes = m;
        $('#minute').empty();
        $('#minute').append(horloge.minutes);
    }
    if(horloge.seconde != s){
        horloge.secondes = s;
        $('#seconde').empty();
        $('#seconde').append(horloge.secondes);
    }
}

function envoiHeure()
{
    $.ajax({
        url: "jsp/heure.jsp",
        dataType: "xml",
        success: function(xml){
            
            var heure= $(xml).find('heure').text();
            var minute= $(xml).find('minute').text();
            var seconde= $(xml).find('seconde').text();
            
            majHorloge(heure,minute,seconde);
            
        }
    });
    setTimeout(function(){envoiHeure();},1000);
}
function ajouterHeure()
{
    $("#heure").empty();
    $("#heure").append(heure);
} 