function App() {
    /* Declaring State */
    const [emailInput, setEmailInput] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState(false)

    /* Setting up email validation */
    const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    /* Storing the input value into state */
    function handleChange(event) {
        setEmailInput(event.target.value)

        if (emailValidation.test(emailInput) == true) {
            setErrorMessage(false)
        }
    }

    /* Checking the email on button click */
    function handleClick() {
        if (emailValidation.test(emailInput) !== true) {
            setErrorMessage(true)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return(
        <div id="container">
            <div id="info-container">
                <div id="logo-container">
                    <img src="./images/logo.svg"/>
                </div>

                <img id="mobile-hero-img" src="./images/hero-mobile.jpg"/>

                <div id="heading-container">
                        <div>We're</div>
                        <div>coming soon</div>
                </div>

                <div id="info">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</div>

                <form onSubmit={handleSubmit}>
                    <div id="email-container">
                        <input type="email" placeholder="Email Address" onChange={handleChange}/>
                        <button type="submit" onClick={handleClick}>
                            <img src="./images/icon-arrow.svg"/>
                        </button>
                        {errorMessage ? <img id="error-icon" src="./images/icon-error.svg"/>: ""}
                        <div id="error">
                            {errorMessage ? "Please provide a valid email" : ""}
                        </div>
                    </div>
                </form>

                
            </div>

            <div id="img-container">
                <img id="desktop-hero-img" src="./images/hero-desktop.jpg"/>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)