import React from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

export default function MenuItem(props) {
    
    return (
        <div>
            <Card style={{margin:'10px'}}>
                <CardBody>
                    <CardImg src={props.dish.image} alt='dish image' width='100%' style={{opacity:'.5'}} />
                    <CardImgOverlay>
                        <CardTitle style={{cursor:'pointer'}} onClick={()=>props.dishSelect(props.dish)} >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}
