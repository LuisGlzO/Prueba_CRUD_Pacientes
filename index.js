function utf8_decode (str_data) {
  //console.log("HOLA!!!!")
  // http://jsphp.co/jsphp/fn/view/utf8_decode
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +      input by: Aman Gupta
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Norman "zEh" Fuchs
  // +   bugfixed by: hitwork
  // +   bugfixed by: Onno Marsman
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // *     example 1: utf8_decode('Kevin van Zonneveld');
  // *     returns 1: 'Kevin van Zonneveld'
  var tmp_arr = [],
      i = 0,
      ac = 0,
      c1 = 0,
      c2 = 0,
      c3 = 0;

  str_data += '';

  while (i < str_data.length) {
      c1 = str_data.charCodeAt(i);
      if (c1 < 128) {
          tmp_arr[ac++] = String.fromCharCode(c1);
          i++;
      } else if (c1 > 191 && c1 < 224) {
          c2 = str_data.charCodeAt(i + 1);
          tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
          i += 2;
      } else {
          c2 = str_data.charCodeAt(i + 1);
          c3 = str_data.charCodeAt(i + 2);
          tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
      }
  }
  //console.log(tmp_arr);
  return tmp_arr.join('');
}

var id_pacienteD;
var cont = 1;
const boton_anterior = document.getElementById("anterior");
const boton_siguiente = document.getElementById("siguiente");
const boton_agregar = document.getElementById("agregar");
const boton_editar = document.getElementById("editar");

function limpiar(){
  let tablePaciente = document.getElementById('tabla-paciente');
  let tablePacienteTbody  = tablePaciente.getElementsByTagName('tbody')[0];

  tablePacienteTbody.innerHTML = "";
}

function saludar(){
  console.log("HELLO WORLD")
}

function editarPaciente(
  id,
  nombre_completo,
  edad,
  sexo,
  fecha_de_nacimiento,
  ciudad_de_origen,
  fecha_de_inscripcion,
  hospital_de_origen,
  nombre_del_tutor,
  telefono_del_tutor
  ){
  
  let tableUpdate = document.getElementById('crearTabla');

  let tableUpdateTbody  = tableUpdate.getElementsByTagName('tbody')[0];
  
  console.log(id);
  console.log(nombre_completo);
  console.log(edad);
  console.log(sexo);
  console.log(fecha_de_nacimiento);
  console.log(ciudad_de_origen);
  console.log(fecha_de_inscripcion);
  console.log(hospital_de_origen);
  console.log(nombre_del_tutor);
  console.log(telefono_del_tutor);
  
  id_pacienteD = id;
 
  tableUpdate.innerHTML += `
  <h2>Seccion Editar</h2>
    

  <table id = "tdatos">
        <tbody>

        <tr>
  <tr>
            <td>nombre_completo</td><td><input type="text" name="nombre_completo_tF" id="nombre_completo_tt" value="${nombre_completo}"></td>
        </tr>
        <tr>
            <td>edad</td><td><input type="text" name="edad_tF" id="edad_tt" value="${edad}"></td>
        </tr>    
        <tr>
            <td>sexo</td><td><input type="text" name="sexo_tF" id="sexo_tt" value="${sexo}"></td>
        </tr>
        <tr>
            <td>fecha_de_nacimiento</td><td><input type="text" name="fecha_de_nacimiento_tF" id="fecha_de_nacimiento_tt" value="${fecha_de_nacimiento}"></td>
        </tr>
        <tr>
            <td>ciudad_de_origen</td><td><input type="text" name="ciudad_de_origentF" id="ciudad_de_origen_tt" value="${ciudad_de_origen}"></td>
        </tr>
        <tr>
            <td>fecha_de_inscripcion</td><td><input type="text" name="fecha_de_inscripcion_tF" id="fecha_de_inscripcion_tt" value="${fecha_de_inscripcion}"></td>
        </tr>
        <tr>
            <td>hospital_de_origen</td><td><input type="text" name="hospital_de_origen_tF" id="hospital_de_origen_tt" value="${hospital_de_origen}"></td>
        </tr>
        <tr>
            <td>nombre_del_tutor</td><td><input type="text" name="nombre_del_tutor_tF" id="nombre_del_tutor_tt" value="${nombre_del_tutor}"></td>
        </tr>
        <tr>
            <td>telefono_del_tutor</td><td><input type="text" name="telefono_del_tutor_tF" id="telefono_del_tutor_tt" value="${telefono_del_tutor}"></td>
        </tr>        
  </tr>

        </tbody>
    </table>
    
  
  `
  
}

function eliminarPaciente(pacienteidD){
  var url = "http://127.0.0.1:8000/api/1.0/pacientes/"+pacienteidD;
  console.log("hola");
  console.log("esta es la url" + url);
  console.log("adios");
  fetch(url, {
    method: 'DELETE'
  }).then(response => response.json())
  .then(data => {console.log(data);
  limpiar();
  cargarDatosPacienteV2();
  })
}

