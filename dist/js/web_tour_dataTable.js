//WEB TOUR
var intro = introJs();
function wt_dataTable(){
  intro.setOptions({
    steps: [
      { 
        intro: "<p class='center title-introjs grey-text text-darken-3'>AYUDA</p> A iniciado la ayuda en línea"
      },
      {
        element: '#Nuevo',
        intro: "Boton para realizar un nuevo registro"
      },
      {
        element: '.dataTables_length > label',
        intro: "Cantidad de registros a mostrar",
        position: 'button'
      },
      {
        element: '.dataTables_filter > label',
        intro: "Buscador para resultados",
        position: 'button'
      },
      {
        element: '.dataTables_wrapper',
        intro: "Tabla de registros",
        position: 'left'
      },
      {
        element: '.pagination',
        intro: "Paginación de resultados",
        position: 'left'
      }
    ]
  });
  intro.start();
}

function wt_dataTableDos(){
  intro.setOptions({
    steps: [
      { 
        intro: "<p class='center title-introjs grey-text text-darken-3'>AYUDA</p> A iniciado la ayuda en línea"
      },
      {
        element: '.dataTables_length > label',
        intro: "Buscador para resultados",
        position: 'button'
      }, 
      {
        element: '.dataTables_wrapper',
        intro: "Tabla de registros",
        position: 'left'
      },
      {
        element: '.dataTables_filter > label',
        intro: "Buscador para resultados",
        position: 'button'
      },
      {
        element: '.pagination',
        intro: "Paginación de resultados",
        position: 'left'
      }
    ]
  });
  intro.start();
}