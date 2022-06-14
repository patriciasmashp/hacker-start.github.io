function convertTimestamp(timestamp) {
    var d = new Date(timestamp), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
        hh = d.getHours(),



    // ie: 2014-03-24, 3:00 PM
    time = dd + '.' + mm + '.' + yyyy ;
    return time;
}

let tableBody = document.getElementById('events-content')

fetch('http://blog/api/getAllEvents.php')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        data.forEach(e => {
            row = document.createElement('tr')
            var template = `
            <th scope="row"><a href="${e.ctftime_url}">${e.title}</a></th>
            <td>${convertTimestamp(e.start)}</td>
            <td>${e.format}</td>
            <td>${e.participants }</td>
            `
            row.innerHTML = template
            tableBody.appendChild(row)
            
        });
    });