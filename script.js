document.getElementById('nameForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;

    fetch('http://localhost:3000/add-name', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Name added successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to add name');
    });
});
