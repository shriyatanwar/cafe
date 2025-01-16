import "./home.css" 

import Diamond from './image1.jpg'


function Home(){
    return(
        <div class="body"> 
            <div>
        <img class="image1" src={Diamond}></img>
      </div>
      <h2 class="description"> We believe in the simple pleasures of life.
      Good food, fresh ingredients, and awesome vibes.<br></br>
      Welcome to Salt'n Pepper, make yourself at home.</h2>
      
        </div>

        
    )
}

export default Home;