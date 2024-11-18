const ctx = document.getElementById('chartActividad');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octube', 'Noviembre', 'Diciembre',],
    datasets: [{
      label: 'Usuarios por mes',
      data: [200, 180, 220, 250, 300, 150, 350, 260, 450, 490, 380, 554,],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById('chartCategorias');

new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Artes', 'Comedia', 'Deportes', 'Ciencia','Ficción', 'Crimen y misterio', 'Salud y forma física', 'Sociedad y cultura','TV y cine', 'Podcasts a-z',],
    datasets: [{
      label: 'Episodios por categorías',
      data: [10, 15, 20, 8, 35, 28, 27, 30, 22, 45,],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx3 = document.getElementById('chartAudiencia');

new Chart(ctx3, {
  type: 'bar',
  data:{
    labels: ['México', 'Estados Unidos', 'España', 'Argentina', 'Colombia', 'Otros'],
    datasets:[{
      label:'Distribución por países',
      data: [45, 25, 15, 10, 35, 5,],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
},
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx4 = document.getElementById('chartactDia');

new Chart(ctx4, {
  type: 'polarArea',
 data : {
  labels: ['Lunes','Martes','Miercoles','Jueves','Viernes', 'Sábado', 'Domingp',],
  datasets: [{
    label: 'Reproducciones por día',
    data: [100, 200, 120, 250, 180, 300, 230],
    backgroundColor: [
      'rgb(255, 99, 132, 0.2)',
      'rgb(75, 192, 192, 0.2)',
      'rgb(255, 205, 86, 0.2)',
      'rgb(201, 203, 207, 0.2)',
      'rgb(54, 162, 235, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ],
    borderWidth: 1
  }]
}});