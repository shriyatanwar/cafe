import "./hours.css"

function Hour(){
    return(
        <div class="body"> 
            <h1 class="visitUs">Visit Us</h1>
            <h2 class="location">Our Locations in Bangalore</h2>

    <div class="branches-container">
        <div class="branch">
            <h4 class="branchName">Salt'n Pepper - Indiranagar</h4>
            <p><strong>Address:</strong> 123, 5th Main Road, Indiranagar, Bangalore</p>
            <p><strong>Opening Hours:</strong> 11:00 AM - 11:00 PM</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> <a href="mailto:indiranagar@saltnpepper.com">indiranagar@saltnpepper.com</a></p>
        </div>
        <div class="branch">
            <h4 class="branchName">Salt'n Pepper - Whitefield</h4>
            <p><strong>Address:</strong> 456, ITPL Main Road, Whitefield, Bangalore</p>
            <p><strong>Opening Hours:</strong> 12:00 PM - 11:30 PM</p>
            <p><strong>Phone:</strong> +91 87654 32109</p>
            <p><strong>Email:</strong> <a href="mailto:whitefield@saltnpepper.com">whitefield@saltnpepper.com</a></p>
        </div>
    </div>

        </div>
    )
}
export default Hour;