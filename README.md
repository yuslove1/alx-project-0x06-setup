# StateCraft: Task 3 - Global State with Redux (alx-project-0x06-setup)

This final task integrates Redux for global state management, providing a scalable solution for managing application state, especially in larger projects.  It builds upon the previous Context API implementation, demonstrating a more structured approach to state management.


## Getting Started

1. **Clone the repository:**

```bash
git clone git@github.com:yuslove1/alx-project-0x06-setup.git

```
2. **Install dependencies:**

```bash
cd alx-project-0x06
npm install

```
3. **Run the development seraver:**

```bash
npm run dev

```

Open http://localhost:3000/counter-app in your browser.

## Functionality
The counter app now utilizes Redux to manage the count state. Both the Header and CounterApp components are connected to the Redux store, allowing them to access and update the shared state. Clicking the increment/decrement buttons in CounterApp updates the count displayed in both components.

## Key Technologies
**React:** JavaScript library for building user interfaces.
**Redux:** Predictable state container for JavaScript apps.
**React-Redux:** Official React bindings for Redux.

## Key Improvements
**Scalable State Management:** Redux provides a more structured and scalable approach compared to Context API, particularly beneficial for larger applications.
**Centralized State:** All application state resides in a single store, making it easier to manage and debug.
**Maintainable Code:** Redux promotes predictable state updates and improves code organization.

## Conclusion
((https://github.com/yuslove1/alx-project-0x04-setup/tree/main/alx-project-0x04) (https://github.com/yuslove1/alx-project-0x05-setup/tree/main/alx-project-0x05)) and this project demonstrates the progression from basic state management with useState to more advanced solutions like Context API and finally Redux, providing a comprehensive understanding of different state management techniques in React.

