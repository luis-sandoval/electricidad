function suma(a,b){
    var c = a + b;
    return c;
}

var resultado = suma(8,7);
console.log(suma(5,7));
console.log(resultado);

var arr=[];
					
					function generar()
					{
						for(i=0;i<=10;i++)
						{
						arr[i]="Nombre_"+i;
						}
						
					}
					
					function mostrar()
					{
						for(i=0;i<=10;i++)
						{
						console.log(arr[i]);
						}
						
					}
					
					function nulo()
					{
						for(i=0;i<=10;i+=2)
						{
						arr[i]=null;
						}
					}
					
					generar();
					mostrar();
					nulo();
					mostrar();