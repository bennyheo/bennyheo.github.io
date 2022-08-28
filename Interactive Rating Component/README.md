# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
 I began with creating containers for the HTML portion and creating the elements.  Next I used CSS to line everything up.  Finally, I used Javascript to tie it all together.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript


### What I learned

Further my understanding of Javascripts intergration.  One major challenge was thinking of how to go from one state to the other.  

I decided to build both cards and place them in the center then make the "Thank you" card only appear once a rating as been submitted.
I'm not sure if this is best-practice or how this state change is typically achieved.



```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.thankyou-container {
    display: grid;
    justify-content: space-evenly;
    align-content: space-around;
    max-width: 340px;
    height: 320px;
    background-color: rgb(31, 36, 45);
    border-radius: 20px;
    padding: 60px 50px 30px 30px;
    position: absolute;
    visibility: hidden;
}
```
```js
submitButton.addEventListener('click', (e) => {
    if (selectedRating !== 0)
    {
        ratingSelectionText.textContent = `You selected ${selectedRating} out of 5`;
        thankyouContainer.style.visibility = "visible";
    }
})
```


### Continued development
One are of development I'd like to continue developing is reducing the time it takes to complete projects such as this.  Also, I would like to revisit these challenges once I learn React.


## Author

- Website - [Benny Heo](https://bennyheo.github.io/)
- Frontend Mentor - [@bennyheo](https://www.frontendmentor.io/profile/bennyheo)



## Acknowledgments

Hats off to the more experienced engineers and programmers of the internet.  The resources on the internet are priceless.
