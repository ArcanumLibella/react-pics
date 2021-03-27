import axios from 'axios'

// Création d'une instance de axios avec des propriétés par défaut
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FCrxCm6cMo4aLLjbtCG9mbB6Gu4j0AdO3bnBr-Tf3EE'
  }
})
