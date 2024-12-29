// Parse query from URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('q');
document.title = `Results for "${query}"`;

// Fetch data and display results
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const results = data.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );

   const resultsDiv = document.getElementById('results');
    if (results.length > 0) {
      results.forEach(result => {
      const resultDiv = document.createElement('div');
      resultDiv.innerHTML = `<h3><a href="${result.url}">${result.title}</a></h3><p>${result.description}</p>`;
      resultsDiv.appendChild(resultDiv);
    });
  } else {
    resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
  }
});
