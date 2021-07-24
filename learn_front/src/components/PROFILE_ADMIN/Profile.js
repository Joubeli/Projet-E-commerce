import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../node_modules/font-awesome/css/font-awesome.min.css"
import "./profile.css"




const UserProfile = () => {
  
  const isAuth = useSelector((state) => state.reducerUser.isAuth);

  // console.log(isAuth);
  if (!isAuth) {
    return <Redirect to="/sign-in" />;
  }
  return (

    <div>
    <div className='account'>

      <div className='sidebar'>
			<h5>Navigation</h5>
      <div className='navbar_Admin'>
			<a href="#">
					<img src="./login1.png" alt="profile photo" width="70" height="auto"/>
						<h4>Jane Donovan</h4>
						<p>Administrator</p>
				  </a>
		</div>
			<ul>
			
				<li><a href="#charts"><em className="fa fa-bar-chart"></em>  Users</a></li>
				<li><a href="#widgets"><em className="fa fa fa-clone"></em> Orders </a></li>
				<li><a href="#forms"><em className="fa fa-pencil-square-o"></em> Product</a></li>
				<li><a href="#buttons"><em className="fa fa-hand-o-up"></em> Charts</a></li>
				<li><a href="#tables"><em className="fa fa-table"></em> Notfication</a></li>
				<li><a href="#grid"><em className="fa fa-columns"></em> Log Out</a></li>
			</ul>
     
    
		</div>
    </div>

    

         <h3 className='content'>Users </h3>
         
         <h3 className='content'>Orders </h3>

         
         <h3 className='content'>Product </h3>

         
         <h3 className='content'>Alert </h3>

      
   

 
      </div>

    


  
  );
};

export default UserProfile;
