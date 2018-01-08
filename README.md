# StockOverflow

[Link to site](https://stocksoverflow.herokuapp.com/#/)

StockOverflow is a full-stack financial trading platform that
combines realtime data with hypothetical funds allowing users to
practice day-trading without any financial risk. It was modeled and
influenced by Robinhood's unreleased desktop web application.

## Features

+ Search for companies by ticker symbol or company name
+ Obtain real-time trade price pulled from external API
+ Visualize historical trading price up to five years
+ Buy and sell company shares based on current market-price
+ See financial portfolio on account page
+ Read news articles on publicly traded companies

## Technologies

+ Ruby on Rails backend
+ React/Redux frontend
+ Alpha Vantage API
+ ChartJS API
+ SASS
+ Object Oriented Programming

## Data Visualization

The graph on the company show page was created using the ChartJS library.
Once the component begins to mount, an API pull request is made on
the frontend to grab real time and historical trading prices up to
five years. Users have the ability to toggle over various time frames
(1 Day, 1 Week, 1 Month, 3 Months, 1 Year, 5 Years). The
MomentJS Javascript library was utilized to parse the data
based on specific time frames. Users also have the ability to check
the closing prices for the day/minute as they hover over the graph.

![Data Visualization](https://github.com/avelasco920/stock-overflow/blob/master/wireframes/Chart.gif?raw=true)
