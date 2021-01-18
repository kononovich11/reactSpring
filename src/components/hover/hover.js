import React, {useState} from 'react';

import arrow from '../icons/icons8-chevron-down-24.png';
import multiply from './icons8-multiply-24.png';
import './hover.css';

const Hover = ({navbarData, setMobileMenu}) => {
  const [clickedItem, setClickedItem] = useState(null);

  return (
    <div className="hover">
       <img 
        src={multiply} 
        className="multiply"
        alt="multiply"
        onClick ={() => setMobileMenu(false)}/>  
      {
        navbarData.map(item => {
          return (
            <div className="menuOption">
              <div className="selectRow">
                <div className="selectTitle">{item.name}</div>
                {
                  item.showLinks && <img 
                  src={arrow} 
                  className="arrow" 
                  alt="arrow"
                  onClick={() => {setClickedItem(item)}}/>
                }
              </div>
              {
                item === clickedItem && clickedItem?.options.map(option => {
                  return <div className="selectedOptions">{option}</div>
                })
              } 
            </div>
          )
        })
      }
    </div>
  );
}

export default Hover;