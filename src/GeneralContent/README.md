# General Content

## About
The component has the ability to display a piece of media with a title, content, and calls to action.

## Layouts
There are five different layout configurations available: Default, Inverted, Background, Left, and Right.
![alt christ-fellowship-flat-ui](/docs/static/General-Content.png)

## Usage
The component is made up of the following components: Wrapper, Title, and Body.
* **GeneralContentWrapper:** this is the parent container that handles the configuration of the media and content. You are able to pass it any html or React Component(s) that you want to appear in the body. It accepts the following properties: layout, imageUrl, imageAlt, videoUrl, ratio, [actions, and target](/src/CallsToAction)
* **GeneralContentTitle:** optional styled title for the piece of content
* **GeneralContentBody:** optional styled body wrapper for the piece of content that accepts html and React Component(s)

```jsx
<GeneralContent
    layout="default"
    imageUrl="htts://img.url"
    imageAlt="Alt text for my image"
    videoUrl="https://vid.url"
    ratio="1by1"
>
    <GeneralContentTitle>
        This is the title on my content
    </GeneralContentTitle>

    <GeneralContentBody>
        <h4>Here I can pass in any html that I want</h4>

        I can also just pass in plain text

        <ReactComponent>This is my super cool React Component that I'm passing in too!</ReactComponent>
    </GeneralContentBody>

    <i>*I can also just pass in extra Html to the main component</i>
</GeneralContent>
```


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