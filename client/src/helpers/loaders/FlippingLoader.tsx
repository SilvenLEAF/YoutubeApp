import '../../styles/loaders/Loader.scss'


import React from 'react'




interface propsInterface {
  title: string | undefined
}



function FlippingLoader(props: propsInterface) {
  return (
    <div className="container myLoaderHolder">
      <div>
        <h4 className="myLoadingTitle"> { props.title ? props.title : "Loading..." } </h4>
        <div className="square">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default FlippingLoader
