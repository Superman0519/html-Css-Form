var button = document.getElementById('Submit');


button.addEventListener('click', function(event) {
  event.preventDefault();
  if (validateForm()) {
    
    submitForm();
  } else {
    
    alert('Please fill in all fields.');
  }
});


function validateForm() {
  var input = document.getElementById('Fname').value;
  var input = document.getElementById('Lnam').value;
  var input = document.getElementById('Email').value;
  var input = document.getElementById('Pass').value;
  if (input === '') {
    return false;
  } else {
    return true;
  }
}

function submitForm() {
  document.getElementById('myForm').submit();
}
