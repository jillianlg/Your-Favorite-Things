$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const dessert = $("input#dessert").val();
    const color = $("input#color").val();
    const season = $("input#season").val();

    const myArray = [name, dessert, color, season];

    let newArray = [myArray[0], myArray[2]];

    console.log(newArray);

     $(".output").append(+ newArray[0] + "'s favorite" + myAray + "is " + newArray[1] + ".");
  })
})