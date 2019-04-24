import React from 'react'
import AccordionLoader from '../AccordionLoader'
import renderer from 'react-test-renderer'

describe('AccordionLoader', () => {
    it('renders the placeholder component', () => {
        const tree = renderer.create(<AccordionLoader />)

        expect(tree).toMatchSnapshot()
    })
})