import React from 'react'
import MediaItem from '../MediaItem'
import renderer from 'react-test-renderer'

describe('MediaItem', () => {
    it('renders an image with no video', () => {
        const tree = renderer.create(
            <MediaItem imageUrl="https://img.url.com" imageAlt="Image Alt" />
        )

        expect(tree).toMatchSnapshot()
    })

    it('renders a video with a background image', () => {
        const tree = renderer.create(
            <MediaItem videoUrl="https://video.url.com" imageUrl="https://img.url.com" imageAlt="Image Alt" />
        )

        expect(tree).toMatchSnapshot()
    })
})