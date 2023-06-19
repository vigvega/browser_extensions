![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

## Extensiones

En este repositorio alojo algunas extensiones de Chrome útiles para mi día a día.

Además de los ficheros habituales que se añaden en cualquier proyecto web, también es importante que en cada una de las extensiones figure un `manifest.json` con cierta información básica como nombre, descripción, versión, permisos, etc. Un ejemplo de `manifest` sería el siguiente:

    {
        "name": "My extension name",
        "description": "Basic functionalities of my extension",
        "version": "1.0",
        "manifest_version": 3,
        "permissions": ["scripting"],
        "host_permissions": ["<all_urls>"], // Webs a las que se necesita acceder
        "action": {
        "default_icon": {
            "16": "icon.png"
        },
        "default_title": "Title",
        "default_popup": "popup.html"
        }
    } 

---

### Visualización de noticias

Esta extensión me permite ver las últimas noticias de distintos periódicos sobre temas que me interesen de forma rápida y sin necesidad de acceder a cada una de sus webs.

Para ello, me he ayudado de **News API**. Con esta API REST se pueden hacer fácilmente peticiones en base a distintos criterios, como palabras clave, idioma, fecha de publicación, etc.

    https://newsapi.org/v2/everything?q=tecnología&domains=bbc.com&language=es&sortBy=publishedAt&apiKey=<mi_api_key>

De este modo, se devuelve un objeto JSON que tan solo hay que deserializar para poder trabajar con los campos deseados de cada noticia y volcarlos en el HTML.

![](/news_extension/imgs/demo.png)