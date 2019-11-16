
/*Iniciar Sesi�n*/
select * 
from usuarios
where contrasena = "1234"

/*Traer toda la info general de la pelicula*/
select maestroPeliculas.*, generos.genero
from generos inner join maestroPeliculas
on maestroPeliculas.idGenero = generos.idGenero and maestroPeliculas.idPelicula = 1 /*Esto es un ejemplo de prueba. Se cambian esos valores por las valores que le de la p�gina web*/

/*Traer funciones segun la fecha*/
select maestroFunciones.horario, maestroFunciones.idFormato, formato.formato
from formato inner join maestroFunciones
on maestroFunciones.idFormato = formato.idFormato and maestroFunciones.dia = '2019-11-20' /*Esto es un ejemplo de prueba. Se cambian esos valores por las valores que le de la p�gina web*/

/*Traer todas las butacas vendidas para esa funci�n*/
select butacasVendidas.idButacas, butacasVendidas.idFuncion
from butacasVendidas inner join maestroFunciones
on maestroFunciones.idFuncion = butacasVendidas.idFuncion and maestroFunciones.idFuncion=1 /*Esto es un ejemplo de prueba. Se cambian esos valores por las valores que le de la p�gina web*/

/*Confirmar, comprar y reservar butacas*/
insert into Tickets
			(hora, fecha, subTotal, costoTotal, idUsuario)
values		('13:54:06', '2019-1-1', 500, 500, 3) /*Esto es un ejemplo de prueba. Se cambian esos valores por las valores que le de la p�gina web*/

insert into butacasVendidas
			(idTicket,idButacas , idFuncion) 
values		(1, 5, 5) /*Esto es un ejemplo de prueba. Se cambian esos valores por las valores que le de la p�gina web*/
