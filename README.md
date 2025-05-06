# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpeg)

### Links

- Solution URL: [GitHub](https://github.com/kaamiik/fm-Product-list-with-Cart-using-react-tailwind)
- Live Site URL: [Vercel](https://fm-product-list-with-cart-using-react-tailwind.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Tailwind
- Accessibility

### What I learned

In this project, I learned about state management using the React Context API, which allowed me to efficiently manage and share state across components without prop drilling. I implemented multiple context providers for both cart state and modal ref management, demonstrating how to create and consume context in a React application. I also explored the use of `useRef` for managing component references. To improve accessibility, I added a `div` with the `sr-only` class to provide aria-live announcements for screen readers when items are added or removed. Furthermore, I used Tailwind v4 for this project, which does not require a `tailwind.config.js` file, and I utilized the `@theme` directive along with custom properties to add custom styles.

## Author

- Frontend Mentor - [@kaamiik](https://www.frontendmentor.io/profile/kaamiik)
- X - [@kiaakamran](https://www.x.com/kiaakamran)
