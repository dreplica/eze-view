# ezesale

https://ezesale.herokuapp.com

This app is built using create react app

## Design 
- all files are arranged for easy access, each component is independent of it's self to enable easy attachement in project
- This process makes it easy for me to edit components from the app structure and easy to breakdown and couple back.
- just one component displays all data, since each view can be managed by state changes
- I used Redux to manage my state, it makes it easier for me to access as well as grow my app from a small structure and to a big one. I intended using useContext and reducer, but i prefer to shift app structures from state management
- also  for styling (which i used styled-components, each components has it's style, this helps me to structure my files better.

## It has some features 
- Load phones: located at the top right corner, it refetches data and updates from the spreadsheet file specified and return user to home
- filter: responsive and shrinks at about 850px, 
   # contains :
     - max and min option
     - storagesize option with varying sizes
     - phone options for easy select
     - condition selection of current phone

- has a navigator pan, user can select Random sort, Highest Buy sort and Lowest sell sort
- contains a page that changes as navigator's and filters changes
- includes a pagination button for previous and next just above footer.  it paginates the app with current page showing in the middle

 
    
## Packages used include:
    Redux - used to manage state across application 
    Styled-components - used for styling like sass
    React-router-dom - used for routing and navigation management 
    React-redux - connects react to redux
    Axios - to fetch data via http request protocols (communicating with backend)
    query-string - used to compress data into a query string format to be passed for data fetching



 
