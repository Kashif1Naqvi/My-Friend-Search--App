import React from 'react';
import CardList from './CardList'


class Card extends React.Component{
render(){
  return (

        <div className="row" >
          {
             this.props.robots.map((robot)=>{
              return <CardList {...robot} key={robot.id}  />
            })
          }
        </div>

  );
}
}

export default Card;
