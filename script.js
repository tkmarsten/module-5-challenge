/**
 * Array containing the hours of the schedule and the events for each hour.
 * Hours are in 24 hour format.
 */
let hours = [
  {
    hour: 9,
    event: ''
  },
  {
    hour: 10,
    event: ''
  },
  {
    hour: 11,
    event: ''
  },
  {
    hour: 12,
    event: ''
  },
  {
    hour: 13,
    event: ''
  },
  {
    hour: 14,
    event: ''
  },
  {
    hour: 15,
    event: ''
  },
  {
    hour: 16,
    event: ''
  },
  {
    hour: 17,
    event: ''
  }
]

setEvents()

/**
 * Sets the current date in the header.
 */
function setHeaderDate() {
  let currentDay = moment().format('dddd, MMMM Do')
  $('#currentDay').text(currentDay)
}

setHeaderDate()

/**
 * Creates the timeblocks for the scheduler.
 * Each timeblock includes the hour, the editable event and the save button.
 */
function createTimeblocks() {
  for (let i = 0; i < hours.length; i++) {
    let rowDiv = $('<form>')
      .attr('class', 'row')

    $('.container').append(rowDiv)

    let hourDiv = $('<div>')
      .attr('class', 'hour col-2')
      .text(hours[i].hour + ':00')
    rowDiv.append(hourDiv)

    let eventDiv = $('<div>')
      .attr('class', 'description col-9 p-0')

    let textDiv = $('<textarea>')
      .attr('id', hours[i].hour)

    let currentHour = parseInt(moment().format('HH'))
    if (hours[i].hour < currentHour) {
      textDiv.attr('class', 'past')
    } else if (hours[i].hour === currentHour) {
      textDiv.attr('class', 'present')
    } else {
      textDiv.attr('class', 'future')
    }

    eventDiv.append(textDiv)
    rowDiv.append(eventDiv)

    let buttonDiv = $('<button>')
      .attr('class', 'saveBtn col-1')

    let buttonIcon = $('<i>')
      .attr('class', 'fa fa-save fa-lg')

    buttonDiv.append(buttonIcon)
    rowDiv.append(buttonDiv)

    textDiv.val(hours[i].event)
  }
}

createTimeblocks()

/**
 * Sets the hours array to the array saved in local storage.
 */
function setEvents() {
  if (hours) {
    hours = JSON.parse(localStorage.getItem('myHours'))
  }
}

/**
 * Listener for the save button for each row.
 * Saves the event to local storage on click.
 */
$('.saveBtn').on('click', function (event) {
  event.preventDefault()
  index = $(this).siblings('.description').children('.future').attr('id')
  for (let i = 0; i < hours.length; i++) {
    if (hours[i].hour === parseInt(index)) {
      hours[i].event = $(this).siblings('.description').children('.future').val()
    }
  }
  localStorage.setItem('myHours', JSON.stringify(hours))
})