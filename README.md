# Description
This project is a guinea pig for a friends company interview take home project.

Requirements:
- Fetches data from an external source https://github.com/public-apis/public-apis
  - Feel free to use any state management you want. If you want to flex your muscles with a specific library (redux/zustand), then use it
- Renders the data to a list or table view (styling entirely up to you!) with buttons allowing users upvote or downvote each item (votes do not need to persist across browser refreshes)
- Above the item list/table, display a leaderboard of the most upvoted and downvoted items
- Add a button to reset all votes somewhere
- Is mobile/web responsive
- Add a DEBOUNCED text input above your table/list which filters the items in your table or list.
- Create a generic button components which, via its props, has the following configurations. Ensure to use this button throughout the application.
  - Has at least 3 different types of buttons with different styling for each (cancel button, form submission button, link button, etc...)
  - Has a `isLoading` prop which renders the text "Loading" inside of the button or a loading spinner
  - Has a `isDisabled`prop which disables the button and adjusts the styling to indicate it is no longer clickable

# Using the app
- Running the app
  - clone the repo
  - `npm i`
  - `npm run start`
- Features:
  - Upvote/downvote quotes (All made by Ron Swanson)
  - A leaderboard exists at the top of the page that shows the most upvoted and most downvoted quotes
  - Quotes persist via localstorage
  - You can refetch quotes to get a new list
  - You can reset the counters to bring everything back to a 0 state
  - You can filter the quotes
  - Fairly responsive design, not a lot of time spent verifying responsiveness
  - Reset & Refetch actions are artificially prolonged to demonstrate the button loading states.
