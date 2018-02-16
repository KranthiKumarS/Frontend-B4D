import React from "react";
import {BrowserRouter} from "react-router-dom";
import Column from "./global/Columns/Column";
import Container from "./global/Container/Container"
import Row from "./global/Row/Row";
import Nav from "./Nav/Nav";
import Template from "./Template";
import Header from "./Header/Header";
import Form from "./Elements/Form";
import Input from "./Elements/Input"

export default class Layout extends React.Component {
  render() {
    return (
      <div>
          <Header/>
          <Container className="container-fluid">  
            <Row className="row flex-xl-nowrap">
              <Column className="col-12 col-md-3 col-xl-2 bd-sidebar">
            
              <Form className="bd-search d-flex align-items-center">

               <Input type="search" className="form-control ds-input" placeholder="Search..." autocomplete="off"/>
              </Form>
              <h4>Components</h4>
               <nav className="collapse bd-links"><Nav/></nav>
               
              
              </Column>
              <Column className="col-8">
              <BrowserRouter>
              <Template/>
              </BrowserRouter>
              </Column>
            </Row>
          </Container>
       </div>
    );
  }
}
