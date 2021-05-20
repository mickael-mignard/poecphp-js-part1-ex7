
function calculer(){
    var pointure = document.getElementById("pointure").value;
    var dateNaissance = document.getElementById("dateNaissance").value;
    
    resultat = (pointure * 2 + 5) * 50 - dateNaissance + 1766;

    return resultat; 
}


function afficherResultat(){
    document.getElementById('resultat').innerHTML = calculer();
    console.log(resultat);


}