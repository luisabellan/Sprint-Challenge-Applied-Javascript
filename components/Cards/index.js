// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then((res) => {


        // this probably returns a 200 status code
        console.log(res);

        /*    const topicList = res.data.topics
           topicList.forEach(topic => {
               const newTopicTab = TopicTab(topic)
               topics.appendChild(newTopicTab)

               
           }) */

        const articles = res.data.articles
        const javascriptArticles = articles.javascript
        const bootstrapArticles = articles.bootstrap
        const technologyArticles = articles.technology
        const jqueryArticles = articles.jquery
        const nodeArticles = articles.node
        //console.log(javascript)

        javascriptArticles.forEach(article => {
            const newArticleCard = ArticleCard(article.headline, article.authorPhoto, article.authorName)
            cards.appendChild(newArticleCard)

        });

        bootstrapArticles.forEach(article => {
            const newArticleCard = ArticleCard(article.headline, article.authorPhoto, article.authorName)
            cards.appendChild(newArticleCard)

        });

        technologyArticles.forEach(article => {
            const newArticleCard = ArticleCard(article.headline, article.authorPhoto, article.authorName)
            cards.appendChild(newArticleCard)

        });

        jqueryArticles.forEach(article => {
            const newArticleCard = ArticleCard(article.headline, article.authorPhoto, article.authorName)
            cards.appendChild(newArticleCard)

        });
        
        nodeArticles.forEach(article => {
            const newArticleCard = ArticleCard(article.headline, article.authorPhoto, article.authorName)
            cards.appendChild(newArticleCard)

        });


    })
    .catch((err) => {
        // this probably returns either a 400 or 500 status code
        console.log('You hit an error: ', err);
    });





const cards = document.querySelector('.cards-container')

function ArticleCard(articleHeadline, authorImageUrl, authorName) {

    // create elements

    const newArticleCard = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imageContainerDiv = document.createElement('div')
    const authorImg = document.createElement('img')
    const byAuthor = document.createElement('span')

    // style elements

    newArticleCard.classList.add('card')
    headlineDiv.classList.add('headline')
    headlineDiv.textContent = articleHeadline
    authorDiv.classList.add('author')
    imageContainerDiv.classList.add('img-container')
    authorImg.src = authorImageUrl
    byAuthor.textContent = `By ${authorName}`

    // structure component

    newArticleCard.appendChild(headlineDiv)
    newArticleCard.appendChild(authorDiv)
    authorDiv.appendChild(imageContainerDiv)
    authorDiv.appendChild(byAuthor)
    imageContainerDiv.appendChild(authorImg)




    return newArticleCard

}