
function calculer(){
    let pointure = document.getElementById("pointure").value;
    let dateNaissance = document.getElementById("dateNaissance").value;
    
    resultat = (pointure * 2 + 5) * 50 - dateNaissance + 1766;

    return resultat; 
}


function afficherResultat(){
    document.getElementById('resultat').innerHTML = calculer();   
}