import React from "react";
import NavData from "./NavData";
import Ul from "../Elements/Ul";
import Li from "../Elements/Li";
import Anchor from "../Elements/Anchor";
export default class Nav extends React.Component{
    render() {
        var headerNavigation = NavData;
        return(
          <Ul className="nav bd-sidenav">
              {
                  headerNavigation.mainNavigation.navigationLinks.map(function(item, i){
                      return <li key={i} >
                      <Anchor to={item.linkurl} linkurl={item.linkurl} exact>{item.title}</Anchor>  
                      </li>
                  })
              }
           </Ul>
      );
    }
    }