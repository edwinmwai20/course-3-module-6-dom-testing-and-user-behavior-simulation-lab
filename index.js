// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

// Utility: Create a DOM element with optional attributes
function createElement(tag, attributes = {}) {
  const el = document.createElement(tag);
  for (let key in attributes) {
    el[key] = attributes[key];
  }
  return el;
}

// Step 1: Add text/content to a parent element
function addElementToDOM(parentId, text) {
  const parent = document.getElementById(parentId);
  if (!parent) return;
  parent.textContent = text;
}

//  Remove an element by ID
function removeElementFromDOM(elementId) {
  const el = document.getElementById(elementId);
  if (el) el.remove();
}

//  Simulating a button click updating the DOM
function simulateClick(parentId, text) {
  const parent = document.getElementById(parentId);
  if (!parent) return;
  parent.textContent = text;
}

//  Handle form submissions dynamically
function handleFormSubmit(formId, parentId) {
  const form = document.getElementById(formId);
  const parent = document.getElementById(parentId);
  const error = document.getElementById('error-message');
  if (!form || !parent || !error) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page reload
    const input = form.querySelector('input');
    if (!input.value.trim()) {
      error.textContent = 'Input cannot be empty';
      error.classList.remove('hidden');
      return;
    }
    error.textContent = '';
    error.classList.add('hidden');
    parent.textContent = input.value.trim();
    input.value = '';
  });

  // Trigger submit programmatically for testing
  form.dispatchEvent(new Event('submit', { bubbles: true }));
}

module.exports = {
  createElement,
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
