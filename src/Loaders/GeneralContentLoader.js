import React from 'react'

import {
  contentLoaderContainer, contentLoaderImg, contentLoaderTitle, contentLoaderLine,
} from '../css/styles.module.css'

const ContentLoader = () => (
  <div class={contentLoaderContainer}>

    <div class={contentLoaderImg}></div>

    <div class={contentLoaderTitle}></div>

    <div class={contentLoaderLine}></div>
    <div class={contentLoaderLine}></div>
    <div class={contentLoaderLine}></div>
    <div class={contentLoaderLine}></div>
    <div class={contentLoaderLine}></div>
  </div>
)

const defaultProps = {}

const propTypes = {}

ContentLoader.defaultProps = defaultProps
ContentLoader.propTypes = propTypes

export default ContentLoader;
