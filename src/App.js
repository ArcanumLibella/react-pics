import React from 'react'
import axios from 'axios'

import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {
  handleSubmit (term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID FCrxCm6cMo4aLLjbtCG9mbB6Gu4j0AdO3bnBr-Tf3EE'
      }
    })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
