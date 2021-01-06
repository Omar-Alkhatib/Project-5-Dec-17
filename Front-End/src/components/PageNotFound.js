import React from 'react';
import pageNotFound from './pics/pageNotFound.png';
const PageNotFound = (props) => {
  return (
    <div className="page-not-found">
      <h1 className="page-not-found">Oops No Match For  "{props.location.pathname}" !</h1>
      <img src={pageNotFound} alt=''></img>
    </div >
  )
}

export default PageNotFound

