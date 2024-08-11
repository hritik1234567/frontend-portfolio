document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded");
    // You can add any interactive functionality here
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Create a FormData object from the form
        const formData = new FormData(form);
        
        // Convert FormData to a plain object
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Convert the object to JSON
        const jsonData = JSON.stringify(formObject);

        try {
            // Send the JSON data using fetch API
            const response = await fetch('https://portfolio-backend-2nw4.onrender.com/api/form/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify that you're sending JSON
                },
                body: jsonData 
            });

            // Check if the request was successful
            if (response.ok) {
                const result = await response.json();
                alert('Message sent successfully!');
                // Optionally, clear the form
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
});


/*const url = new URL(
    'https://control.msg91.com/api/v5/email/send'
  );

  let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "authkey": "{YOUR_MSG91_AUTHKEY}"
  };

  let body = {
  "recipients": [
    {
      "to": [
        {
          "email": "ritikraheja82@gmail.com",
          "name": "Hritik Raheja"
        }
      ]
    }
  ],
  "from": {
    "email": "no-reply@{YOUR_REGISTERED_DOMAIN}"
  },
  "domain": "{YOUR_REGISTERED_DOMAIN}",
  "template_id": "global_otp"
}

  fetch(url, {
      method: 'POST',
      headers: headers,
      body:  JSON.stringify(body)
  })
  .then(response => response.json())
  .then(json => console.log(json));*/
