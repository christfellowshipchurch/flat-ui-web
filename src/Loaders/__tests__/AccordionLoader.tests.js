import React from 'react'
import AccordionLoader from '../AccordionLoader'
import renderer from 'react-test-renderer'

describe('AccordionLoader', () => {
    it('renders as a placeholder component', () => {
        const tree = renderer.create(<AccordionLoader />)

        expect(tree).toMatchSnapshot()
    })
})