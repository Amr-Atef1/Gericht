import React from 'react';
import { SubHeading,MenuItem } from '../../components';
import { images,data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits Your Palatte"/>
      <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_juice flex__center">
        <p className='app__specialMenu_menu_heading'>Lemonada & Juice</p>
        <div className="app__specialMenu_menu_items">
        {data.juice.map((j,index)=>(
          <MenuItem key={j.title+index} title={j.title} price={j.price} tags={j.tags}/>
        ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className="app__specialMenu_menu_items">
        {data.cocktails.map((c,index)=>(
          <MenuItem key={c.title+index} title={c.title} price={c.price} tags={c.tags}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:"15px"}}>
          <button className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
