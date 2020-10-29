window.setTimeout("hari()",0)
function hari(){
    var hari = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var bulan = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var tanggal = new Date();
    setTimeout("hari()",0);
    document.getElementById("tanggal").innerHTML =hari[tanggal.getDay()]+", "+tanggal.getDate()+" "+bulan[tanggal.getMonth()]+" "+tanggal.getFullYear();
}