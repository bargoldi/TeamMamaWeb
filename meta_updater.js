// Function to dynamically set title and meta tags based on URL
function updateTitleAndMetaTags() {
    const url = window.location.href;
    let pageTitle = 'Team Mama';
    let pageDescription = 'המקום בו תוכלי למצוא בעלות מקצוע, טיפים, הנחות ועוד הרבה לך ולבייבי שלך.';
    
    // Check for URL fragment (hash-based routing)
    if (url.includes('#/posts/')) {
      pageTitle = 'מאמר מקצועי';
      pageDescription = 'העמוד הזה מכיל מאמר מקצועי';
    }
    // Add other URL patterns as needed
    
    // Update the title
    document.title = pageTitle;
  
    // Update meta tags dynamically
    document.querySelector('meta[property="og:title"]').setAttribute('content', pageTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content', pageDescription);
  }
  
  // Call the function when the page loads
  window.onload = updateTitleAndMetaTags;
  