boton_agregar.addEventListener('click', () => {
    var nombre_completo = document.getElementById('nombre_completo_t').value;
    var edad = document.getElementById('edad_t').value;
    var sexo = document.getElementById('sexo_t').value;
    var fecha_de_nacimiento = document.getElementById('fecha_de_nacimiento_t').value;
    var ciudad_de_origen = document.getElementById('ciudad_de_origen_t').value;
    var fecha_de_inscripcion = document.getElementById('fecha_de_inscripcion_t').value;
    var hospital_de_origen = document.getElementById('hospital_de_origen_t').value;
    var nombre_del_tutor = document.getElementById('nombre_del_tutor_t').value;
    var telefono_del_tutor = document.getElementById('telefono_del_tutor_t').value;

    const paciente = {
      nombre_completo: nombre_completo,
      edad: edad,
      sexo: sexo,
      fecha_de_nacimiento: fecha_de_nacimiento,
      ciudad_de_origen: ciudad_de_origen,
      fecha_de_inscripcion: fecha_de_inscripcion,
      hospital_de_origen: hospital_de_origen,
      nombre_del_tutor: nombre_del_tutor,
      telefono_del_tutor: telefono_del_tutor
    }
    console.log("Mostrando Paciente");
    console.log(paciente);
    console.log("Mostrado Paciente");
    //console.log(paciente)
    //console.log(JSON.stringify(paciente))
    fetch('http://127.0.0.1:8000/api/1.0/pacientes', {
        method: 'POST',
        body: JSON.stringify(paciente),
        headers:{
            "Content-type":"application/json"
        }
    }).then(request => request.json())
    .then(jsonData => console.log(jsonData))
    
    limpiar();
    cont = 1;
    cargarDatosPacienteV2();
})


boton_editar.addEventListener('click', () => {
  var nombre_completo = document.getElementById('nombre_completo_tt').value;
  var edad = document.getElementById('edad_tt').value;
  var sexo = document.getElementById('sexo_tt').value;
  var fecha_de_nacimiento = document.getElementById('fecha_de_nacimiento_tt').value;
  var ciudad_de_origen = document.getElementById('ciudad_de_origen_tt').value;
  var fecha_de_inscripcion = document.getElementById('fecha_de_inscripcion_tt').value;
  var hospital_de_origen = document.getElementById('hospital_de_origen_tt').value;
  var nombre_del_tutor = document.getElementById('nombre_del_tutor_tt').value;
  var telefono_del_tutor = document.getElementById('telefono_del_tutor_tt').value;

  const paciente = {
    nombre_completo: nombre_completo,
    edad: edad,
    sexo: sexo,
    fecha_de_nacimiento: fecha_de_nacimiento,
    ciudad_de_origen: ciudad_de_origen,
    fecha_de_inscripcion: fecha_de_inscripcion,
    hospital_de_origen: hospital_de_origen,
    nombre_del_tutor: nombre_del_tutor,
    telefono_del_tutor: telefono_del_tutor
  }

  var url = "http://127.0.0.1:8000/api/1.0/pacientes/"+id_pacienteD;

  fetch(url, {
        method: 'PUT',
        body: JSON.stringify(paciente),
        headers:{
            "Content-type":"application/json"
        }
    }).then(request => request.json())
    .then(jsonData => console.log(jsonData))
    
    limpiar();
    cargarDatosPacienteV2();
})

boton_anterior.addEventListener('click', () =>{
  if(cont == 1){
    console.log(1);
  }
  else{
    cont = cont - 1;
  }
  limpiar();
  cargarDatosPacienteV2();
})

boton_siguiente.addEventListener('click', () =>{
  cont = cont + 1;
  limpiar();
  cargarDatosPacienteV2();
})


function cargarDatosPacienteV2(){
  //fetch('http://127.0.0.1:8000/api/1.0/pacientes/pagina?page='+cont)
  fetch('http://127.0.0.1:8000/api/1.0/pacientes')
      .then(response => response.json())
      .then(jsonData => {
        
        let tablePaciente = document.getElementById('tabla-paciente');

        let tablePacienteTbody  = tablePaciente.getElementsByTagName('tbody')[0];

        console.log(jsonData);
        console.log(Object.values(jsonData));
        
        for (const itemPaciente of jsonData) {
            
            tablePacienteTbody.innerHTML += `<tr>
              <td>${ itemPaciente.id }</td>
              <td>${ itemPaciente.nombre_completo }</td>
              <td>${ itemPaciente.edad }</td>
              <td>${ itemPaciente.sexo }</td>
              <td>${ itemPaciente.fecha_de_nacimiento }</td>
              <td>${ itemPaciente.ciudad_de_origen }</td>
              <td>${ itemPaciente.fecha_de_inscripcion }</td>
              <td>${ itemPaciente.hospital_de_origen }</td>
              <td>${ itemPaciente.nombre_del_tutor }</td>
              <td>${ itemPaciente.telefono_del_tutor }</td>
              <td id="idpaciente"> <button onclick = "editarPaciente(
                ${(itemPaciente.id)},
                '${(itemPaciente.nombre_completo)}',
                '${(itemPaciente.edad)}',
                '${(itemPaciente.sexo)}',
                '${(itemPaciente.fecha_de_nacimiento)}',
                '${(itemPaciente.ciudad_de_origen)}',
                '${(itemPaciente.fecha_de_inscripcion)}',
                '${(itemPaciente.hospital_de_origen)}',
                '${(itemPaciente.nombre_del_tutor)}',
                '${(itemPaciente.telefono_del_tutor)}'
              )"> Editar </button>
              <button type="button" onclick= "eliminarPaciente(${itemPaciente.id})"> Eliminar </button> </td>
              </tr>
              `    
          }
        
      })
}
          
cargarDatosPacienteV2();