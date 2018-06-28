import React,{ Component }from 'react'
import axios from 'axios'
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class ButtonDropdowns extends Component {
  constructor(){
    super()
    this.state = {
      Name: "",
      URL: "",
      Status: "",
      Logo: "",
      redirectTo: null

    }
  }

  handleSubmit(event){
    event.preventDefault()
        console.log('handleSubmit')
    
    axios
    .post('../BrandButtons/BrandButtons.js',{
      
    })
  }


  render(){
    return (
      <div>
        <Card>
              <CardHeader>
                <strong>New Advertisement Form</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="Name">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="Name" name="Name" placeholder="Name" />
                      <FormText color="muted">Enter name for Advertisement</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="URL">URL</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="URL" name="URL" placeholder="URL" autoComplete="email"/>
                      <FormText className="help-block">Enter the URL for the Advertisement</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="Status">Status</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="Text" id="Status" name="Status" placeholder="Status" autoComplete="new-password" />
                      <FormText className="help-block">Mention the Status of Advertisement</FormText>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="Logo">File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="Logo" name="Logo" />
                    </Col>
                  </FormGroup>
                    
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick = {this.handleSubmit.bind(this)}><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
        
      </div>
    )
  }

}

export default ButtonDropdowns;
