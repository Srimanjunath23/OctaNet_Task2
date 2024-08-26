import React from 'react'

const Footer = () => {
    const year= new Date();
  return (
    <footer>Copyright Octanet Project &copy; {year.getFullYear()}</footer>
  )
}

export default Footer