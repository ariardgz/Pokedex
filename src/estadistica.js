
const grafica = document.getElementById("myChart").getContext("2d");
const chart = new Chart(grafica, {
  type: "bar",
  data: {
    labels: ["normal", "fire", "water", "grass"],
    datasets: [{
      label: 'Num Pokemon',
      data: [10, 12, 5, 6]
    }]
  }
});