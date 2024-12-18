document.getElementById('showFormButton').addEventListener('click', function() {
    document.getElementById('tourForm').style.display = 'block';
    this.style.display = 'none';
  });
  
  function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('tourForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    // Display the confirmation message
    confirmationMessage.style.display = 'block';
  
    // Clear the form
    form.reset();
  
    setTimeout(() => {
      confirmationMessage.style.display = 'none';
    }, 5000);
  
    return false;
  }
  