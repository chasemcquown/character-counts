// identify container
const container = document.querySelector("#targeted-btn")

// create function that will count characters
function inputHandler(e) {

    if (e.target.id === "h1-btn") {

        // gather H1 length
        let hOneValueLength = document.querySelector("#h1-value").value.trim().length
        
        // check length
        if (hOneValueLength < 20) {
            document.querySelector("#h1-length").innerHTML = "Character count: " + hOneValueLength + " ...TO SHORT!"
        }
        if (hOneValueLength > 70) {
            document.querySelector("#h1-length").innerHTML = "Character count: " + hOneValueLength + " ...TO LONG!"
        }
        if (hOneValueLength > 20 && hOneValueLength < 70) {
            document.querySelector("#h1-length").innerHTML = "Character count: " + hOneValueLength + " ...Just Right!"
        }
    

    }

    if (e.target.id === "meta-btn") {

        // gather meta desc legth
        let metaValueLength = document.querySelector("#meta-value").value.trim().length

        // check length
        if (metaValueLength < 120) {
            document.querySelector("#desc-length").innerHTML = "Character count: " + metaValueLength + " ...TO SHORT!"
        }
        if (metaValueLength > 170) {
            document.querySelector("#desc-length").innerHTML = "Character count: " + metaValueLength + " ...TO LONG!"
        }
        if (metaValueLength > 120 && metaValueLength < 170) {
            document.querySelector("#desc-length").innerHTML = "Character count: " + metaValueLength + " ...Just Right!"
        }
        
    }

    if (e.target.id === "alt-btn") {

        // gather alt tag legth
        let altValueLength = document.querySelector("#alt-value").value.trim().length

        // check length
        if (altValueLength < 20) {
            document.querySelector("#alt-length").innerHTML = "Character count: " + altValueLength + " ...TO SHORT!"
        }
        if (altValueLength > 125) {
            document.querySelector("#alt-length").innerHTML = "Character count: " + altValueLength + " ...TO LONG!"
        }
        if (altValueLength > 20 && altValueLength < 125) {
            document.querySelector("#alt-length").innerHTML = "Character count: " + altValueLength + " ...Just Right!"
        }
    
    }
}

// listen for event, call function
container.addEventListener("click", inputHandler)





























// The H1 Should Be Between 20 and 70 Characters

// Best practice is to keep meta description length between 120-150 characters. This ensures your entire description will appear on both desktop and mobile.

// With a limit of about 125 characters, an ALT tag should provide enough detail for users and search engines to relate the image to the context of the page