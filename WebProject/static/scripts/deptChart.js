// Load students statistics from database
function loadStatistics() {
    // create the request
    myRequest = new XMLHttpRequest();
    // when response is ready
    myRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // get the response and parse it
            data = JSON.parse(this.responseText);
            // create the charts
            // pieChart
            var ctx = document.getElementById('doughnut').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Computer Sciences', 'Information Systems', 'Information Technology', 'Artificial Intelligence', 'Decision Support', 'General'],
                    datasets: [{

                        label: 'Number of Students',
                        data: [data['countCS'], data['countIS'], data['countIT'], data['countAI'], data['countDS'], data['countGeneral']],
                        backgroundColor: [
                            'rgba(41, 155, 99, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(120, 46, 139, 1)',
                            'rgba(247, 108, 108, 1)',
                            'rgba(55, 71, 133, 1)'
                        ],
                        borderColor: [
                            'rgba(41, 155, 99, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(120, 46, 139, 1)',
                            'rgba(247, 108, 108, 1)',
                            'rgba(55, 71, 133, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true
                }
            });
            
            // barChart
            var ctx2 = document.getElementById('bar');
            new Chart(ctx2, {

                type: 'bar',
                data: {

                    labels:  ['Computer Sciences', 'Information Systems', 'Information Technology', 'Artificial Intelligence', 'Decision Support', 'General'],
                    datasets: [{
                        label: 'Average GPA',
                        data: [data['CS'], data['IS'], data['IT'], data['AI'], data['DS'], data['General']],
                        backgroundColor: [
                            'rgba(41, 155, 99, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(120, 46, 139, 1)',
                            'rgba(247, 108, 108, 1)',
                            'rgba(55, 71, 133, 1)'
                        ],
                        borderColor: [
                            'rgba(41, 155, 99, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(120, 46, 139, 1)',
                            'rgba(247, 108, 108, 1)',
                            'rgba(55, 71, 133, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            grid: {
                                offset: true
                            }
                        },
                        y: {
                            offset: true
                        }
                    }
                }
            });
            // avg gpa calculation
            avgGPA = (data['CS'] + data['IS'] + data['IT'] + data['AI'] + data['DS'] + data['General']) / 6;
            document.getElementsByClassName('number')[3].innerHTML = avgGPA.toFixed(2);
        }
    }
    myRequest.open("GET", "/getStatistics", true);
    myRequest.send();
}

loadStatistics();
