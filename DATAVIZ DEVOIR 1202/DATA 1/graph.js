function BarGraph(canvasid, title, labels, values){
    const ctx   = document.getElementById(canvasid).getContext('2d');

    const chart = new Chart(ctx, {
        type: 'bar',
        data :{
            labels : labels,
            datasets: [{
                label: title,
                data: values,
                backgroundColor: ['#1aff66','#00ff55','#00e64d','#00cc44','#00b33c','#009933','#00802b','#006622','#004d1a']
            }]
        },
        options: {
            responsive: true
        }
    });
}

function BarGraph2(canvasid, title, labels, values){
    const ctx   = document.getElementById(canvasid).getContext('2d');

    const chart = new Chart(ctx, {
        type: 'radar',
        data :{
            labels : labels,
            datasets: [{
                label: title,
                data: values,
                backgroundColor: ['#ff8080',],
                
            }]
        },
        options: {
            responsive: true
        }
    });
}