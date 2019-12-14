// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then((res) => {


        // this probably returns a 200 status code
        console.log(res);

        const topicList = res.data.topics
        topicList.forEach(topic => {
            const newTopicTab = TopicTab(topic)
            topics.appendChild(newTopicTab)

            
        })

            

        /*  const dogList = res.data.message;
            dogList.forEach((dog) => {
              const newDogCard = DogCard(dog);
              entry.appendChild(newDogCard);
            }); */
    })
    .catch((err) => {
        // this probably returns either a 400 or 500 status code
        console.log('You hit an error: ', err);
    });

    const topics = document.querySelector('.topics')

function TopicTab(topic) {
    const newTopicTab = document.createElement('div')
    newTopicTab.classList.add('tab')
    newTopicTab.textContent = topic

    return newTopicTab

}