const api_key = "<mi_api_key>";
const url = `https://newsapi.org/v2/everything?q=technology&language=es&source=google-news&sortBy=publishedAt&apiKey=${api_key}`

async function getNews() {

    const response = await fetch(url)
    
    if (response.status == 200){
        const news = await response.json() // Deserializo la respuesta     
        
        // Recojo las 10 noticias más actuales
        for(var i=0; i<10; i++){
            appendNew(news.articles[i])
        }
    }
    else{
        console.log("HTTP request failed")
    }
    
}

// Añado la noticia al html
function appendNew(article){
    var div = document.createElement('div')
    var text = document.createElement('p')
    var source = document.createElement('p')
    var img = document.createElement("img")

    div.className = "new"
    text.className = "text"
    source.className = "source"
    img.className = "img"

    text.innerHTML = article.title
    source.innerHTML = `${article.source.name} | ${article.author}`
    img.src = article.urlToImage
    
    // Evento: redirección a la página del titular
    text.onclick = function() {
        window.location.href = article.url;
    };

    div.appendChild(img)
    text.append(source)
    div.appendChild(text)

    document.body.appendChild(div)
}

getNews()