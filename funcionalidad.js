document.addEventListener('DOMContentLoaded',()=>{
    let agregoTitulo = false;
    let agregoTrabajo = false;
    localStorage.clear();
    

    
    //capturamos el evento del boton modal
    let botonModal = document.getElementById('modal-close').addEventListener('click',()=>
    {
        modalC = document.getElementsByClassName('modal-container')[0];
        modal = document.getElementsByClassName('modal')[0];
        modal.style.transition = "transform 0.8s";
        modal.style.transform = "translateY(-30%)";
        setTimeout(function(){

            modalC.style.opacity = 0;
            modalC.style.visibility = "hidden";
        },700)
    })

    // Obtenemos la imagen que quiera subir el usuario
    let input = document.getElementById("get-imagen").addEventListener('change',()=>{
        let imagenes = document.getElementById('get-imagen').files;
        if(!imagenes || !imagenes.length){
            imagenes.src= "";
            return;
        }
        let primeraImagen = imagenes[0];
        let url = URL.createObjectURL(primeraImagen);
        localStorage.setItem('imagen-perfil',url);
        document.getElementById("img-previsualizacion").src = url;
    })    

    //evento al boton + para agregar otro titulo
    document.getElementById('agregar-titulo').addEventListener('click',()=>{
        agregoTitulo = true;
        agregarSolapaTitulo();
        
    })

    //evento al boton + para agregar otro trabajo
    document.getElementById('agregar-trabajo').addEventListener('click',()=>{
        agregoTrabajo = true;
        agregarSolapaTrabajo();
        
    })

    let terminarForm = document.getElementById('terminar-form');
    terminarForm.addEventListener('click',()=>{
        //Obtiene la informacion del form y la guarda en el local storage 
        
        obtenerInformacion(agregoTitulo,agregoTrabajo,terminarForm);
    })
});


function agregarSolapaTitulo(){

    alert("Agrega nuevamente los titulos porfavor");
    //Finalmente agregamos la nueva informacion 
    let agregarTitulo = document.getElementsByClassName("info-titulos");
    agregarTitulo =agregarTitulo[0];
    agregarTitulo.innerHTML +=  "<p>--------------------------------------------------------------</p>"+
    "<fieldset class='nivel-educacion'>" +"<legend>Nivel de Educacion Alcanzado</legend>" +"<input type='radio' name='nivelEducacionDos' value='1' class='check' checked >Primario" +"<input type='radio' name='nivelEducacionDos' value='2' class='check'>Secundario"
    +"<input type='radio' name='nivelEducacionDos' value='3' class='check'>Terciario";


    agregarTitulo.innerHTML+="<label for='get-titulo'>Titulo</label>";
    agregarTitulo.innerHTML+="<input type='text' name='tituloDos' id='get-titulo'>";
    agregarTitulo.innerHTML+="<label for='get-inicio'>Año inicio</label>";
    agregarTitulo.innerHTML+="<input type='number' name='inicioDos' id='get-inicio'>";
    agregarTitulo.innerHTML+="<label for='get-fin'>Año de finalizacion</label>";
    agregarTitulo.innerHTML+="<input type='number' name='finDos' id='get-fin'>";

    let boton = document.getElementById('agregar-titulo');
    agregarTitulo.removeChild(boton);
    agregarTitulo.innerHTML+='<input type="button" id="agregar-titulo" value="+">';

}

function agregarSolapaTrabajo(){
    
    
    alert("Agrega nuevamente los trabajos porfavor")
    let agregarTrabajo = document.getElementsByClassName("info-trabajos");
        agregarTrabajo =agregarTrabajo[0];
        agregarTrabajo.innerHTML+= '<p>--------------------------------------------------------------</p>'+
        '<label for="get-nombre-empresa">Nombre de la empresa</label> <input type="text" name="nombreEmpresaDos" id="get-nombre-empresa"><label for="get-rol">Rol que realizo en la empresa</label> <textarea name="rolDos" id="get-rol" cols="5" rows="10"></textarea>'
        + '<label for="get-contacto">Numero Telefono Para Comprobacion</label> <input type="number" name="numeroEmpresaDos" id="get-contacto"> <label for="get-anios-trabajo">Cantidad de años de trabajo</label> <input type="number" name="aniosTrabajoDos" id="get-anios-trabajo">';
        let boton = document.getElementById('agregar-trabajo');
        agregarTrabajo.removeChild(boton);
        agregarTrabajo.innerHTML+='<input type="button" id="agregar-trabajo" value="+">';

        
}

