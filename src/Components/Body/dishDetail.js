import React from 'react'
import { Card, CardBody, CardImg } from 'reactstrap'
import BodyloadComment from './loadComment'
import BodycommentForm from './commentForm'

export default function dishDetail(props) {
    
    return (
        <div>
            <Card style={{margin:'10px'}}>
                <CardImg src={props.dish.image} alt='dish image' width='100%' />
                <CardBody style={{textAlign:'Left'}}>
                    <p>{props.dish.name}</p>
                    <p>{props.dish.description}</p>
                    <p>{props.dish.price}/-</p>
                    <hr/>
                    <BodyloadComment comment={props.comments} />
                    <hr/>
                    <BodycommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    )
}
