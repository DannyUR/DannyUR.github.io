document.getElementById("btnGuardar").onclick= (event)=>{
    event.preventDefault()//evita recargar la página
    document.getElementById("form").classList.add('was-validated')
   


    let camposValidos = form;
    const campos = form.querySelectorAll("input, textarea, select"); // Selecciona los campos del formulario
    campos.forEach(campo => {
        if (!campo.value.trim() || !campo.checkValidity()) {
            camposValidos = false; // Si hay un campo vacío o inválido, marcamos como no válido
        }
    });    


    if(!camposValidos){
    document.querySelector("#divAlerta").classList.remove("d-none")
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Favor de llenar los campos correctamente",
        //footer: '<a href="#">Why do I have this issue?</a>'
      });
    }else{
        document.querySelector("#divCorrect").classList.remove("d-none")
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Formulario envido exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
    }
}





