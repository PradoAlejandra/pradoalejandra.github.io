
function mostrarInfo(mx,actx,infox){
    var p=document.getElementById(mx);
    p.remove();

    var act = document.getElementById(actx);
    act.style.border="none";

    var info=document.getElementById(infox);
    info.style.display="block";
}

function ocultarInfo(infox,actx,mx){
    var infoA = document.getElementById(infox);
    infoA.style.display="none";

    var actA = document.getElementById(actx);

    actA.style.borderTop="3px solid #7a8081";
    actA.style.borderBottom="3px solid #7a8081";
    actA.style.minHeight="100px";

    const p =document.createElement("p");
    p.setAttribute("id",mx);
    p.style.display="block";
    p.textContent="Mostrar";
    p.style.textAlign="center";

    actA.appendChild(p);
}

document.getElementById("act1").addEventListener("mouseover", function(){
    mostrarInfo("m1","act1","info1");
})

document.getElementById("act1").addEventListener("mouseout", function(){
    ocultarInfo("info1","act1","m1");
})

document.getElementById("act2").addEventListener("mouseover", function(){
    mostrarInfo("m2","act2","info2");
})

document.getElementById("act2").addEventListener("mouseout", function(){
    ocultarInfo("info2","act2","m2");
})