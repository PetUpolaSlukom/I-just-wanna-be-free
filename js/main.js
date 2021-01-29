$(document).ready(function() {

    drustvreneMreze();
    meniFuter();
    meniNav();

    let stranica = window.location.pathname;
	
	if(stranica == '/' || stranica == '/index.html') {
		ispisDizajnera();
	}

	if(stranica.indexOf('projekti') != -1) {
        ispisProjekata();
    }
    
    if(stranica.indexOf('katalog') != -1) {
        ispisProizvida();
    }
    
    if(stranica.indexOf('blog') != -1) {
        ispisSlajdera();
        ispisNovosti();
	}

	

    //********************************************* */


//KOD ZA RESPONSIVE MENI
$(".navbar-toggler").click(function(){
    $("#responsive-meni")
        .css({
            "left" : "0",
            "top" : `${$(".navbar").height()}px`
        })
        .toggle(500);
});


//#region Zajednicko
function drustvreneMreze() {
    let nizMreza = ["facebook", "twitter", "linkedin", "instagram", "pinterest", "youtube" ];

    let mreze = document.querySelector("#drustveneMreze");

    for (let i = 0; i < nizMreza.length; i++) {
        mreze.innerHTML += `
        <li class="p-0 d-inline col-4 col-sm-2 col-md-6 col-lg-2 text-center mt-4">
            <a href="https://${nizMreza[i]}.com" target="_blanc">
                <i class="text-secondary text-center m-2 fab fa-${nizMreza[i]}"></i>
            </a>
        </li>
        `;
    }
}
function meniFuter() {
    let meniNiz = [
        ["index.html", "Početna"],
        ["katalog.html", "Katalog"],
        ["projekti.html", "Projekti"],
        ["blog.html", "Blog"]
    ]

    let meniFuter = document.querySelector("#meniFuter");

    for (let i = 0; i < meniNiz.length; i++) {
        meniFuter.innerHTML += `<li><a href="${meniNiz[i][0]}" class="text-info">${meniNiz[i][1]}</a></li>`;
    }
}
function meniNav() {
    let meniNiz = [
        ["index.html", "Početna"],
        ["katalog.html", "Katalog"],
        ["projekti.html", "Projekti"],
        ["blog.html", "Blog"]
    ]

    let meniNavR = document.querySelector("#responsive-meni-ul");

    meniNavR.innerHTML = '';
    for (let i = 0; i < meniNiz.length; i++) {
        meniNavR.innerHTML += `<li class="text-center"><a href="${meniNiz[i][0]}" class="text-secondary nav-link">${meniNiz[i][1]}</a></li>
        `;
    }

    let meniNav = document.querySelector("#navbarMenu-ul");

    meniNav.innerHTML = '';
    for (let i = 0; i < meniNiz.length; i++) {
        meniNav.innerHTML += `<li class="nav-item"><a href="${meniNiz[i][0]}" class="nav-link text-secondary">${meniNiz[i][1]}</a></li>
        `;
    } 

}



//#region Blog

function ispisNovosti() {
    
    let nizNovosti = [
        ["VEST", "Tim", "Gavaltron - Bolje mesto", "Nastavljamo naše napore na realizaciji održivog, pravičnog i etičkog lanca snabdevanja koji je bolji za ljude i planetu."],
        ["DIZAJN", "Parametricki", "Parametričko oblikovanje i izrada", "Kako parametrični dizajnerski procesi omogućavaju da ponudimo prilagođene proizvode do poslednjeg milimetra."],
        ["IZRADA", "Proizvodjac", "Upoznaj proizvođača - kreator iz Londona", "Stvaranje zajednice proizvođača - i puno Gavaltron nameštaja - u Leitonu u Istočnom Londonu."],
        ["EDUKACIJA", "Copyright2", "Digitalne zajednice i Copyright deo 2.", "Kako možemo ukloniti probleme autorskih prava i prihvatiti obilje digitalnog rada."],
        ["EDUKACIJA", "Copyright1", "Digitalne zajednice i Copyright deo 1.", "Digitalno doba direktno utiče na razvoj i način funkcionisanja kreativne industrije kao i kulture."],
        ["KOLABORACIJA", "Tehnologije", "Proširena realnost zadovoljava proizvodnju", "AR upoznaje lokalnu, distributivnu proizvodnju nameštaja sa Gavaltronom, VRTKS laboratorijom i Apple iOS 12"]
    ];

    let novosti = document.querySelector("#novosti");

    for (let i = 0; i < nizNovosti.length; i++) {
        
        novosti.innerHTML += `
        <div class="card brd-none text-center col-md-6 col-xl-4 mb-3">
            <img class="card-img-top pt-3" src="img/vest${nizNovosti[i][1]}.jpg" alt="${nizNovosti[i][2]}">
            <div class="card-body border">
                <p class="text-info">${nizNovosti[i][0]}</p>
                <h3 class="card-title">${nizNovosti[i][2]}</h3>
                <p id="p-vest" class="card-text text-dark mb-5">${nizNovosti[i][3]}</p>
            </div>
        </div>
        `;
    }


}
function ispisSlajdera() {

    let nizSlajder = [
        ["vestSlajder0", "Koriscenje novih tehnologija"],
        ["vestSlajder1", "Digitalne zajednice i Copyright"],
        ["vestSlajder2", "Upoznaj dizajnera - Nikola iz Barselone"]
    ]

    let slajdovi = document.querySelector("#slajder");

    for (let i = 0; i < nizSlajder.length; i++) {
        slajdovi.innerHTML += `
        <div class="mySlides fade">
            <img class="img-fluid" src="img/${nizSlajder[i][0]}.png" alt="${nizSlajder[i][1]}"/>
            <div class="text">${nizSlajder[i][1]}</div>
        </div>
        `;
    }
    
    
}
var index = 0;
showSlides(); 

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    index++;
    if (index > slides.length) {index = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
    setTimeout(showSlides, 3000); 
}


//#region Pocetna

function ispisDizajnera() {
    let nizDizajnera = [
        ["Nikola Arsić", "Industrijski dizajner, mašinski inženjer", "dizajner"],
        ["Maša Belić", "Grafički dizajner", "dizajner"],
        ["Igor Savić", "Arhitekta, dizajner", "dizajner"]
    ];

    let dizajneri = document.querySelector("#dizajneri");

    for (let i = 0; i < nizDizajnera.length; i++) {
        dizajneri.innerHTML += `
        <div class="card col-xs-6 text-center col-8 col-sm-6 col-md-4 brd-none">
            <img class="card-img-top rounded-circle mx-auto" src="img/${nizDizajnera[i][2] + i}.jpg" alt="${nizDizajnera[i][2]}">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">${nizDizajnera[i][0]}</h5>
                <p class="card-text text-secondary">${nizDizajnera[i][1]}</p>
            </div>
        </div>
        `;
    }
}

function ispisProjekata() {
    let nizProjekata = [
        ["Tomorrow", "Ovo je novi prostor za saradnju u Srbiji, koji u prvi plan dovodi zajednicu i dizajn. Njihova jedinstvena prodajna poenta je da su fokusirani na tehnologiju: svi menadžeri i članovi odbora su iz tehnološke industrije, što pomaže u stvaranju uspešne zajednice za napredne tehnološke preduzetnike.Tomorrow je tehnološki centar za socijalno dobro, a sve se vraća u zajednicu. Njihov kafić nudi samo hranu koja je proizvedena od lokalnih proizvođača, kojom upravljaju isključivo domaći stanovnici i osvojili su najbolju kafu Srbije 2020. godine!"],
        ["The Collective", "Old Oak je nova tipologija izgradnje, koja u severni London unosi zajednički život i saradnju. Razvio ga je The Collective i kompletirao sa Gavaltron dizajnom.Početi sa praznim platnom bila je savršena šansa da se stvori nešto potpuno individualno. Shvatili su da će ukupni troškovi biti malo viši od masovnog proizvedenog nameštaja, ali se mogla očiti vrednost. Proces je bio zabavan, a krajnji rezultat bio je i praktičan i ugodan. Sve je završeno i isporučeno od strane lokalnog proizvođača, jedanog od najboljih proizvođača u mreži Gavaltrona."],
        ["The Working Party", "The Working Party je softverska agencija u Australiji. Njihove kancelarije smeštene su u Sidneju. Poslovne prostorije smeštene su medju azijskim barovima, restoranima kineske kuhinje i užurbanog tržišta kineske četvrti. Cal, direktor je prvi put naleteo na Gavaltron na Tviteru, zavoleo je kolaborativni pristup nameštaju. Odmah je prepoznao vrednost u našim proizvodima  pa kada je došlo vreme za opremanje njihove nove kancelarije, Gavaltron je bio prirodni izbor."]
    ];

    let projekti = document.querySelector("#projekti");

    for (let i = 0; i < nizProjekata.length; i++) {
        let j = 1;
        projekti.innerHTML += `
        <h2 class="text-info pl-2 mt-5 mb-3">${nizProjekata[i][0]}</h2>
        <p class="d-inline">${nizProjekata[i][1]}</p>
        <div class="container d-flex flex-wrap col-12 pt-3 mt-4">
            <div class="col d-flex flex-wrap align-items-between col-12 p-0 ">
                <div class="pnaslovna container-fluid col-12 col-md-11 col-lg-6 p-0 mb-5"><img src="img/projekat${i+1}Slika${j++}.jpg" class="mw-100 col-12" alt="projekat ${nizProjekata[i][0]} radni prostor"> </div>
                <div class="pslika1 pslika2 pnaslovna container col-12 col-md-6 col-lg-5 mb-5"><img src="img/projekat${i+1}Slika${j++}.jpg" class="mw-100" alt="projekat ${nizProjekata[i][0]} radni prostor"> </div>
                <div class="pslika1 pslika3 pnaslovna container col-12 col-md-6 col-lg-5 mb-5"><img src="img/projekat${i+1}Slika${j++}.jpg" class="mw-100" alt="projekat ${nizProjekata[i][0]} radni prostor"> </div>
                <div class="pslika1 pnaslovna container col-12 col-md-11 col-lg-6"><img src="img/projekat${i+1}Slika${j++}.jpg" class="mw-100" alt="projekat ${nizProjekata[i][0]} radni prostor"> </div>
            </div>
        </div>
        `;
    }
}




//#region Katalog

function ispisProizvida() {

    let Stolovi = [
        ["Lean", "Prostran radni sto za 4 osobe", "143,554"],
        ["Team", "Radni sto srednje veličine za 4 osobe", "106,603"],
        ["Olivia", "Kompaktan kancelarijski sto", "39,353"],
        ["Lift", "Podesivi visoki sto", "91,823"],
        ["Meeting", "Široki sto za 8 osoba", "109,375"],
        ["Solo", "Solo sto sa ležištima", "53,394"]
    ];

    let Police = [
        ["Linnea", "Elegantne police modernog dizajna", "143,554"],
        ["Planter", "Komoda za knjige i cveće", "106,603"],
        ["Fin", "Fleksibilna kancelarijska polica", "39,353"],
        ["Lock Planter", "Timska komoda sa zaključavanjem", "91,823"],
        ["Pedestal", "Lična mini komoda", "109,375"]
    ];

    let Klupe = [
        ["Edie", "Klupa za 2 osobe", "143,554"],
        ["Stool", "Rasklapajuća hoklica", "106,603"],
        ["Set", "Tronošci i niski sto", "39,353"],
        ["Valovi", "Stolica sa zakrivljenim sedištem", "91,823"]
    ];

    var nizProizvoda = [Stolovi, Police, Klupe];
    var nizProizvodaString = ["stolovi", "police", "klupe"];

    let proizvodi = document.querySelector("#proizvodi");
    
    proizvodi.innerHTML += `<h1 class="text-center col-12 text-secondary">Nameštaj dizajniran da inspiriše radni prostor</h1>`;

    for (let i = 0; i < nizProizvoda.length; i++) {
        proizvodi.innerHTML += `
            <h2 id="${nizProizvodaString[i]}" class=" text-secondary pl-2 mt-5 mb-3 pt-2 pb-2 border-bottom col-12">${nizProizvodaString[i]}</h2>
            <div class="container mw-100 d-flex justify-content-start flex-wrap">`
        for (let j = 0; j < nizProizvoda[i].length; j++) {
            proizvodi.innerHTML += `
                <div class="card brd-none text-center col-sm-6 col-md-4 mb-3">
                    <img class="card-img-top pt-3" src="img/${nizProizvodaString[i] + j}.jpg" alt="radni sto">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${nizProizvoda[i][j][0]}</h5>
                        <p class="card-text text-dark">${nizProizvoda[i][j][1]}</p>
                        <p class="text-muted">${nizProizvoda[i][j][2]} RSD</p>
                        <button type="button" id="korpa" class="btn btn-info btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Naruči odmah</button>
                    </div>
                </div>
            `;
        }
        proizvodi.innerHTML += `</div>
        `;
    }
}



})