async function getNews() {
  const apiKey = "15c802ae3a7c446bba1473974e701e81"; // Replace with your NewsAPI key
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const container = document.getElementById("news-container");
    container.innerHTML = "";

    data.articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description || "No description available."}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    document.getElementById("news-container").innerHTML = "Error fetching news!";
  }
}
