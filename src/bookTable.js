import { useState } from "react";
import "./bookTable.css";
import photo from "./private.jpg";
import together from "./getTogether.jpg";
import office from "./office.jpg"; 
import { useAuth } from "./firebase";

function BookTable() {
    const user = useAuth();
    const today = new Date().toISOString().split("T")[0];
    const [showForm, setShowForm] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const[loginFirstPopUp, setloginFirstPopUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        guests: "",
        date: "",
        time: "",
        message: ""
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form validation
    const validateForm = () => {
        let errorMessages = "";
        if (!formData.name || !formData.email || !formData.phone||!formData.guests || !formData.date || !formData.time) errorMessages = "Please enter correct details for successful booking.Thank You"
        return errorMessages;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setloginFirstPopUp(true);
            return;
        }
        
        const error = validateForm();

        if (error) {
            setErrorMessage(error); // Combine errors
            setShowErrorPopup(true); // Show error popup
            return;
        } else {
            setShowForm(false);
            setShowSuccessPopup(true); // Show success popup
            handleRefresh(); // Clear form after submission
        }
    };

    // Handle form refresh (reset all fields)
    const handleRefresh = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            guests: "",
            date: "",
            time: "",
            message: ""
        });
    };

    return (
        <div className="book__table">
            {/* Booking Sections */}
            <div className="book__section">
                <h1>Romantic Private Dinner</h1>
                <p>Experience an unforgettable evening with your loved one in an intimate, candlelit setting.</p>
                <img className="booking__image" src={photo} alt="Private Dinner" />
                <br />
                <button className="bookTable" onClick={() => setShowForm(true)}>Click Here To Book</button>
            </div>
            <div className="book__section">
                <h1>Get Together</h1>
                <p>Gather your friends and family for a delightful dining experience!</p>
                <img className="booking__image" src={together} alt="Get Together" />
                <br />
                <button className="bookTable" onClick={() => setShowForm(true)}>Click Here To Book</button>
            </div>
            <div className="book__section">
                <h1>Office Meet-Ups</h1>
                <p>Host your business meetings and corporate lunches in a relaxed yet professional environment.</p>
                <img className="booking__image" src={office} alt="Office Meet-Ups" />
                <br />
                <button className="bookTable" onClick={() => setShowForm(true)}>Click Here To Book</button>
            </div>

            {/* Popup Form */}
            {showForm && (
                <div className="popup-overlay" onClick={() => setShowForm(false)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Book Your Table</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Name:<span style={{ color: 'red' }}>*</span></label>
                            
                            <input type="text" required name="name" value={formData.name} onChange={handleChange} />

                            <label>Email:<span style={{ color: 'red' }}>*</span></label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />

                            <label>Phone:<span style={{ color: 'red' }}>*</span></label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />

                            <label>Number of Guests:<span style={{ color: 'red' }}>*</span></label>
                            <input type="number" name="guests" value={formData.guests} onChange={handleChange} />

                            <label>Date:<span style={{ color: 'red' }}>*</span></label>
                            <input type="date" name="date" min={today} value={formData.date} onChange={handleChange} />

                            <label>Time:<span style={{ color: 'red' }}>*</span></label>
                            <input type="time" name="time" value={formData.time} onChange={handleChange} />

                            <label>Message (Optional):</label>
                            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

                            <div className="button-group">
                                <button type="submit">Submit</button>
                                <button type="button" className="refresh-btn" onClick={handleRefresh}>Refresh</button>
                                <button type="button" className="close-btn" onClick={() => setShowForm(false)}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Error Popup */}
            {showErrorPopup && (
                <div className="error-popup-overlay" onClick={() => setShowErrorPopup(false)}>
                    <div className="error-popup-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Error</h2>
                        <p>{errorMessage}</p>
                        <button onClick={() => setShowErrorPopup(false)}>Close</button>
                    </div>
                </div>
            )}

            {/* Success Popup */}
            {showSuccessPopup && (
                <div className="success-popup-overlay" onClick={() => setShowSuccessPopup(false)}>
                    <div className="success-popup-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Success!</h2>
                        <p>Your booking has been successfully submitted. We will contact you soon.</p>
                        <button onClick={() => setShowSuccessPopup(false)}>Close</button>
                    </div>
                </div>
            )}
            {loginFirstPopUp && (
                <div className="success-popup-overlay" onClick={() => setShowSuccessPopup(false)}>
                    <div className="success-popup-content" onClick={(e) => e.stopPropagation()}>
                <h2> You must login first to continue with your booking </h2>
                <button onClick={() => setloginFirstPopUp(false)}>Close</button>
                </div>
                </div>
            )}
        </div>
    );
}

export default BookTable;
