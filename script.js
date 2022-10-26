
let miGrafico = function (losDatos, LasEtiquetas) {
    const contenedor = document.getElementById('myChart').getContext('2d');
    if(window.myCharts != undefined){
        console.log('esxiste, hay que destruirlo')
        window.myCharts.destroy();
        window.myCharts = new Chart(contenedor, {
            type: 'bar',
            data: {
                labels: LasEtiquetas,
                datasets: [{
                    label: '# of Votes',
                    data: losDatos
                }]
            }
        });
    }else{
        console.log('No existe, a crearlo')
        window.myCharts = new Chart(contenedor, {
            type: 'bar',
            data: {
                labels: LasEtiquetas,
                datasets: [{
                    label: '# of Votes',
                    data: losDatos
                }]
            }
        });
    }


    

    return grafico
}

function datos() {
    let losInput = document.querySelectorAll('.value')
    let nuestroArray = []
    losInput.forEach(elInput => {
        nuestroArray.push(parseInt(elInput.value))
    });
    etiquetas(nuestroArray)
}
function etiquetas(datos) {
    let losInput = document.querySelectorAll('.etiqueta')
    let nuestroArray = []
    losInput.forEach(elInput => {
        nuestroArray.push(elInput.value)
    });
    miGrafico(datos, nuestroArray)
}


let agregarNuevo = function () {
    console.log(miGrafico())
    miGrafico.data.datasets[0].data.push(100)
}