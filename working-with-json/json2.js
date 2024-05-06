//We will add a new user to the existing JSON file, we have created in the previous example.


const fs = require('fs');

// Step 1: Read the JSON file
fs.readFile('Json.json', 'utf8', (err, data) => {
    if (err){ console.error('Error reading file:', err);
    return;
}

    // Parse the JSON data
    let jsonData = JSON.parse(data);

    // Step 2: Add new object(s) to the data structure
    let newObject = {
        name: 'subham',
        id: '02'
    };
    jsonData.push(newObject);

    // Step 3: Write the updated data structure back to the JSON file
    fs.writeFile('Json.json', JSON.stringify(jsonData, null, 5), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Data has been added to the file.');
    });
});
