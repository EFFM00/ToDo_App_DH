window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   const form = document.querySelector("form");
   const inputEmail = document.getElementById("inputEmail");
   const inputPassword = this.document.getElementById("inputPassword")
    
    const linkBase = "https://ctd-todo-api.herokuapp.com/v1";
    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
       
        event.preventDefault();

        const datosUsr = {
            "email": inputEmail.value,
            "password": inputPassword.value
        }
        console.log(datosUsr);

        const config = {
            method: 'POST',
            body: JSON.stringify(datosUsr),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        realizarLogin(config);
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
       
        fetch(`${linkBase}/users/login`, settings)

        .then(response => response.json())

        .then(data => {
            console.log(data);

            if(data.jwt){
                localStorage.setItem('jwt', JSON.stringify(data.jwt));
                location.replace('./mis-tareas.html');
            }

        })

        .catch(error =>{
            console.log("Error escuchando la promesa.");
            console.log(error);
        })

        
    };


});