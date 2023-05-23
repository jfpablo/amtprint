function affichZero(nombre) {
return nombre < 10 ? '0' + nombre : nombre;
}
function dateEtHeure() {

const infos = new Date();
 
document.getElementById('time').innerHTML = ' ' + affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes());
}
window.onload = function() {
setInterval("dateEtHeure()", 1000);
};