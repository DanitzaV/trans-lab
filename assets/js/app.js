
function tarjetaBip(num) {
    

fetch(
    `http://www.psep.cl/api/Bip.php?&numberBip=${num}`
    ).then(response => response.json()
).then(respuestaJson => {
    console.log(respuestaJson);
}).catch(err => {
    console.log('numero no encontrado')
})
}

const buscarBtn =  document.getElementById('buscarBtn');
buscarBtn.addEventListener('click', () => {
    let input = document.getElementById('numeroBip')
    let numeroBip = document.getElementById('numeroBip').value;
    
    if (numeroBip.length == 8) {
        tarjetaBip(numeroBip)
        input.style.border = 'solid';
    }else {
        console.log("ingreso invalido")
        input.style.border = 'solid red';
    }
})

// const btnIngreso = document.getElementById('btnIngreso');
// btnIngreso.addEventListener('click' , (evt) => {
//     let email =  document.getElementById('ControlInput').value;
//     let password = document.getElementById('inputPassword').value;
//     // if (password.length <= 8 ) {
//     //     console.log(email)
//     // }else {
//     //     console.log('algo no etsa bien')
//     // 
//         if (password === "000") {
//             location.href = "../../sesion.html";
//             evt.preventDefault(); // Evitamos el submit en nuevos navegadores
//             // Evitamos el submit viejos navegadores
//         } else {
//             return true;
//         }
// })
let barra = document.getElementsByClassName('barra')[0];
function enviarTramite(event) {
    let password = document.getElementById('inputPassword').value;
    if (password.length <= 8) {
        barra.style.display = 'block';
        document.getElementsByClassName('bip')[0].style.display = 'block';
        document.getElementsByTagName('header')[0].style.display = 'none';
        document.getElementsByTagName('section')[0].style.display= 'none';
        event.preventDefault(); // Evitamos el submit en nuevos navegadores
        return false; // Evitamos el submit viejos navegadores
    } else {
        return true;
    }
}

