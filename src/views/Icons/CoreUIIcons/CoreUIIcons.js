import React, { Component } from 'react'
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Progress,
    Row,
    Table,
    Pagination, PaginationItem, PaginationLink,
  } from 'reactstrap';
class CoreUIIcons extends Component {
    render(){
        return(
            <div className="animated fadeIn">
        <Row>
        <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Requested Donation Table
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Customer name</th>
                    <th>Product</th>
                    <th>Date registered</th>
                    <th>Pickup Address</th>
                    <th>Status</th>
                    <th>Shipping Status</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Yiorgos Avraamu</td>
                    <td>Soft Toy</td>
                    <td>2012/01/01</td>
                    <td>California</td>
                    
                    <td>
                      <Badge color="success">Accepted</Badge>
                    </td>
                    <td>
                      <Badge color="success">Delivered</Badge>
                    </td>
                    <td>
                      View
                    </td>
                  </tr>
                  <tr>
                  <td>2.</td>
                    <td>Yiorgos Avraamu</td>
                    <td>Soft Toy</td>
                    <td>2012/01/01</td>
                    <td>California</td>
                    
                    <td>
                      <Badge color="success">Accepted</Badge>
                    </td>
                    <td>
                      <Badge color="success">Delivered</Badge>
                    </td>
                    <td>
                      View
                    </td>
                  </tr>
                  <tr>
                  <td>3.</td>
                    <td>Yiorgos Avraamu</td>
                    <td>Soft Toy</td>
                    <td>2012/01/01</td>
                    <td>California</td>
                    
                    <td>
                      <Badge color="success">Accepted</Badge>
                    </td>
                    <td>
                      <Badge color="success">Delivered</Badge>
                    </td>
                    <td>
                      View
                    </td>
                  </tr>
                  <tr>
                  <td>4.</td>
                    <td>Yiorgos Avraamu</td>
                    <td>Soft Toy</td>
                    <td>2012/01/01</td>
                    <td>California</td>
                    
                    <td>
                      <Badge color="success">Accepted</Badge>
                    </td>
                    <td>
                      <Badge color="success">Delivered</Badge>
                    </td>
                    <td>
                      View
                    </td>
                  </tr>
                  <tr>
                  <td>5.</td>
                    <td>Yiorgos Avraamu</td>
                    <td>Soft Toy</td>
                    <td>2012/01/01</td>
                    <td>California</td>
                    
                    <td>
                      <Badge color="success">Accepted</Badge>
                    </td>
                    <td>
                      <Badge color="success">Delivered</Badge>
                    </td>
                    <td>
                      View
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
        )
    }
}

export default CoreUIIcons;