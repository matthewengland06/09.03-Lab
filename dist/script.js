function myLineUp(event){
    event.preventDefault()
    let statusValue = document.querySelector('input[name="status"]:checked') ? document.querySelector('input[name="status"]:checked').value : '';

    let dateValue = document.getElementById('date') ? document.getElementById('date').value : '';

    let checkedBoxes = document.querySelectorAll('input[name="players"]:checked');
    
    let selectedPlayers = [];

    for (let i = 0; i < checkedBoxes.length; i++) {
        selectedPlayers.push(checkedBoxes[i].value);
    }

    console.log("Status: " + statusValue);
    console.log("Date: " + dateValue);
    console.log("Selected Players " + selectedPlayers);

    let finalString = `Status: ${statusValue}\n`;
    finalString += `Date: ${dateValue}\n`;
    finalString += `Players: ${selectedPlayers.join(', ')}\n`;

    console.log(finalString);
    
    let htmlOutput = document.getElementById('output');
    htmlOutput.innerHTML = `
    <p>Status: ${statusValue}</p>
    <p>Date: ${dateValue}</p>
    <p>Players: ${selectedPlayers.join(', ')}</p> `;

}
document.getElementById('form').addEventListener('submit', myLineUp);


  