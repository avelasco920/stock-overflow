## Stock-Overflow (Data Visualization)

### Background and Overview

Stock-Overflow is a trading application for the web where users can buy and sell stocks. This part of the project concentrates on visually communicating the change in stock prices and the user's portfolio value during a time period by using realtime data. Data will be pulled from an external api source through the company's symbol.

The graph will be tied to a back end server to determine what shares they had at a given time in order to accurately graph the historical changes in their portfolio.

As the graph is displayed, users can change the different time frames they wish to see. They can also hover over the graph to see the delta between their current portfolio value and its value at a specific time.

### Functionality and MVP
Company Graph
- [ ] The graph on the company page will show a history of share price during a specified time period.
- [ ] The initial graph to be shown will show the fluctuation of the day's share prices. However, users can choose between seeing the price changes between 1 Day, 1 Week, 1 Month, 3 Months, 1 Year, and 5 Years.
- [ ] The graph will be based off of realtime data with an API request

Users Graph
- [ ] On the user's home page, a graph will be shown to display the status of their portfolio value.
- [ ] The user can choose to see datapoints betwen 1 Day, 1 Week, 1 Month, 3 Months, 1 Year, and 5 Years.
- [ ] The graph will be based off of realtime data with an API request

### Wireframes
Company Page
![Company Page](https://github.com/avelasco920/stock-overflow/blob/datavis/wireframes/Wireframes%20Graph.jpg?raw=true)
![Zoomed In](https://github.com/avelasco920/stock-overflow/blob/datavis/wireframes/Wireframes%20Graph2.jpg?raw=true)

### Architecture and Technologies
This project will be implemented with the following technologies:

* Vanilla JavaScript for overall structure
* External library called ChartJS to draw graph
* Webpack to bundle and serve up the various scripts.

### Implementation Timeline

**Over the weekend:**
- [x] Research API sources to retrieve realtime data
- [x] Setup placement of graph and links to toggle between different time ranges

**Day 1:** Focus on data retrieval
- [ ] Create API function calls for the different time frames.
- [ ] Parse through the received data split the data into two arrays, share prices and time.
- [ ] Make function calls for various time ranges

**Day 2**
![Portfolio Value](https://github.com/avelasco920/stock-overflow/blob/datavis/wireframes/Wireframes%20Graph3.jpg?raw=true)
- [ ] Create functions to calculate portfolio value based on logic above. Above graphics are used only as a representation of logic, not aesthetic/layout.
- [ ] Integrate api calls with the different specific time functions

**Day 3** Begin working with ChartJS
- [ ] Setup chart with fake datapoints to format chart fitting on screen
- [ ] Make time-range toggles functional

**Day 4** Styling
- [ ] Create hover effects to display changes
- [ ] Style to match rest of page
- [ ] Add smoot transitions and loading while data is fetching
