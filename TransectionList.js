import React ,{useContext} from 'react';
import { Globalcontext } from '../context/GlobalState';
import Transection from './Transection';

const TransectionList = () => {
    const {transections}=useContext(Globalcontext);
    
  return (
    <>
    <h3>History</h3>
    <ul id= 'list'className="list">
        {transections.map(transection =>(<Transection key={transection.id} transection={transection} />
    ))}
     
    </ul>
  </>

  );
}

export default TransectionList;
