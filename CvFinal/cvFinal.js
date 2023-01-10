
document.addEventListener('DOMContentLoaded',()=>{

    
    obtenerYMostrarInformacion();
    obtenerYMostrarContacto();
    obtenerYMostrarTitulos();
    obtenerYMostrarTrabajo();
    
});


function obtenerYMostrarInformacion(){
    let url = localStorage.getItem('imagen-perfil');
    let imagenPerfil = document.getElementById('imagen-perfil').src = url;
    
    let nombre = localStorage.getItem("name");
    let obtenerEtiquetaNombre = document.getElementById('nombre');
    obtenerEtiquetaNombre.innerHTML=  nombre;

    let apellido = document.getElementById('apellido');
    apellido.innerHTML+=localStorage.getItem('apellido');

    let edad = document.getElementById('edad');
    edad.innerHTML+=localStorage.getItem('edad');

    let descripcion = document.getElementById('descripcion-personal');
    descripcion.innerHTML+=localStorage.getItem('descripcion-personal');
}

function obtenerYMostrarContacto(){
    let email = document.getElementById('email');
    email .innerHTML+=localStorage.getItem('correo');
    
    let telefono = document.getElementById('telefono');
    telefono.innerHTML+=localStorage.getItem('telefono');
    
     let linkedin = document.getElementById('linkedin');
     let linkedinInfo = localStorage.getItem('linkedin');
     
     if(linkedinInfo!=""){
         linkedin.innerHTML+=linkedinInfo;
     }else{
         document.getElementById('h2-linkedin').style.opacity = 0;
         linkedin.style.opacity = 0;
     };
     
     let github = document.getElementById('github');
     let githubInfo = localStorage.getItem('github');
 
     if(githubInfo!=""){
         github.innerHTML+=githubInfo;
     }else{
         let gitTitulo = document.getElementById('h2-github');
         gitTitulo.style.opacity = 0;
         gitTitulo.innerHTML ="";
         github.style.opacity = 0;
         github.innerHTML ="";

     }  
     
     let instagram = document.getElementById('instagram');
     let instagramInfo = localStorage.getItem("instagram");
 
     if(instagramInfo!=""){
         instagram.innerHTML+=instagramInfo;
     }else{
         let insta=document.getElementById('h2-instagram');
         insta.style.opacity = 0;
         insta.innerHTML ="";
         instagram.style.opacity = 0;
         instagram.innerHTML = ""

     }
 
     
}

function obtenerYMostrarTitulos(){
    
    let titulo = document.getElementsByClassName('titulo')[0];
    let tituloInfo = localStorage.getItem('titulo');

    let tituloDos = document.getElementsByClassName('titulo')[1];
    let tituloInfoDos = localStorage.getItem('tituloDos');
    

    let principio = document.getElementsByClassName('anio-inicio');
    let fin = document.getElementsByClassName('anio-fin');

    if(tituloInfo!=""){
        titulo.innerHTML += tituloInfo;
        let nivelAcademico = document.getElementById('nivel-educacion');
        let nivelAcademicoInfo = localStorage.getItem('nivelEducacion');
        if(nivelAcademicoInfo == 1){
            nivelAcademico.innerHTML+="Primario"
        }else{
            if(nivelAcademicoInfo == 2){
                nivelAcademico.innerHTML += "Secundario"
            }else{
                nivelAcademico.innerHTML += "Universidad"
            }
        }
        
        principio[0].innerHTML+= localStorage.getItem('inicio');

        fin[0].innerHTML+=localStorage.getItem('fin');
    }else{
        let contTitulos =document.getElementById('titulos');
        contTitulos.style.opacity = 0;
        contTitulos.innerHTML="";
    }

    if(tituloInfoDos!="" && tituloInfoDos != null){
        tituloDos.innerHTML += tituloInfoDos;
        let nivelAcademicoDos = document.getElementById('nivel-educacion-dos');
        let nivelAcademicoInfoDos = localStorage.getItem('nivelEducacionDos');
        if(nivelAcademicoInfoDos == 1){
            nivelAcademicoDos.innerHTML+="Primario"
        }else{
            if(nivelAcademicoInfoDos == 2){
                nivelAcademicoDos.innerHTML += "Secundario"
            }else{
                nivelAcademicoDos.innerHTML += "Universidad"
            }
        }
        
        principio[1].innerHTML+= localStorage.getItem('inicioDos');

        fin[1].innerHTML+=localStorage.getItem('finDos');
    }else{
        let contTitulos =document.getElementById('titulos-dos');
        contTitulos.style.opacity = 0;
        contTitulos.innerHTML="";
    }
     
    
 
}

function obtenerYMostrarTrabajo(){
    let nombreEmpresa = document.getElementsByClassName('nombre-empresa')[0];
    let nombreEmpresaInfo = localStorage.getItem('nombre-empresa');

    let nombreEmpresaDos = document.getElementsByClassName('nombre-empresa')[1];
    let nombreEmpresaDosInfo = localStorage.getItem('nombre-empresa-dos');

    let cantAnios = document.getElementsByClassName('cant-anios');
    let telefonoEmpresa = document.getElementsByClassName('tel-validacion');
    let rolEmpresa = document.getElementsByClassName('rol-empresa');

    if(nombreEmpresaInfo != ""){
        nombreEmpresa.innerHTML+=nombreEmpresaInfo;
    
        rolEmpresa[0].innerHTML+=localStorage.getItem('rol');
 
        telefonoEmpresa[0].innerHTML+=localStorage.getItem('tel-empresa');

        cantAnios[0].innerHTML += localStorage.getItem('anios-trabajo');

    }else{
        let contTrabajos = document.getElementById('trabajos');
        contTrabajos.style.opacity = 0;
        contTrabajos.innerHTML ="";
    }

    if(nombreEmpresaDosInfo != "" && nombreEmpresaDosInfo!=null){
        nombreEmpresaDos.innerHTML+=nombreEmpresaDosInfo;
        
        rolEmpresa[1].innerHTML+=localStorage.getItem('rol-dos');

        telefonoEmpresa[1].innerHTML+=localStorage.getItem('tel-empresa-dos');

        cantAnios[1].innerHTML += localStorage.getItem('anios-trabajo-dos');

    }else{
        let contTrabajos = document.getElementById('trabajos-dos');
        contTrabajos.style.opacity = 0;
        contTrabajos.innerHTML ="";
    }

    
}
