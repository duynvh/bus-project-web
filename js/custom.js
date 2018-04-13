function setDateForDateTimeTextbox() {
	var d = new Date();
	console.log(d);
	var date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
	$('#date-textbox').val(date);
}

function updatingInfo() {
	alert("Trang này đang được sửa chữa");
}

$( document ).ready(function() {
    $('.datepicker').datepicker({
	    format: 'dd/mm/yyyy',
	    startDate: '-3d'
	});

	setDateForDateTimeTextbox();
});