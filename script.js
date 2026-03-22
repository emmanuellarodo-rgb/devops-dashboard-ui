async function fetchData() {
  try {
    const metrics = await fetch('http://localhost:5000/metrics');
    const metricsData = await metrics.json();

    const scale = await fetch('http://localhost:5000/scale');
    const scaleData = await scale.json();

    document.getElementById('cpu').innerText = metricsData.cpu + "%";
    document.getElementById('scale').innerText = scaleData.decision;

  } catch (error) {
    console.log(error);
  }
}
