$(document).ready(function(){
	$("#btnfutbolistas").click(function() {
		console.log('Iniciamos la llamada');
		$.ajax({
			url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php',
			type: 'GET',
			dataType: 'json',
			
		})
		.done(function(futbolistas) {
			// esconder el boton
			$("#btnfutbolistas").hide();
			// mostrar los datos en una tabla
			var datosTabla = "";
			$.each(futbolistas, function(index, futbolista) {
			
				datosTabla = datosTabla + "<tr><td>" + futbolista.nombre +"</td><td>"+
			futbolista.apellido+"</td><td>"+ 
			futbolista.equipo +"</td></tr>";


			});
			
			$("#tblfutbolistas tbody").html(datosTabla);
			$("#tblfutbolistas").show();
			console.log("hecho");
			




		})
		.fail(function() {
			console.log("error");
		});
		
	});
});