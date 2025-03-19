import "./special.css"
import peep1 from "./peep1.avif";
import peep2 from "./peep2.avif";
import peep3 from "./peep3.avif";
import peep4 from "./peep4.avif";
import peep5 from "./peep5.avif";
import peep6 from "./peep6.avif";


function Special() {
    return(
        <div>         
        <div id="momentsS">
        <h1 id="special"> Special Moments at Salt'n Pepper</h1>
        <div class="imagepart">
          <img class="imgS" alt="people in cafe" src={peep1}></img>
          <img class="imgS" alt="people in cafe"  src={peep2}></img>
          <img class="imgS"alt="people in cafe"  src={peep3}></img>
          <img class="imgS" alt="people in cafe" src={peep4}></img>
          <img class="imgS" alt="people in cafe" src={peep5}></img>
          <img class="imgS" alt="people in cafe" src={peep6}></img>
        </div>
      </div></div>
    )
    
};
export default Special;