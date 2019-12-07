//document.querySelector("h1");
$("h1");

//document.querySelectorAll("button");
$("button");

//Ejemplo: imprimir en consola el color de h1
console.log($("h1").css("color"));

//Agregar la clase big-title al elemento h1
$("h1").addClass("big-title");

//Agregar multiples clases al mismo elemento
//$("h1").addClass("big-title margin-50");

//Quitar la clase
//$("h1").removeClass("big-title");

//Saber si un elemento tiene determinada clase
//$("h1").hasClass("margin-50");

/* Manipulando texto con jQuery*/
$("h1").text("Baiiii");

//Permite agregar estilos dentro del texto
$("button").html("<strong>LOL</strong>");

/* Manipulando Atributos con jQuery*/
console.log($("img").attr("src"));
$("a").attr("href", "https://yahoo.com");

//Saber que clases contiene h1
$("h1").attr("class");

/* Agregar eventos con jQuery*/
$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").click(function(){
    $("h1").css("color", "blue");
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

//Otra manera de agregar eventos
$("h1").on("mouseover",function(){
  $("h1").css("color", "black");
});

/* Agregar y eliminar elementos con jQuery*/
$("h1").before("<button>Before button</button>");
$("h1").after("<button>After button</button>");
//$("button").remove();

/* Animaciones con jQuery*/

$("button").on("click",function() {
 $("h1").hide();
});

//$("h1").show();

//El elemento aparece y desaparece con toggle, es como un switch
$("button").on("click",function() {
    $("h1").toggle();
   });

   //Otros ejemplos: fadeOut(), fadeIn(), fadeToggle(), slideUp, slideDown

   //La animación solo puede ser con valores numéricos
$("button").on("click", function() {
    $("h1").animate({opacity: 0.5});
});