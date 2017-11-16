function CreatePlayer()
{
document.getElementById('name').innerHTML= document.getElementById('playername').value;
document.getElementById('health').innerHTML = document.getElementById('playerhealth').value;
document.getElementById('colour').color = document.getElementById('playercolour').value;

if(document.getElementById('playerweapon').value==1){

   document.getElementById('weapon').innerHTML = "Crossbow of much hurting";

}else if (document.getElementById('playerweapon').value==2) {

   document.getElementById('weapon').innerHTML = "Broadsword of so slicing";

}else{

  document.getElementById('weapon').innerHTML = "Wand of amaze magics";

}
}
