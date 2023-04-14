var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Computer Sciences', 'Information Systems', 'Information Technology', 'Artificial Intelligence', 'Decision Support', 'General'],
        datasets: [{
            
            label: 'Number of Students',
            data: [1, 2, 3, 4, 5, 6],
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

var ctx2 = document.getElementById('bar');
new Chart(ctx2, {
    
    type: 'bar',
    data: {
        
        labels: ['Average GPA', 'Computer Sciences', 'Information Systems', 'Information Technology', 'Artificial Intelligence', 'Decision Support', 'General'],
        datasets: [{
            label: 'Average GPA',
            data: [3.2, 2.9, 3.7, 2.4, 3.2, 3.1, 3.5],
            backgroundColor: [
                '#8f9897',
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139, 1)',
                'rgba(247, 108, 108, 1)',
                'rgba(55, 71, 133, 1)'
            ],
            borderColor: [
                '#8f9897',
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
        // minBarLength: 50,
        // start: 1,
        // indexAxis: 'y',
        scales: {
            x:{
                grid:{
                    offset: true
                }
            },
            y: {
            offset: true
            }
      }
    }
  });