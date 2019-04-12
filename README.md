![alt christ-fellowship-flat-ui](./docs/static/Flat-UI-Logo.png)
# @christfellowshipchurch/flat-ui-web

## About
This React DOM package is the Flat UI kit developed by [Christ Fellowship Church](https://gochristfellowship.com). This UI Kit uses hard edges, solid colors, and no shadows to give a flat look to the overall design. Check out a directory for descriptions of each UI element and use cases for each of the elements.

## Usage
This package uses a handful of other packages and technologies
* React Dom
* SASS
* [Bootstrap 4](https://getbootstrap.com)
* [Reactstrap](https://reactstrap.github.io) - a React Bootstrap library
* [FontAwesome](https://fontawesome.com) - icon library

Make sure that when you set up your project using this package, you import the main style sheet into your package. It'll be inside of `node_modules/@christfellowship/flat-ui-web/styles/styles.scss`. We are working on getting this to be modularized, so this is just a temporary solution for right now.


## Testing
Flat UI Web using jest snapshots for testing.

Running `yarn test` runs a test and outputs the result. When run at the _root_, it will run tests for the entire project. Running at a specific directory will run tests for that directory.

Running `yarn test -u` will update snapshots. **Only do this if you are positive that snapshots need to be updated**.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. Commits without tests are not likely to be taken into consideration.

## Authors and acknowledgment
[Caleb Panza](https://github.com/calebpanza)

## License
[MIT](https://choosealicense.com/licenses/mit/)