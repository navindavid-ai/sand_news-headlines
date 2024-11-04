// Your GNews API Key (replace 'YOUR_GNEWS_API_KEY' with your actual key from GNews)
const apiKey = '2a740f14fe317428572639e71eac6dfd';

// Function to fetch and display news from GNews
async function fetchNews() {
    const country = document.getElementById('countrySelect').value;
    const url = `https://gnews.io/api/v4/top-headlines?country=${country}&token=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';  // Clear previous news

    if (data.articles.length === 0) {
        newsContainer.innerHTML = '<p>No news found for this country.</p>';
    }

    data.articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const headline = document.createElement('h2');
        headline.textContent = article.title;

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read more';
        link.target = '_blank';

        newsItem.appendChild(headline);
        newsItem.appendChild(link);
        newsContainer.appendChild(newsItem);
    });
}

// Add event listener to the "Get News" button
document.getElementById('fetchNews').addEventListener('click', fetchNews);
