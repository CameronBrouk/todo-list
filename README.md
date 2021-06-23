# Drive Social Media - Todo List

- hosting link: https://drive-todo.web.app

## File Structure

All important code is kept under src/TodoList

- components/
  - TodoList.tsx - Parent component that renders the full list of Todos
  - TodoItem.tsx - Component that renders a single todo item
  - CreateTodoModal.tsx - Component that renders a modal with a create-todo form
- hooks/
  - useLocalStorage.ts - hook that makes it simpler to use local storage
  - useTodos - hook that builds on useLocalStorage and contains all todo crud operations
- todo.helpers.ts - file that contains various helper functions
- todo.types.ts - file that contains the Todo type

---

## User Requirements

Create a web application (only locally available -- not publicly deployed on the internet) that is a “to do list” for a local user. A user should be able to perform the following actions:

1. Create a new to do item.
2. Mark a to do item as done.
3. Delete a to do item permanently.
4. Filter to do items based on the input of a search bar. List items should persist so that if the page is closed and reopened, the list is populated with the previous contents. The to do list should be attractively styled and intuitive.

## Technical Requirements

1. Project should be a React SPA.
2. Use create-react-app to instantiate this project. a. Be sure to use Typescript with strict mode enabled.
3. Use bootstrap (https://getbootstrap.com/) or Material UI (https://material-ui.com/) components where applicable, for clean styling.
4. Use local storage to persist list data.
5. Be sure to use Promises & async/await instead of callbacks.
6. Use functional react hook components instead of class based components. 7. We are looking for efficient and clean code that could easily be picked up by another developer.
7. Use git to submit this project. Submit by sending a URL for which a user can run the following to get your project running locally:
