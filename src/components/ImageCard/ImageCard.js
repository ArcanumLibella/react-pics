import React, { Component } from 'react'

export default class ImageCard extends Component {
  constructor (props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  componentDidMount () {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  
  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 12 + 1)

    this.setState({ spans })
  }

  render () {
    const { urls, description } = this.props.image
    return (
      <div className='image p-4' style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} className='pb-4'/>
        {/* <p className='font-semibold pb-8 uppercase'>{description}</p> */}
      </div>
    )
  }
}
