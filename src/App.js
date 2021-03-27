import React from 'react'
import axios from 'axios'

import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {
  state = { images: [] }

  // WITH ASYNC AWAIT
  handleSubmit = async (term) => {
    const response = await axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID FCrxCm6cMo4aLLjbtCG9mbB6Gu4j0AdO3bnBr-Tf3EE'
        }
      })

      this.setState({ images: response.data.results })
    // console.log(this.state.images)
  }

  // WITH .then
  // handleSubmit (term) {
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
      <div className='App'>
        <Header />
        <SearchBar onSubmit={this.handleSubmit} />
        <h2 className="mt-4 font-bold">I found { this.state.images.length } image(s).</h2>
      </div>
    )
  }
}

export default App
