$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const dessert = $("input#dessert").val();
    const color = $("input#color").val();
    const season = $("input#season").val();

    const myArray = [name, dessert, color, season];

    let newArray = [myArray[0], myArray[1], myArray[2], myArray[3]];

    console.log(newArray);

    $("#favorite").append(newArray[0] + "'s favorite things are:" + "<li>" + newArray[1] + "</li>" + "<li>" + newArray[2] + "</li>" + "<li>" +  newArray[3] + "</li>");

  })
})