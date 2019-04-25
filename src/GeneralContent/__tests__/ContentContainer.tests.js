import React from 'react'
import ContentContainer from '../ContentContainer'
import ContentTitle from '../ContentTitle'
import ContentBody from '../ContentBody'
import renderer from 'react-test-renderer'

describe('ContentContainer', () => {
    it('renders an image and content in default layout', () => {
        const tree = renderer.create(
            <ContentContainer
                imageUrl="https://image.url.com"
                imageAlt="Image Alt"
                ratio="21by9"
                layout="default"
            >
                <ContentTitle>Title</ContentTitle>
                <ContentBody>Content body.</ContentBody>
            </ContentContainer>
        )

        expect(tree).toMatchSnapshot();
    })
})