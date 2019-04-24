import React from 'react'
import ContentLoader from '../GeneralContentLoader'
import renderer from 'react-test-renderer'

describe('ContentLoader', () => {
    it('renders the placeholder component', () => {
        const tree = renderer.create(<ContentLoader />)

        expect(tree).toMatchSnapshot()
    })
})