import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { texte: ''}

  render() {
    return (
      <div className='searchBar bg-yellow-300 p-8 rounded-b-3xl fixed w-full'>
        <form className='max-w-screen-md flex flex-col items-start mx-auto'>
          <label className='font-bold mb-2'>Search a word</label>
          <input className='rounded w-full p-2' type='text' placeholder='cat' />
        </form>
      </div>
    )
  }
}
