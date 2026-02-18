# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/faq-accordion-with-react-i9fUk10Wm3](https://www.frontendmentor.io/solutions/faq-accordion-with-react-i9fUk10Wm3)
- Live Site URL: [https://react-faq-accordion-repro.vercel.app/](https://react-faq-accordion-repro.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Vercel](https://vercel.com/) - Deployment platform

### What I learned

This project helped me strengthen my understanding of React fundamentals and component composition:

**React State Management:**
Using `useState` to manage the expanded/collapsed state of accordion items. Each question component maintains its own state independently, allowing multiple items to be expanded simultaneously.

```jsx
const [isExpanded, setIsExpanded] = useState(false);

function handleClick() {
  setIsExpanded((isExpanded) => !isExpanded);
}
```

**Component Composition:**
Breaking down the accordion into smaller, reusable components (`Question`, `Button`, `Answer`) made the code more maintainable and modular.

**Conditional Rendering:**
Using ternary operators and conditional classes to show/hide answer content and apply different styles based on the expanded state.

**Tailwind CSS:**
Leveraging utility classes for responsive design and styling, particularly for creating hover and focus states for better user interaction feedback.

### Continued development

In future projects, I'd like to:

- Explore controlled multi-select accordions where only one item can be expanded at a time
- Add smooth animations and transitions for expand/collapse actions
- Implement keyboard navigation for better accessibility support
- Experiment with custom hooks for more complex state logic

### Useful resources

- [MDN - React Hooks](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) - Essential reference for understanding useState
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Comprehensive utility class reference
- [React Official Documentation](https://react.dev/) - Great for learning React fundamentals

## Author

- Frontend Mentor - [@repro123](https://www.frontendmentor.io/profile/repro123)
- GitHub - [repro123](https://github.com/repro123)
