# cypress simple test framework 

The sample test framework to test page navigations for Github.

# Setup

```` 
git clone https://github.com/pargev/cypress.git
````
Then navigate ti the folder

````
cd DESTINATION_PATH
````

Install all the required packages.
````
npm install
````

# Run tests

to open the Cypress test runner 
```
./node_modules/cypress/bin/cypress open
```

for choosing a browser you can pass the following parameters:
```
 --browser chrome 
 ```
 Also, you can select firefox, electron and the Edge browser if you use windows operating system.
 
 to generate reports after test runs you can pass the following argument:
 ```
 --reporter mochawesome
 ```
 You can use the Cypress Dashboard as well by passing the key
```
cypress run --record --key YOUR_KEY
```
 to run all tests using cli in headed mode on the Chrome browser

```
./node_modules/cypress/bin/cypress run --browser chrome --reporter mochawesome --headed --env username=YOUR-USERNAME,password=YOUR-PASSWORD
```

# Selecting tests

To run specific test spec file pass the "--spec" argument like the following exmple:
```
./node_modules/cypress/bin/cypress run --browser chrome --reporter mochawesome --headed --spec=cypress/integration/tests/GithubNavigation.js  --env username=USERNAME,password=PASSWORD
```

to find filter and run specific test(s) using substring you can pass the env argument for example
```
./node_modules/cypress/bin/cypress run --browser chrome --reporter mochawesome --headed --env username=YOUR-USERNAME,password=YOUR-PASSWORD,grep=Issues
```
Or you can type grep=Marketplace or Pull, Issues or any text you would like.


