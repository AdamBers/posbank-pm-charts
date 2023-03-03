

const data = [[1, 3], [3, 3], [10, 10], [5, 5]]

backgroundColor1 = [
    '#E40038',
    '#D9D9D9'
]
backgroundColor2 = [
    '#001C3D',
    '#D9D9D9'
]
backgroundColor3 = [
    '#8282FF',
    '#D9D9D9'
]
backgroundColor4 = [
    '#EBEDEF',
    '#D9D9D9'
]


// ////////////////////////////HTML LEgend Plugin

const getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer.querySelector('ul');

    if (!listContainer) {
        listContainer = document.createElement('ul');
        listContainer.style.display = 'flex';
        listContainer.style.flexDirection = 'column';
        listContainer.style.margin = 0;
        listContainer.style.padding = 0;
        listContainer.style.marginBottom = "48px";
        legendContainer.appendChild(listContainer);
    }

    return listContainer;
};

const htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);

        // Remove old legend items
        while (ul.firstChild) {
            ul.firstChild.remove();
        }

        // Reuse the built-in legendItems generator
        const items = chart.options.plugins.legend.labels.generateLabels(chart);

        items.forEach(item => {
            const li = document.createElement('li');
            li.style.alignItems = 'center';
            li.style.cursor = 'pointer';
            li.style.display = 'flex';
            li.style.flexDirection = 'row';
            li.style.padding = "14px 24px"

            // Color box
            const boxSpan = document.createElement('span');
            boxSpan.style.background = item.fillStyle;
            boxSpan.style.borderColor = item.strokeStyle;
            boxSpan.style.borderWidth = item.lineWidth + 'px';
            boxSpan.style.borderRadius = "50%";
            boxSpan.style.display = 'inline-block';
            boxSpan.style.height = '20px';
            boxSpan.style.marginRight = '10px';
            boxSpan.style.width = '20px';

            // Text
            const textContainer = document.createElement('p');
            textContainer.style.color = item.fontColor;
            textContainer.style.margin = 0;
            textContainer.style.padding = 0;
            textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);

            const liContainer = document.createElement('div');
            liContainer.style.display = "flex"
            liContainer.style.flexDirection = "row"
            liContainer.style.justifyContent = "space-between"
            liContainer.style.border = "1.5px solid #EBEDEF"
            liContainer.style.background = "#fff"
            liContainer.style.marginBottom = "8px"
            liContainer.style.borderRadius = "12px"
            liContainer.style.cursor = 'pointer';
            liContainer.style.boxShadow = "0px 89px 36px rgba(17, 50, 74, 0.01), 0px 50px 30px rgba(17, 50, 74, 0.02), 0px 22px 22px rgba(17, 50, 74, 0.03), 0px 6px 12px rgba(17, 50, 74, 0.04), 0px 0px 0px rgba(17, 50, 74, 0.04)";

            // liContainer.style.boxShadow = 

            const blockRight = document.createElement('div');
            ul.appendChild(liContainer);

            console.log(items)
            // console.log(data[0][0])


            blockRight.innerHTML = data[item.index][0]
            blockRight.style.display = 'flex'
            blockRight.style.alignItems = 'center'
            blockRight.style.padding = '14px 24px'
            blockRight.style.color = '#264653'


            li.appendChild(boxSpan);
            li.appendChild(textContainer);
            liContainer.appendChild(li);
            liContainer.appendChild(blockRight);
            liContainer.onclick = () => {
                const { type } = chart.config;
                if (type === 'pie' || type === 'doughnut') {
                    // Pie and doughnut charts only have a single dataset and visibility is per item
                    chart.toggleDataVisibility(item.index);
                } else {
                    chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                }
                chart.update();
            };
        });
    }
};





//////////////////////////////////////////////// Chart-1
const ctx1 = document.getElementById('chart-1');

new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ["Оценка 1-2"],
        datasets: [{
            data: data[0],
            backgroundColor: backgroundColor1
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-1',
            },
            legend: {
                display: false,
            }
        }
    },
    plugins: [htmlLegendPlugin]
});


////////////////////////////////////////////// Chart-2
const ctx2 = document.getElementById('chart-2');


new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ["Оценка 3-6"],
        datasets: [{
            data: data[1],
            backgroundColor: backgroundColor2
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-2',
            },
            legend: {
                display: false,
            }
        }
    },
    plugins: [htmlLegendPlugin]
});


////////////////////////////////////////////// Chart-2
const ctx3 = document.getElementById('chart-3');


new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ["Оценка 7-8"],
        datasets: [{
            data: data[2],
            backgroundColor: backgroundColor3
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-3',
            },
            legend: {
                display: false,
            }
        }
    },
    plugins: [htmlLegendPlugin]
});



////////////////////////////////////////////// Chart-2
const ctx4 = document.getElementById('chart-4');


new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ["Оценка 7-8"],
        datasets: [{
            data: data[3],
            backgroundColor: backgroundColor4
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-4',
            },
            legend: {
                display: false,
            }
        }
    },
    plugins: [htmlLegendPlugin]
});









////////////////////////////////////////////// Chart-7
const ctx7 = document.getElementById('chart-7');
data7 = [3, 4, 5, 7, 9, 10, 8, 7, 4, 3, 2, 1]

new Chart(ctx7, {
    type: 'line',
    data: {
        labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек',],
        datasets: [{
            data: data7,
            borderColor: "#EE293D",
            cubicInterpolationMode: 'monotone',
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});



////////////////////////////////////////////// Chart-7
const ctx8 = document.getElementById('chart-8');
data8 = {
    labels: ['Всего', 'Закрыто', 'В работе', 'Новый', 'Просрочен'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [3, 1, 5, 7, 9],
            backgroundColor: ["#001C3D", "#D9D9D9", "#8282FF", "#E40038", "#CCD2D8"],
        }
    ]
}
new Chart(ctx8, {
    type: 'bar',
    data: data8,
    options: {
        indexAxis: 'y',
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
    }
});