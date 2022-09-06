const qs = (element) => {
    return document.querySelector(element)
}

window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formularioSection = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formularioSection.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    let inputTitle = qs("#title");
    let inputRating = qs('#rating');
    let inputAwards = qs("#awards");
    let releaseDate = qs("#release_date");
    let inputLength = qs("#length")
    let inputGenre = qs("#genre_id")
    let titleError = qs("#titleError")
    let ratingError = qs("#ratingError")
    let awardsError = qs("#awardsError")
    let lengthError = qs("#lengthError")
    let dateError = qs("#dateError")
    let genreError = qs("#genreError")
    regExValid = /^[0-9]{1,2}$/;
    let errores = qs(".errores")
    let form = qs(".form")

    inputTitle.focus()

    /* Validación del input de título */

    inputTitle.addEventListener('blur', function () {
        switch (true) {
            case !inputTitle.value.trim():
                this.classList.add("is-invalid")
                msg = titleError.innerHTML = "Complete este campo"
                titleError.classList.add("is-invalid")
                break;
            case inputTitle.value.length <= 2:
                this.classList.add("is-invalid")
                msg = titleError.innerHTML = "Nombre no válido"
                titleError.classList.add("is-invalid")
                break;
            default:
                inputTitle.classList.remove("is-invalid")
                inputTitle.classList.add("is-valid")
                titleError.innerHTML = ""
                titleError.classList.remove("is-invalid")
                break;
        }
    })
    inputTitle.addEventListener('keydown', function (event) {
        let keywords = event.target
        if(keywords.value.length >= 2 && inputTitle.classList.contains("is-invalid")) {
            inputTitle.classList.remove("is-invalid")
            inputTitle.classList.add("is-valid")
            titleError.innerHTML = ""
            titleError.classList.remove("is-invalid")
        }
    })

    /* Validación del input de premios */

    inputAwards.addEventListener('blur', function (event) {
        switch (true) {
            case !inputAwards.value.trim():
                this.classList.add("is-invalid")
                awardsError.innerHTML = "Complete este campo"
                awardsError.classList.add("is-invalid")
                break;
            case typeof +inputAwards.value !== "number":
                this.classList.add("is-invalid")
                awardsError.innerHTML = "Debe ingresar un número"
                awardsError.classList.add("is-invalid")
                break;
            case +inputAwards.value > 10 || +inputAwards.value < 0:
                this.classList.add("is-invalid")
                awardsError.innerHTML = "Ingrese un rango entre 0 y 10"
                awardsError.classList.add("is-invalid")
                break;
            default:
                inputAwards.classList.remove("is-invalid")
                inputAwards.classList.add("is-valid")
                awardsError.innerHTML = ""
                awardsError.classList.remove("is-invalid")
                break;
        }
    })

    /* Validaciones del input de calificacion */

    inputRating.addEventListener('blur', function (event) {
        switch (true) {
            case !inputRating.value.trim():
                this.classList.add("is-invalid")
                ratingError.innerHTML = "Complete este campo"
                ratingError.classList.add("is-invalid")
                break;
            case typeof +inputRating.value !== "number":
                this.classList.add("is-invalid")
                ratingError.innerHTML = "Debe ingresar un número"
                ratingError.classList.add("is-invalid")
                break;
            case +inputRating.value > 10 || +inputRating.value < 0:
                this.classList.add("is-invalid")
                ratingError.innerHTML = "Ingrese un rango entre 0 y 10"
                ratingError.classList.add("is-invalid")
                break;
            default:
                inputRating.classList.remove("is-invalid")
                inputRating.classList.add("is-valid")
                ratingError.innerHTML = ""
                ratingError.classList.remove("is-invalid")
                break;
        }
    })

    /* Validaciones del input de duración */

    inputLength.addEventListener('blur', function (event) {
        switch (true) {
            case !inputLength.value.trim():
                this.classList.add("is-invalid")
                lengthError.innerHTML = "Complete este campo"
                lengthError.classList.add("is-invalid")
                break;
            case typeof +inputLength.value !== "number":
                this.classList.add("is-invalid")
                lengthError.innerHTML = "Debe ingresar un número"
                lengthError.classList.add("is-invalid")
                break;
            case +inputLength.value > 360 || +inputLength.value < 60:
                this.classList.add("is-invalid")
                lengthError.innerHTML = "Ingrese un rango entre 60 y 360"
                lengthError.classList.add("is-invalid")
                break;
            default:
                inputLength.classList.remove("is-invalid")
                inputLength.classList.add("is-valid")
                lengthError.innerHTML = ""
                lengthError.classList.remove("is-invalid")
                break;
        }
    })

    /* Validaciones de género */

    inputGenre.addEventListener('blur', () => {
        switch (true) {
            case inputGenre.value === "default":
                inputGenre.classList.add("is-invalid")
                genreError.innerHTML = "Seleccione un género"
                genreError.classList.add("is-invalid")
                break;
            default:
                inputGenre.classList.remove("is-invalid")
                inputGenre.classList.add("is-valid")
                genreError.innerHTML = ""
                genreError.classList.remove("is-invalid")
                break;
        }
    })

    /* Validaciones de fecha de estreno */

    releaseDate.addEventListener('blur', () => {
        switch (true) {
            case releaseDate.value === "":
                releaseDate.classList.add("is-invalid")
                dateError.innerHTML = "Ingrese una fecha"
                dateError.classList.add("is-invalid")
                break;
            default:
                releaseDate.classList.remove("is-invalid")
                releaseDate.classList.add("is-valid")
                dateError.innerHTML = ""
                dateError.classList.remove("is-invalid")
                break;
        }
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let elementsForm = form.elements
        let msg= []
        let errors = false
        for(let i = 0; i < elementsForm.length - 1; i++) {
            if((elementsForm[i].value === "" || "default")
            && elementsForm[i].type !== "submit"
            || elementsForm[i].classList.contains('is-invalid'))
            {   
                if(elementsForm[i].value === "default")
                {
                    msg.push("Género: Elija un género")
                    errors = true
                } else {
                    if(elementsForm[i].labels[0] && elementsForm[i].value === "" || elementsForm[i].classList.contains("is-invalid")) {
                        msg.push(elementsForm[i].labels[0].textContent + " : Revise este campo")
                        errors = true
                    }
                }
            }
        }
        console.log(elementsForm);
        if(!errors) {
            alert("La pelicula se cargo satisfactoriamente")
            form.submit()
        } else {
            alert("¡Hay errores en el formulario!")
            console.log(msg);
            console.log(errores);
            console.log(errors);
            errores.innerHTML = ""
                for(let i = 0; i < msg.length; i++) {
                    errores.innerHTML += "<li>" + msg[i] + "</li>"
                    errores.classList.add("alert-warning")
            }
        }
    })
}