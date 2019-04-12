# Calls To Action

![alt christ-fellowship-flat-ui](/docs/static/CallsToAction/Calls-To-Action.png)
## About
Calls to Action are a collection of `<a>`'s formatted as buttons. This component lays out the buttons in a structured layout that is mobile friendly.

## Usage
The element accepts 2 properties
* **Actions:** the actions you want to display as a collection of objects
* **Target:** sets the `target` property of the `<a>` for every button in the row


```jsx
const actions = [
    {
        call: "Action 1",
        action: "https://my.action.com"
    },
    {
        call: "Action 2",
        action: "https://my.action.com"
    }
]

<CallsToAction.Wrapper action={actions} target="blank" />
```


## Testing
Flat UI Web using jest snapshots for testing.

Running `yarn test` runs a test and outputs the result. When run at the _root_, it will run tests for the entire project. Running at a specific directory will run tests for that directory.

Running `yarn test -u` will update snapshots. **Only do this if you are positive that snapshots need to be updated**.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. Commits without tests are not likely to be taken into consideration.

## Authors and acknowledgment
[Caleb Panza](https://github.com/calebpanza), Cristian Garcia

## License
[MIT](https://choosealicense.com/licenses/mit/)