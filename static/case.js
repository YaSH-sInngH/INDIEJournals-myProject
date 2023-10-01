document.addEventListener("DOMContentLoaded", function () {
    // Select the form and input elements
    const form = document.getElementById("news-search-form");
    const searchInput = document.getElementById("search-input");
    const newsContainer = document.querySelector(".news-container");
  
    // Function to fetch and display initial news articles
    function fetchInitialNews() {
      // Replace 'YOUR_NEWS_API_KEY' with your actual API key
      const apiKey = 'bfe79bb37d014527ad8ef9cec1fc965c';
      const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey; // Modify the query as needed
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          displayNews(data.articles); // Display initial news articles
        })
        .catch(error => {
          console.error('Error fetching news:', error);
        });
    }
  
    // Function to display news articles
    function displayNews(articles) {
      // Clear previous search results
      newsContainer.innerHTML = "";
  
      // Check if there are no articles found
      if (articles.length === 0) {
        newsContainer.innerHTML = "<p>No articles found for this search.</p>";
        return;
      }
  
      // Iterate through the articles and create elements to display them
      articles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("news-article");
  
        const titleElement = document.createElement("h2");
        titleElement.textContent = article.title;
  
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = article.description;
  
        const linkElement = document.createElement("a");
        linkElement.href = article.url;
        linkElement.target = "_blank";
        linkElement.textContent = "Read More";
  
        articleElement.appendChild(titleElement);
        articleElement.appendChild(descriptionElement);
        articleElement.appendChild(linkElement);
  
        newsContainer.appendChild(articleElement);
      });
    }
  
    // Fetch and display initial news articles when the page loads
    fetchInitialNews();
    
    // Event listener for form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
      const query = searchInput.value;
      fetchNews(query); // Fetch news based on the user's query
    });
  
    // Function to fetch news based on the query
    function fetchNews(query) {
      // Replace 'YOUR_NEWS_API_KEY' with your actual API key
      const apiKey = 'bfe79bb37d014527ad8ef9cec1fc965c';
      const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          displayNews(data.articles); // Display news articles
        })
        .catch(error => {
          console.error('Error fetching news:', error);
        });
    }
    function displayNews(articles) {
      // Clear previous search results
      newsContainer.innerHTML = "";
  
      // Check if there are no articles found
      if (articles.length === 0) {
        newsContainer.innerHTML = "<p>No articles found for this search.</p>";
        return;
      }
  
      // Iterate through the articles and create elements to display them
      articles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("news-article");
  
        const titleElement = document.createElement("h2");
        titleElement.textContent = article.title;
  
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = article.description;
  
        const imageElement = document.createElement("img"); // Create an image element
        imageElement.src = article.urlToImage; // Set the image source
        imageElement.alt = "News Image"; // Set alt text for accessibility
  
        const linkElement = document.createElement("a");
        linkElement.href = article.url;
        linkElement.target = "_blank";
        linkElement.textContent = "Read More";
  
        articleElement.appendChild(titleElement);
        articleElement.appendChild(descriptionElement);
        articleElement.appendChild(imageElement); // Append the image element
        articleElement.appendChild(linkElement);
  
        newsContainer.appendChild(articleElement);
      });
    }
  });
  














//   const apiKey = 'bfe79bb37d014527ad8ef9cec1fc965c';
//   const apiUrl = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=bfe79bb37d014527ad8ef9cec1fc965c';