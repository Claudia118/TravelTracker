# TravelTracker App

Welcome to TravelTracker! This application allows users to keep track of the cities they have traveled to. It provides a simple interface to register cities, view them on a map, and add details about each trip.

## Introduction

TravelTracker is a web application that helps users organize and document their travel experiences. With TravelTracker, you can create a list of cities you have visited along with the corresponding countries. The application also utilizes geolocation to show your current location on the map. Each city entry includes details such as the date of your visit, personal notes about the trip, and a link to the Wikipedia article for the city.

## Features

TravelTracker offers the following features:

- User authentication (Note: Fake login for demo purposes).
- List of cities and countries visited by the user.
- Geolocation to show the user's current position on the map.
- Ability to add new cities with the help of a fake API to fetch city names.
- Option to add trip details, such as the date of visit and personal notes.
- Marker on the map for each registered city, allowing users to click for additional details.
- Deletion of cities from the list.
- Routing between countries and cities.

## Usage

Upon login, you will see a list of cities you have already registered on the left side.

The map on the right side will show your current location based on geolocation.

To add a new city, click on the map to specify the location and fetch its name from the fake external API.

Provide the date of your visit and add any personal notes about the trip.

Click "Add" to include the city in your list and display it on the map.

To view details about a city, click on its marker on the map.

To delete a city from your list, click the delete button beside the city name.

## Dependencies

TravelTracker relies on the following technologies and APIs:

- Fake login: A fake login mechanism for demonstration purposes only.
- Geolocation API: To track and display the user's current position on the map.
- Map: Leaflet Library to display map.
- Fake External City Name API: To fetch the city name based on geolocation coordinates.
- Wikipedia API: To provide links to Wikipedia articles for each city.
