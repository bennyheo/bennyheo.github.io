const ratingButton = document.querySelectorAll(".rating-button");
const submitButton = document.querySelector(".submit-button");
const ratingSelectionText = document.querySelector(".thankyou-rating-selection");
const thankyouContainer = document.querySelector(".thankyou-container")

let selectedRated = 0;

ratingButton.forEach(button => {
    button.addEventListener('click', (buttonValue) => {
        console.log(document.querySelector('.rating-button.active'));
        if(document.querySelector('.rating-button.active'))
        {
            document.querySelector('.rating-button.active').classList.remove('active');
        }
        button.classList.add('active');
        selectedRating = buttonValue.target.value;
    });
});

submitButton.addEventListener('click', (e) => {
    if (selectedRating !== 0)
    {
        ratingSelectionText.textContent = `You selected ${selectedRating} out of 5`;
        thankyouContainer.style.visibility = "visible";
    }
})

