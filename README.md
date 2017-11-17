# What should Shannon name her baby?

Start typing a name and the search box will make up to 25 suggestions, in order of their popularity in the U.S. since 1975. Select a name and a graph showing the number of babies born with that name over time will display below.

## About the underlying data

We used data from the U.S. Social Security administration compiled by Time Magazine and available for download here [url: https://github.com/TimeMagazine/babynames]. Time has a node script that writes to a csv file according to specified parameters (starting year, minimum frequency, etc). The data goes back to 1880, but to limit the size of our data file, we started at 1975 and included only names that occur at least 20 times in at least one year. This reduced the pool of names from over 100,000 to ~22,000. Then we used a tweaked node script to convert the csv to a json file structured as an array of objects, where each object comprised keys for name, gender, and the years 1975 to 2016. The final file is about 22MB.

## About the autocomplete

Every time the user types a character into the input field, a GET request is made to our server, where the current string is compared to the name key of our data and matching names are filtered into their own array of objects. That array is then sorted by popularity by summing the number of babies with that name over all years in the data set. That sorted array then has any duplicate names removed (because many names have a female entry and a male entry) and is limited to the top 25 most popular. The objects in that array are then stripped of all data besides the name key before being returned to the front-end, where the names are used to populate a datalist element.

## About the search function and graph

When the user searches for a name, a GET request is made to our server, where the current string is compared to the name key of our data and matching names are filtered into their own array of objects. That array has a length of 0 if no matching names are found, so an object with only a name key with the searched name as the value is returned. The array has a length of 2 if a record exists for the name under both male and female. In that case, the data is combined and an object is returned with keys for the name and the years 1975-2016. If only one record is found for the name, then the data object matching that name is returned without any manipulation.

When the client receives the requested data object, the historical year data is used to make a graph using a library called plot.ly. The names overlay each other for comparative purposes, although the user can clear the graph at any time.

## Known Issues

- At the smallest level, the function `sortBy2016` in logic.js needs to be renamed `sortByPop` to reflect it’s actual purpose. Also, one can search the same name multiple times and the graph will add 

- At a mid-sized level, most of our logic.js functions were written with tests, but a couple of them were not, so should have them added retroactively.

- At a high level, the site is not currently responsive, because it requires some more research on manipulating plotly graphs after they have been drawn. We will focus on this during the 2 hour refactoring period if possible. The site is not yet mobile-friendly.

## If we had more time

- Give the choice between seeing raw numbers and percentages, which better reflect relative popularity. 
- Finesse the CSS & display of the plotly graph.

