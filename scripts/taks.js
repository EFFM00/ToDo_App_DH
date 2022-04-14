// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const token = localStorage.getItem("jwt");

if(!token){
  location.replace('./index.html');
}

// console.log(token);
// console.log(JSON.parse(token));



/* ------ comienzan las funcionalidades una vez que carga el documento ------ */

window.addEventListener('load', function () {


  /* ---------------- variables globales y llamado a funciones ---------------- */
  const username = document.querySelector("#username");
  const btnCerrarSesion = document.getElementById("closeApp");
  const urlBase = "https://ctd-todo-api.herokuapp.com/v1"

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
    
    const confirmar = confirmar("¿Desea cerrar sesión?");

    if(confirmar){
      localStorage.clear();
      // localStorage.removeItem('jwt');
      location.replace('./index.html');

    }


  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    
    const settings = {
      method: 'GET',
      headers: {
        authorization: JSON.parse(token)
      }
    }

    fetch(`${urlBase}/users/getMe`, settings)
      .then(response => response.json())
      .then(data => console.log(data.firstName))
    
  };
  obtenerNombreUsuario()

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    
    



  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  // formCrearTarea.addEventListener('submit', function (event) {
    




  // });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});