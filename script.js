/**
 * Array containing the 
 */
const hours = [
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


function setHeader() {
  let currentDay = moment().format('dddd, MMMM Do')
  $('#currentDay').text(currentDay)
}

function setReminders() {
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
  }
}

setHeader()
setReminders()

$('.saveBtn').on('click', function (event) {
  event.preventDefault()
  index = $(this).siblings('.description').children('.future').attr('id')

})