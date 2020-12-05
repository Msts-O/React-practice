import React from 'react' ;
import Summary from "./Summary";

const Details = (props) => {
 const id = props.match.params.id
  return(
    <div className= "project-details">
     <div className="card z-depth-10">
      <div className="card-content">
       <span className="card-title">Title --{id}</span>  #id番号は後ろに添えておく為
        <p>Marmonnant means Bulletin board in french🇫🇷</p>
      </div>
     <div className="card-action gret lighten-4 grey-text">
      <div> Posted by Taro.Sato </div>
      <div> ○day○month </div>
     </div>
     </div>
    </div>
  )
}

export default Details ;