function obtenerInformacion(agregoTitulo,agregoTrabajo,terminarForm){
    //Obtenemos el formulario
    let form = document.getElementById('form');
    // Obtenemos la imagen
    let imagenes = document.getElementById('get-imagen').files;
        
    if(!imagenes || !imagenes.length){
        imagenes.src= "";
        alert('agregue una imagen porfavor');
        return
    }else{
        let primeraImagen = imagenes[0];
        let url = URL.createObjectURL(primeraImagen);
        informacionPersonalContacto(form,agregoTitulo,agregoTrabajo,terminarForm);
        
    }
    



}

function informacionPersonalContacto(form,agregoTitulo,agregoTrabajo,terminarForm){
    //Obtenemos la informacion persona

    let nombre = form.name;
    let apellido =form.apellido;
    let edad = form.edad;
    let descripcion = document.getElementById('get-descripcionpersonal');
    if(nombre.value != "" && descripcion.value != "" && edad.value != 0 && apellido.value != ""){
        localStorage.setItem("name",nombre.value);
        localStorage.setItem("apellido",apellido.value);
        localStorage.setItem('edad',edad.value)
        localStorage.setItem("descripcion-personal",descripcion.value);
        
        //informacion de contacto
        let correo = form.correo;
        let telefono = form.telefono;
        let linkedin = form.linkedin;
        let github = form.github;
        let instagram = form.instagram;
        if(correo.value != "" && telefono.value !=""){
            if(linkedin.value!=undefined){
                localStorage.setItem("linkedin",linkedin.value);
            }
            if(instagram!=undefined){
                localStorage.setItem('instagram',instagram.value);
            }
            if(github.value!=undefined){
                localStorage.setItem("github",github.value);
            }

            localStorage.setItem("correo",correo.value);
            localStorage.setItem("telefono",telefono.value);

            informacionEstudioTrabajo(form,agregoTitulo,agregoTrabajo,terminarForm);
        }else{
            alert('porfavor agregue los contactos necesarios')
        }
    }else{
        alert('porfavor agregue informacion personal necesaria');
    }   
}

function informacionEstudioTrabajo(form,agregoTitulo,agregoTrabajo,terminarForm){
    let nivelEducacion = form.educacion;
    let titulo = form.titulo;
    let inicio = form.inicio;
    let fin = form.fin;
    
    
    localStorage.setItem('nivelEducacion',nivelEducacion.value);
    localStorage.setItem('titulo',titulo.value);
    localStorage.setItem('inicio',inicio.value);
    localStorage.setItem('fin',fin.value);

    let nombreEmpresa = document.getElementById('get-nombre-empresa');
    let  numeroEmpresa = document.getElementById('get-contacto');
    let aniosTrabajo = document.getElementById('get-anios-trabajo');
    localStorage.setItem('nombre-empresa',nombreEmpresa.value);
    
    localStorage.setItem('rol',form.rol.value);
    localStorage.setItem('tel-empresa',numeroEmpresa.value);
    localStorage.setItem('anios-trabajo',aniosTrabajo.value);


    if(agregoTitulo){
        localStorage.setItem('nivelEducacionDos',form.nivelEducacionDos.value);
        localStorage.setItem('tituloDos',form.tituloDos.value);
        localStorage.setItem('inicioDos',form.inicioDos.value);
        localStorage.setItem('finDos',form.finDos.value);
    }

    if(agregoTrabajo){
        localStorage.setItem('nombre-empresa-dos',form.nombreEmpresaDos.value);
        localStorage.setItem('rol-dos',form.rolDos.value);
        localStorage.setItem('tel-empresa-dos',form.numeroEmpresaDos.value);
        localStorage.setItem('anios-trabajo-dos',form.aniosTrabajoDos.value);
    }
    
    terminarForm.href="./CvFinal/cvFinal.html"
}
