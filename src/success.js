import image from "./download.png"

function Logged(){
    return(
        <div style={{
            background:"brown"
        }}>
            <center> 
            <h1 class="headinghere"> Welcome to salt n pepper group </h1>
            <h1> Use code "SALTNPEPPER20"</h1>
            <h3> For 20% discount on your next order</h3>
            <img class="offerImage" src={image} alt="Description of the image" ></img>
            </center>
        </div>

    )
}
export default Logged;