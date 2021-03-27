import React, { Fragment } from 'react'

const ImageList = (props) => {
  const images = props.images.map((image, id) => {
    return (
      <div key={image.id}>
        <img src={image.urls.regular} alt={image.alt_description} className='p-4' />
        <p className='font-semibold mb-8 uppercase'>{image.alt_description}</p>
      </div>
    )
  })

  return (
    <>
      {images}
    </>
  )
}

export default ImageList
