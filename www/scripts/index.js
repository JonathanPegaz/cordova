// Pour obtenir une présentation du modèle Vide, consultez la documentation suivante :
// http://go.microsoft.com/fwlink/?LinkID=397704
// Pour déboguer du code durant le chargement d'une page dans Ripple ou sur les appareils/émulateurs Android, lancez votre application, définissez des points d'arrêt, 
// puis exécutez "window.location.reload()" dans la console JavaScript.
(function () {
    "use strict";

    var joueur;
    var salle;
    var centre;
    var score; 

    function onDeviceReady() {
 
        // Gérer les événements de suspension et de reprise Cordova
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);
 

        
        // TODO: Cordova a été chargé. Effectuez l'initialisation qui nécessite Cordova ici.
    };
    function onBackKeyDown() {
        navigator.app.exitApp();
    };

    function onPause() {
        // TODO: cette application a été suspendue. Enregistrez l'état de l'application ici.
        
    };
 
    
    

    /*function JsonpCallback(json)  {
        document.getElementById('txtHint').innerHTML = json.result;*/
    


    


    function onResume() {
        // TODO: cette application a été réactivée. Restaurez l'état de l'application ici.
    };

   
})
$("#boutonAlerte").click(function () {
    var joueurAf = document.getElementById('txtHint');
    if (document.getElementById('txtHint').innerHTML == "...") {
        $.getJSON('http://192.168.10.21:8080/PhpstormProjects/untitled/index.php/Joueur', function (data) {
            

        
           
            var ele = JSON.stringify(data, ['id', 'pseudo']);
            var compte = ele.length;
            var i = 0;
            var virg = true;
            while(i<compte){
                ele = ele.replace('{', ' ');
                ele = ele.replace('}', ' ');
                ele = ele.replace('[', ' ');
                ele = ele.replace(']', ' ');
                ele = ele.replace('"', ' ');
                if (virg == false)
                {
                    ele = ele.replace(',', ' <br> ');
                    virg = true;
                }

                else
                {
                    ele = ele.replace(',', ' ');
                    virg = false;
                }
               
                ele = ele.replace('id', 'Joueur');
                i = i + 1;
            }
            
         
            joueurAf.innerHTML = ele;
        });
    }
    else {
        joueurAf.innerHTML = "...";
        
       
    }
    
});

$("#btnSalle").click(function () {
    var salleAf = document.getElementById('salle');
    if (document.getElementById('salle').innerHTML == "...") {
        $.getJSON('http://192.168.10.21:8080/PhpstormProjects/untitled/index.php/Joueur', function (data) {
            
            var ele2 = JSON.stringify(data, ['id','centre']);
            var compte2 = ele2.length;
            var i2 = 0;
            var virg2 = true;
            while (i2 < compte2) {
                
                ele2 = ele2.replace('{', ' ');
                ele2 = ele2.replace('}', ' ');
                ele2 = ele2.replace('[', ' ');
                ele2 = ele2.replace(']', ' ');
                ele2 = ele2.replace('"', ' ');
                if (virg2 == false) {
                    ele2 = ele2.replace(',', ' <br> ');
                    virg2 = true;
                }

                else {
                    ele2 = ele2.replace(',', ' ');
                    virg2 = false;
                }
                ele2 = ele2.replace('id', 'Salle');

                i2 = i2 + 1;
            }


            
            salleAf.innerHTML = ele2;

        })

    }
    else {
        salleAf.innerHTML = "...";


    }
});

$("#btnCentre").click(function () {
    var centreAf = document.getElementById('centre');
    if (document.getElementById('centre').innerHTML == "...") {
        $.getJSON('http://192.168.10.21:8080/PhpstormProjects/untitled/index.php/Centre', function (data) {
            
            var ele3 = JSON.stringify(data, ['id', 'nom', 'lieu', 'adresse']);
            var compte3 = ele3.length;
            var i3 = 0;
            var virg3 = true;
            while (i3 < compte3) {

                ele3 = ele3.replace('{', ' ');
                ele3 = ele3.replace('}', ' ');
                ele3 = ele3.replace('[', ' ');
                ele3 = ele3.replace(']', ' ');
                ele3 = ele3.replace('"', ' ');
                if (virg3 == false) {
                    ele3 = ele3.replace(',', ' <br>');
                    virg3 = true;
                }

                else {
                    ele3 = ele3.replace(',', ' ');
                    virg3 = false;
                }
                ele3 = ele3.replace('id', 'Centre');

                i3 = i3 + 1;
            }


            
           centreAf.innerHTML = ele3;

        })

    }
    else {
       centreAf.innerHTML = "...";


    }
});



function Top() {
   
    $.getJSON('http://192.168.10.21:8080/PhpstormProjects/untitled/index.php/Tournoi', function (data) {
            var topJ = JSON.stringify(data);
            var compte = topJ.length;
            var i = 0;
            var virg = true;
            while (i < compte) {
                topJ = topJ.replace('{', '<br> ');
                topJ = topJ.replace('}', ' <br> ');
                topJ = topJ.replace('[', ' ');
                topJ = topJ.replace(']', ' ');
                topJ = topJ.replace('"', ' ');
                if (virg == false) {
                    topJ = topJ.replace(',', ' <br> ');
                    virg = true;
                }

                else {
                    topJ = topJ.replace(',', ' ');
                    virg = false;
                }
                topJ = topJ.replace('id : ', 'Numero : ')
               
                i = i + 1;
            }
            

            document.getElementById('tournoi').innerHTML = topJ;
        });   

};