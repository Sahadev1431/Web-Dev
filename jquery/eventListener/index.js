$("h1").addClass("bigHeading");

$("h1").text("hey");

$("button").text("don't click me ");

$(".fc").text("unique one");

$("img").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3iIiDJQW4HYJk2osK19O3RQ4Hs4MDSF8PQ&usqp=CAU");

$("a").attr("href","https://www.microsoft.com/en-in");

$("a").text("microsoft");

$("h1").click(()=>
{
    $("h1").css("color","purple",);
});

// for (let i = 0; i < document.querySelectorAll("button").length ; i++ )
// {
//     document.querySelectorAll("button")[i].addEventListener("click", ()=>
//     {
//         document.querySelector("h1").style.color = "red";
//     })
// }


//SAME THING WITH USING JQUERY

$("button").click(()=>
{
    $("h1").css("color","red");
})

$(document).keypress((event)=>
{
    let pressedKey = event.key;
    $("h1").text(pressedKey);
})

$("h1").on("mouseover", ()=>
{
    $("h1").css("color","pink");
})


// $("button").on("dblclick", ()=>
// {
//     $("h1").slideUp();
// });

$("button").on("dblclick", ()=>
{
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})

// $("a").after("<h1 class ='newone'>Hello world<h1/>");

// $(".newone").after("<button class = 'nb'>Brand new<button/>");

// $(".nb").on("click", ()=>
// {
//     $(".newone").toggle();
// })