import React from 'react'
import unsplash from './api/unsplash'

import Header from './components/Header/Header'
import ImageList from './components/ImageList/ImageList'
import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {
  state = { images: [] }

  // WITH ASYNC AWAIT
  handleSubmit = async (term) => {
    const response = await unsplash
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
      })

      this.setState({ images: response.data.results })
  }

  // WITH .then
  // handleSubmit = (term) => {
  //   axios
  //     .get('https://api.unsplash.com/search/photos', {
  //       params: { query: term },
  //       headers: {
  //         Authorization: 'Client-ID FCrxCm6cMo4aLLjbtCG9mbB6Gu4j0AdO3bnBr-Tf3EE'
  //       }
  //     }).then(response => {
  //       console.log(response.data.results)
  //     })
  // }

  render () {
    return (
      <div className='App bg-yellow-100 min-h-screen'>
        <Header />
        <SearchBar onSubmit={this.handleSubmit} />
        <h2 className="my-8 font-bold">I found { this.state.images.length } image(s).</h2>
        <div className="imageList container mx-auto max-w-screen-lg pb-8">
          <ImageList images={ this.state.images }/>
        </div>
      </div>
    )
  }
}

export default App
