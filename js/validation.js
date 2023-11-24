const formContact = document.getElementById("formContact");

function ValidationContact(e) {

    e.preventDefault()
  
	let datosContact = new FormData(formContact);

	peticionContact = {
		method:'POST',
		body:datosContact,
	}

	fetch('./correo.php', peticionContact)
	.then(respuesta => respuesta.json)
	.then(respuesta =>{
		location.replace('./gracias.html');
	}).catch(error => console.log('error' , error));
	
 }  


formContact.addEventListener("submit", ValidationContact)
