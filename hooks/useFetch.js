import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState(null)

  BASE_URL = 'http://localhost:3000/api/products/'

  const fetchData = async () => {
    setIsloading(true)
    try {
      const response = await axios.get(BASE_URL)
      setData(response.data)
      setIsloading(false)
    } catch (error) {
      setError(error)
    } finally {
      setIsloading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsloading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default useFetch
