// identify container
const container = document.querySelector("#targeted-btn")

// create function that will count characters
function inputHandler(e) {

    if (e.target.id === "h1-btn") {
        let hOneValue = document.querySelector("#h1-value").value.trim()
        document.querySelector("#h1-length").innerHTML = hOneValue.length
    }

    if (e.target.id === "meta-btn") {
        let metaValue = document.querySelector("#meta-value").value.trim()
        document.querySelector("#desc-length").innerHTML = metaValue.length
    }

    if (e.target.id === "alt-btn") {
        let altValue = document.querySelector("#alt-value").value.trim()
        document.querySelector("#alt-length").innerHTML = altValue.length
    }
}

// listen for event, call function
container.addEventListener("click", inputHandler)





























// The H1 Should Be Between 20 and 70 Characters

// Best practice is to keep meta description length between 120-150 characters. This ensures your entire description will appear on both desktop and mobile.

// With a limit of about 125 characters, an ALT tag should provide enough detail for users and search engines to relate the image to the context of the page