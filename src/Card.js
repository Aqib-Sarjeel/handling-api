import React from "react";
import {Card,CardBody,CardText,CardTitle} from "reactstrap";
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from "react-icons/fa";


const MyCard = ({details})=> {
    return(
        <Card>
            <CardBody className="text-center">
                    <img height="150px" width="150px"
                    alt=""
                     className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large}/>
                    <CardTitle className="text-primary text-lg">
                     {`${details.name?.title} ${details.name?.first} ${details.name?.last}`}
                        
                    </CardTitle>
                    <CardText>
                            <FaMapMarkedAlt /> <br/>
                            {` Pin: ${details.location?.postcode} city: ${details.location?.city}`}<br/>
                            <FaEnvelope/><br/>
                           {` Email: ${details.email}`} <br/>
                           <FaPhone/><br/>
                           {`Phone: ${details.phone}`}
                        </CardText>

                  
                    

            </CardBody>
        </Card>
    )
}
export default MyCard;
