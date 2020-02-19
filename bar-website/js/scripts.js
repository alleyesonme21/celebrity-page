$(document).ready(function() {
$("#formOne").submit(function(event) {
var age = parseInt($("#age").val());
if (age >= 30) {
  $("#output").show();
}
event.preventDefault();
});
});
