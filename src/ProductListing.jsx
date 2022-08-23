import React  from "react";
import {Slider} from "@material-ui/core";
import { useState } from "react";
import { MdOutlineSecurity } from 'react-icons/md';

import "./index.css"

const ProductListing = () => {
    const[min,setMin]=useState(0)
    const[max,setMax]= useState(100000)
const[val,setVal]= useState([4000,8000]);

const updateVal = (e,[min,max]) =>{
    setMin(min)
    setMax(max)
    setVal([min,max])
    console.log([min,max]);
}

    return<>
<div className="container" >
    <div className="filters">
       <div className="filterhead" > <h3>Filters</h3></div>
        <div className="form">
        <div className="label">  <h3>Brands</h3></div>   <div className="span view" ><span>View All</span></div>
        <br />
          <div className="label">  <input type="checkbox" /><label> Samsung</label></div> <div className="span" ><span> 45</span></div>
            <br />
            <div className="label">  <input type="checkbox" /><label> Apple</label></div> <div className="span" ><span> 45</span></div>
            <br />
            <div className="label">  <input type="checkbox" /><label> Redmi</label></div> <div className="span" ><span> 45</span></div>
            <br />
            <div className="label">  <input type="checkbox" /><label> Nokia</label></div> <div className="span" ><span> 45</span></div>
            <br />
            <div className="label">  <input type="checkbox" /><label> Motorola</label></div> <div className="span" ><span> 45</span></div>
            <br />
            <hr />
            <div className="slider">
            <h3>Price</h3>
            <br />
            <span>Rs {min}</span><span>-Rs {max}</span>
            <Slider 
                value={val}
                max={10000}
                onChange={updateVal}
            />
           </div>
        </div>
    </div>
    <div className="mobilephones">
    <div className="heading" ><h3>All mobile Phones</h3></div><div className="heading no2">Sort by Price Low to high</div>
<div className="mobiles">
<div className="onemobile">
<img className="image" src="https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&w=600" />
<div className="cashBack"><span>12% cashBack</span></div>
<div className="name">Samsung Galaxy S10 Plus (Aura Black ,256 GB) </div>
<div className="price">
<span className="actualPrice" >rs99999</span>
<span className="cutPrice">rs36666</span>
<span className="discount">34%off</span>
</div>
</div>
<div className="onemobile">
<img className="image" src="https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&w=600" />
<div className="cashBack"><span>12% cashBack</span></div>
<div className="name">Samsung Galaxy S10 Plus (Aura Black ,256 GB) </div>
<div className="price">
<span className="actualPrice" >rs99999</span>
<span className="cutPrice">rs36666</span>
<span className="discount">34%off</span>
</div>
</div>
<div className="onemobile">
<img className="image" src="https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&w=600" />
<div className="cashBack"><span>12% cashBack</span></div>
<div className="name">Samsung Galaxy S10 Plus (Aura Black ,256 GB) </div>
<div className="price">
<span className="actualPrice" >rs99999</span>
<span className="cutPrice">rs36666</span>
<span className="discount">34%off</span>
</div>
</div>
<div className="onemobile">
<img className="image" src="https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&w=600" />
<div className="cashBack"><span>12% cashBack</span></div>
<div className="name">Samsung Galaxy S10 Plus (Aura Black ,256 GB) </div>
<div className="price">
<span className="actualPrice" >rs99999</span>
<span className="cutPrice">rs36666</span>
<span className="discount">34%off</span>
</div>
</div>
<div className="onemobile">
<img className="image" src="https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&w=600" />
<div className="cashBack"><span>12% cashBack</span></div>
<div className="name">Samsung Galaxy S10 Plus (Aura Black ,256 GB) </div>
<div className="price">
<span className="actualPrice" >rs99999</span>
<span className="cutPrice">rs36666</span>
<span className="discount">34%off</span>
</div>
</div>



</div>
    </div> 
</div>
<br />
 <div className="section">
    <div className="section1">
        <div className="item">
       <div className="icons"> <MdOutlineSecurity /></div>
        <h5>100% secure payment</h5><p>Moving Card details to a much secure place   </p> </div>
        <div className="item">
        <div className="icons"> <MdOutlineSecurity /></div>
        <h5>Trust Pay</h5><p>Payment protection</p><br /><p>Easy Return Policy</p></div>
        <div className="item">
        <div className="icons"> <MdOutlineSecurity /></div>
        <h5>Help Center</h5><p>Look no further and Browse FAQ's <br />or solve any Query</p></div>
        <div className="item" id="lastItem" >
        <div className="icons"> <MdOutlineSecurity /></div>
        <h5>Easy Installment</h5><p>Pay for your purchase in easy EMI <br />and fullfill your dreams</p></div>
    </div>
    <div className="section2">
    <div className="ul">
       <div className="head">
       <h3>About us</h3>
       </div>
        <ul>
            <li className="list" >About Cofee</li>
            <li className="list">Company information</li>
            <li className="list">News & Media</li>
            <li className="list">Carrier Opportunities</li>
            <li className="list">Code Of Conduct</li>
        </ul>
    </div>
    <div className="ul">
       <div className="head">
       <h3>About us</h3>
       </div>
        <ul>
            <li className="list" >About Cofee</li>
            <li className="list">Company information</li>
            <li className="list">News & Media</li>
            <li className="list">Carrier Opportunities</li>
            <li className="list">Code Of Conduct</li>
        </ul>
    </div>
    <div className="ul">
       <div className="head">
       <h3>About us</h3>
       </div>
        <ul>
            <li className="list" >About Cofee</li>
            <li className="list">Company information</li>
            <li className="list">News & Media</li>
            <li className="list">Carrier Opportunities</li>
            <li className="list">Code Of Conduct</li>
        </ul>
    </div>
    
   
    <div className="connect">
        <h3 className="head">Download our Amzing App</h3>
    </div>
    </div>
    
 </div>
    </>
}

export default ProductListing;