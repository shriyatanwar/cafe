import "./home.css" 

import Diamond from './image1.jpg'


function Home(){
    return(
        <div class="body"> 
        
        <img class="image1" src={Diamond}></img>

      <div class="description">
        <div class="text">  We believe in the simple pleasures of life.
      Good food, fresh ingredients, and awesome vibes.<br></br>
      Welcome to Salt'n Pepper, make yourself at home.
      </div>
      </div>

      </div>
    
      

        
    )
}

export default Home;