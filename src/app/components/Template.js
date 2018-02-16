import React from "react";
import {Route, Switch} from "react-router-dom";
import Alerts from "./Alerts/Alerts";
import Badges from "./Badges/Badges";
import Buttons from "./Buttons/Buttons";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import ButtonGroup from "./ButtonGroup/ButtonGroup";
import Card from "./Card/Card";
import Carousel from "./Carousel/Carousel";
import Collapse from "./Collapse/Collapse";
import Dropdowns from "./Dropdowns/Dropdowns";
import Forms from "./Forms/Forms";
import InputGroup from "./InputGroup/InputGroup";
import Jumbotron from "./Jumbotron/Jumbotron";
import ListGroup from "./ListGroup/ListGroup";
import Modal from "./Modal/Modal";
import Nav from "./Nav/Nav";
import Navbar from "./Navbar/Navbar";
import Navs from "./Navs/Navs";
import Pagination from "./Pagination/Pagination";
import Popovers from "./Popovers/Popovers";
import Progress from "./Progress/Progress";
import Scrollspy from "./Scrollspy/Scrollspy";
import Tooltips from "./Tooltips/Tooltips";


export default class Template extends React.Component {
    render() {
        return (
            <div>
              
           <Switch>
                <Route exact path="/" component={Alerts}/>
                <Route name="Badges" path="/Badges" component={Badges}/>
                <Route name="Breadcrumb" path="/Breadcrumb" component={Breadcrumb}/>
                <Route name="Buttons" path="/Buttons" component={Buttons}/>
                <Route name="ButtonGroup" path="/ButtonGroup" component={ButtonGroup}/>
                <Route name="Card" path="/Card" component={Card}/>
                <Route name="Carousel" path="/Carousel" component={Carousel}/>
                <Route name="Collapse" path="/Collapse" component={Collapse}/>
                <Route name="Dropdowns" path="/Dropdowns" component={Dropdowns}/>
                <Route name="Forms" path="/Forms" component={Forms}/>
                <Route name="InputGroup" path="/InputGroup" component={InputGroup}/>
                <Route name="Jumbotron" path="/Jumbotron" component={Jumbotron}/>
                <Route name="ListGroup" path="/ListGroup" component={ListGroup}/>
                <Route name="Modal" path="/Modal" component={Modal}/>
                <Route name="Navs" path="/Navs" component={Navs}/>
                <Route name="Navbar" path="/Navbar" component={Navbar}/>
                <Route name="Pagination" path="/Pagination" component={Pagination}/>
                <Route name="Popovers" path="/Popovers" component={Popovers}/>
                <Route name="Progress" path="/Progress" component={Progress}/>
                <Route name="Scrollspy" path="/Scrollspy" component={Scrollspy}/>
                <Route name="Tooltips" path="/Tooltips" component={Tooltips}/>

            </Switch>
       </div>
        );
    }
}