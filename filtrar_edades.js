var alumnos = [
	{
		nombre: 'pepe',
		edad: 30,
		sexo: 'masculino'
	}, 
	{
		nombre: 'juan carlos',
		edad: 20,
		sexo: 'masculino'
	}, 
	{
		nombre: 'alfredo',
		edad: 10,
		sexo: 'masculino'
	}, 
	{
		nombre: 'maria',
		edad: 56,
		sexo: 'femenino'
	}, 
	{
		nombre: 'carla',
		edad: 70,
		sexo: 'femenino'
	}, 
	{
		nombre: 'josefa',
		edad: 44,
		sexo: 'femenino'
	}
];

function filtrarAlumnos (alumnos, sexo, edad) {
	var alumnosMayores = alumnos.filter(
		function (curVal) {
			if (curVal.edad > edad && curVal.sexo === sexo) {
				return true;
			};
		});
	var alumnosNombres = alumnosMayores.map(
		function (curName){
			return curName.nombre;
		});
	return (alumnosNombres);
};

filtrarAlumnos(alumnos, 'femenino', 50);