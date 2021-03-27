import React, { Fragment } from 'react'
import ImageCard from '../ImageCard/ImageCard'

import './ImageList.css'

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <ImageCard key={image.id} image={image} />
    )
  })

  return (
    <>
      {images}
    </>
  )
}

export default ImageList
