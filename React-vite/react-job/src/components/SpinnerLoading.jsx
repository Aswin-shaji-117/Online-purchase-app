import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const override ={
    display :'block',
    margin :'100px auto'
}
function SpinnerLoading({loading}) {
  return (
    <HashLoader
    color='green'
    loading = {loading}
    cssOverride={override}
    size={100}
    />
  )
}

export default SpinnerLoading