function enter(){
    document.getElementById("new_pizza").style.display = "block";
    document.getElementById("new").style.display = "block";
    var flavour_name = document.getElementById("input").value; 
    document.getElementById("flavour").innerHTML = flavour_name;
} 