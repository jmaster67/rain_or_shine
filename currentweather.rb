require 'open_weather'

# get current weather by city name
options = { units: "Imperial", APPID: 6f188d89b8bd85b5e4911df9b542941c }
OpenWeather::Current.city("Berlin, DE", options)

# get current weather by city name
OpenWeather::Current.city("Cochin, IN")

# get current weather by city id
OpenWeather::Current.city_id("1273874")

# get current weather by geocode. (lat, lon)
OpenWeather::Current.geocode(9.94, 76.26)

# get current weather for a list of city ids
OpenWeather::Current.cities([524901, 703448, 2643743])

# get current weather for a bounding box
OpenWeather::Current.rectangle_zone(12, 32, 15, 37, 10)

# get current weather for cities around a point
OpenWeather::Current.circle_zone(55.5, 37.5, 10)

# get the current weather in degrees celsius
OpenWeather::Current.city("Cochin, IN", units: 'metric')