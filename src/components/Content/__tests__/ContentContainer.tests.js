import React from 'react'
import Content from '../../Content'
import renderer from 'react-test-renderer'

describe('ContentContainer', () => {
    it('renders content in default layout without media', () => {
        const tree = renderer.create(
            <Content
                ratio="21by9"
                layout="default"
            >
                <Content.Title>Title</Content.Title>
                <Content.Body>Content body.</Content.Body>
            </Content>
        )

        expect(tree).toMatchSnapshot();
    })

    it('renders an image and content in default layout', () => {
        const tree = renderer.create(
            <Content
                imageUrl="https://image.url.com"
                imageAlt="Image Alt"
                ratio="21by9"
                layout="default"
            >
                <Content.Title>Title</Content.Title>
                <Content.Body>Content body.</Content.Body>
            </Content>
        )

        expect(tree).toMatchSnapshot();
    })

    it('renders a video with background image and content in default layout', () => {
        const tree = renderer.create(
            <Content
                videoUrl="https://video.url.com"
                imageUrl="https://image.url.com"
                imageAlt="Image Alt"
                ratio="21by9"
                layout="default"
            >
                <Content.Title>Title</Content.Title>
                <Content.Body>Content body.</Content.Body>
            </Content>
        )

        expect(tree).toMatchSnapshot();
    })
})