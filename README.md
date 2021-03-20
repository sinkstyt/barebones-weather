## _A Barebones Open Weather App_
<img src="src/img/cloudrain.png" width="128" alt="a cartoon cloud raining">

### _If you give it a city name, it should return that city's current temperature and humidity._

### Authors _**Collin Chapman, Tyler Sinks, Saoud Rana**_
* _originally created March 15, 2021 while following along with Epicodus' "Learn How to Program: Asynchronoy and APIs" curriculum_
* _last major revision March 19, 2021_

### Technologies Used
* _npm, webpack, webpack-cli_
* _OpenWeather's API_ _[see OpenWeather's EndPoint Docs for Search here](https://openweathermap.org/current#name)_
* _VS Code, html, CSS, javascript, jquery_
* _bootstrap, ESLint, Babel_
* _for complete list of dependencies, see package.JSON_

### Description
When the project is fully assembled and running in a browser, a user can enter a city name. Press "Get Current Temperature and Humidity" to see this input city's current humidity and temperature (in Kelvin). For this project to achieve this, it must be assembled using webpack from the command line (terminal), and a user needs her own unique key for the Open Weather API. _see Setup/Installation for webpack and API key instructions_

### Setup/Installation Requirements
1. Clone this repository to your machine following (these steps)[https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository].
Here's the link to this repo: https://github.com/sinkstyt/barebones-weather.git
2. Navigate to the root folder of the barebones-weather repository in your command line or terminal.
This might look something like:
```
Users/{YOUR_USER_NAME}/Desktop $ mkdir barebones-weather
Users/{YOUR_USER_NAME}/Desktop $ cd barebones-weather
Users/{YOUR_USER_NAME}/Desktop/barebones-weather $
```
3. Tell git to bring down the entire repository using:<br>
`Users/{YOUR_USER_NAME}/Desktop/barebones-weather $ git clone https://github.com/sinkstyt/barebones-weather.git`
4. Get your own unique Open Weather API key by creating a login and requesting one for free (Go there now)[https://home.openweathermap.org/users/sign_up]
5. Store your unique API key (it looks something like this: 86a52c0d12da09c0e39fedfb4v89797d) at the root level of this project in a file saved as .env
6. The .env file should have just one line in it like so:<br>
`API_KEY=86a52c0d12da09c0e39fedfb4v89797d`
7. From the command line use this series of commands to install the full docket of dependencies and have webapck assemble and launch the project in a browser tab:<br>
```
Users/{YOUR_USER_NAME}/Desktop/weather-api $ npm install
Users/{YOUR_USER_NAME}/Desktop/weather-api $ npm run start
```
8. If you're working in a Windows environment, please change the "start": command within scripts in package.json from<br>
```
"scripts": {
  "build": "webpack --mode=development",
  "start": "npm run build; webpack-dev-server --open --mode development",
```
to<br>
```
"scripts": {
  "build": "webpack --mode=development",
  "start": "npm run build & webpack-dev-server --open --mode development", // the ; is now a & instead
```

### Known Bugs
* _No known bugs_

### License
_MIT 2.0_<br>
_Feel free to make tweaks_

#### Contact
[Collin Chapman](mailto:cchap14@gmail.com)<br>
[Tyler Sinks](tyler.sinks@gmail.com)<br>
[Saoud Rana](githubissues@saoud.dev)<br>