let addToy = false;
const toyCollection = document.getElementById("toy-collection")

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  
  /*
  <div class="card">
    <h2>Woody</h2>
    <img src="[toy_image_url]" class="toy-avatar" />
    <p>4 Likes</p>
    <button class="like-btn" id="[toy_id]">Like ❤️</button>
  </div>
  */
  //function to create one singular card
  const createCard = (toy) => {
     //step 1
        //create neede nodes
        let toyCard = document.createElement('div')
        let toyName = document.createElement('h2')
        let toyImage = document.createElement('img')
        let toyLikes = document.createElement('p')
        let toyButton = document.createElement('button')

      //step 2
        toyCard.className = "card"
        toyName.textContent = toy.name
        toyImage.src = toy.image
        toyImage.className = "toy-avatar"
        
        //if
          // if(toy.likes === 1) {
          //   toyLikes.textContent = `${toy.likes} likes`
          // } else {
          //   toyLikes.textContent = `${toy.likes} likes`
          // }
        
        toyLikes.textContent = `${toy.likes} likes`
        toyButton.textContent = "Like"
        toyButton.className = "like-btn"
        toyButton.id = toy.id

      //step 3
        //append nodes appropriately
        toyCard.appendChild(toyName)
        toyCard.appendChild(toyImage)
        toyCard.appendChild(toyLikes)
        toyCard.appendChild(toyButton)
        
        //append card to toyCollection
        toyCollection.append(toyCard)
      }
  //function to fetch url for toys (useful in case we also had/movies or stores, etc...)
      const fetchToys = () => {
        return fetch('http://localhost:3000/toys') //fetch result gets returned to next .then
        .then(res => {return res.json()})
        //.then(data => data) //사실 필요는 없다. 라인 71에서 핸들 가능
      }
      //fetchToys returns a promise, so we still need an additional .then
      fetchToys()
      .then(toys => { //equivalent to .then(date => data)
         
        //for elements
         //1. create them
         //2. write needed date (textContent, src, className, id)
         //3. appen them to something
 
  
  
     
     //create card for cureent toy use .forEach(read only) 
     //(not .map because I don't want change anything)
    //console.log(toys)
    toys.forEach((curToy) => {
      createCard(curToy)
     })
     })
      // fetch('http://localhost:3000/toys') //fetch result gets returned to next .then
      // .then(res => {return res.json()}) //res.json() result gets return to next .then
    
    });
