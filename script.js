//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve saved preferences from cookies if available
    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");
  
    // Set initial values for font size and font color
    if (savedFontSize) {
      document.documentElement.style.setProperty("--fontsize", savedFontSize);
      document.getElementById("fontsize").value = savedFontSize.replace("px", "");
    }
    if (savedFontColor) {
      document.documentElement.style.setProperty("--fontcolor", savedFontColor);
      document.getElementById("fontcolor").value = savedFontColor;
    }
  
    // Add event listener for form submission
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      // Get values from form inputs
      const fontSize = document.getElementById("fontsize").value + "px";
      const fontColor = document.getElementById("fontcolor").value;
  
      // Set font size and font color as CSS variables
      document.documentElement.style.setProperty("--fontsize", fontSize);
      document.documentElement.style.setProperty("--fontcolor", fontColor);
  
      // Save preferences as cookies
      setCookie("fontsize", fontSize, 30); // Cookie expires in 30 days
      setCookie("fontcolor", fontColor, 30); // Cookie expires in 30 days
    });
  });
  
  // Function to set a cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
  }
  
  // Function to get a cookie by name
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }
  