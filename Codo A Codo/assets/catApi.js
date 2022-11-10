const URL = "https://api.thecatapi.com/v1/images/search";

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.getElementById("imgApi");
        img.src = data[0].url;
    });
    
