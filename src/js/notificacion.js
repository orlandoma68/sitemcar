export const notific = {
    position: "top-right",
    autoClose: 2000, // milisegundos
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      fontSize: '13px', // Cambia el tamaño de fuente aquí
    },
  }

  export const showAlert = (mensaje, icono, foco)=>{
    onFocus (foco)
    const mySwal = whithReactContent(Swal)
    mySwal.fire({
      title:mensaje,
      icon: icono
    })
  }

  const onFocus =(foco)=>{
    if(foco !== ""){
      document.getElementById(foco).focus()
    }
  }