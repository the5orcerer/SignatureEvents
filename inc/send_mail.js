
function send_mail(){
    const formData = new FormData();
    formData.append('name', document.getElementById('contactName').value);
    formData.append('email', document.getElementById('contactEmail').value);
    formData.append('message', document.getElementById('contactMessage').value);

    fetch('https://theBigBrainedCat.pythonanywhere.com/submit', {
    method: 'POST',
    body: formData
    })
    .then(response => {
    if (response.ok) {
        console.log('Form submitted successfully');
    } else {
        console.error('Failed to submit form');
    }
    })
    .catch(error => {
    console.error('Error:', error);
    });
}
