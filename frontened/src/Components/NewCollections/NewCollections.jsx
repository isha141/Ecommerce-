import React from 'react'
import '../NewCollections/NewCollections.css';
import new_collections from '../Assets/new_collections';
import Items from '../Items/Items';
const NewCollections = () => {
  return (
    <div className='newCollection'>
       <h1>NEW COLLECTIONS</h1>
         <hr/>
         <div className="collections">
          {new_collections.map((prod,i)=>
        (
          <Items key={i} id={prod.id} name={prod.name} image={prod.image} old_price={prod.old_price} new_price={prod.new_price} />
        )
        )}  
         </div>
    </div>
  )
}

export default NewCollections
