import React from 'react'
import RingLoader from '../StandardLoader'
import renderer from 'react-test-renderer'

describe('RingLoader', () => {
    it('renders the placeholder component', () => {
        const tree = renderer.create(<RingLoader />)

        expect(tree).toMatchSnapshot()
    })
})