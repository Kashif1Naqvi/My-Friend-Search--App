import React from 'react'
import {Card,Icon} from 'semantic-ui-react'

const extra = (
    <Icon  name='user'
       Friend
      />
)

const CardList = ({id,name,username,email}) => {
  return (

    <div className="col-10 col-sm-4 col-md-4   p-4 tc" >
      <Card
        image = {`https://robohash.org/${id}`}
        header = {name}
        meta   ={username}
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra ={extra}
        />
    </div>
  );
}

export default CardList
