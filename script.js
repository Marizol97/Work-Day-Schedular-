'use strict';

// import dayjs from 'dayjs'

const today = dayjs()
const currentHour = dayjs().format('h:00A')

const currentDay = document.getElementById("currentDay")
currentDay.innerText = today.format('dddd, MMMM D')


function createContainer(time, timeValue) {
    let eventSection = document.getElementById('events-section')
  //  main body has three sections. First section on the left contains time, middle section contains description of event and right section is the save button to local sotrage.
    const htmlContainer = `
    <div class="container">
    <div id="time-box">
      <p>${time}</p>
    </div>
    <!--
   -->
    <input type="text" id="${time}-description" class="event ${timeValue}" name="event">
    <!--
    -->
    <div class="image-box" id="${time}-save">
      <input class="image" type="image" alt="storage" src="save icon.png">
    </div>
    <div class="second bar"></div>
  </div>
    `
    const timeBoxDivider = document.createElement('div')
    
    timeBoxDivider.innerHTML = htmlContainer
    
    eventSection.appendChild(timeBoxDivider)
}
// linking color by comparing current hour with where time lays in the array 
function getTimeValue(time) {
  if (times.indexOf(time) < times.indexOf(currentHour) ) {
    return 'past'
} else if (times.indexOf(time)== times.indexOf(currentHour)){
    return 'present'
} else {
  return 'future'
}
  
}

// array of times for time rows 
const times = ["12:00AM",  "1:00AM", "2:00AM", "3:00AM", "4:00AM", "5:00AM", "6:00AM", "7:00AM", "8:00AM", '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM']
// ilteration starting from 0 row to 9th row and repeats by 1 each time object is read
for (let i = 9; i < 18; i++) {  
  // variable time stores time iteration 
    let time = times[i]

    let timeValue = getTimeValue(time)
    // function create container is being called 
    createContainer(time, timeValue)
  //  savedAppointment stores events that are saved to local storage 
    const savedAppointment = localStorage.getItem(time)
    // if event is not made 
    if (savedAppointment != null) {
      // update to local storage
        document.getElementById(`${time}-description`).value = savedAppointment
    }
    // variable saveButton stores element id for image div
    const saveButton = document.getElementById(`${time}-save`)
    // button created for image
    saveButton.addEventListener('click', function () {
        // variable inputText stores element recieved from input id 
        let inputText = document.getElementById(`${time}-description`).value
        // input given for even section is saved to local storage by receiveing name and inputText parameters  
        localStorage.setItem(time, inputText);
        // when an event is saved and alert will pop up
        alert(`Your ${time} appointment has been saved!
        
        ${inputText}
        `)

    })
    // eventSection.innerHTML = createContainer()
}

