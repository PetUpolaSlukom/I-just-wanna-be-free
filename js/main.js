$(document).ready(function() {

    
    $('.tour-date table tr td:odd').addClass('text-right');
    $('.tour-date table tr td:even').addClass('text-left');


    var tourDate = [['28  dec','Paris', 'France'],
                    ['14  jan','Novi Sad', 'Serbia'],
                    ['6  feb','Ibiza', 'Spain'],
                    ['31  mar','Boom', 'Belgium'],
                    ['14  apr','Belegrade', 'Serbia'],
                    ['6  may','Miami', 'Florida'],
                    ['28  jun','Dubrovnik', 'Croatia'],
                    ['17  jul','Tokyo', 'Japan']]

    var table = document.getElementById("table");

    for(var i = 1; i < table.rows.length; i++)
        {
            for(var j = 0; j < table.rows[i].cells.length; j++)
            {
                if (j==3) {
                    table.rows[i].cells[j].innerHTML = '<a href="#" class="b-dark" >by</a>';
                }
                else
                    table.rows[i].cells[j].innerHTML = tourDate[i - 1][j];
            }
        }

})