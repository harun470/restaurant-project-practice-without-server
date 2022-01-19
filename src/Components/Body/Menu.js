import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import COMMENTS from '../../data/comments'
import MenuItem from './MenuItem';
import MenudishDetail from './dishDetail';
import {Button, CardColumns, Modal, ModalBody, ModalFooter} from 'reactstrap'

 class Menu extends Component {
     state={
         dishes: DISHES,
         selectedDish:null,
         comments:COMMENTS,
         modalOpen:false
     }
      dishSelect=(dish)=>{
        this.setState({
            selectedDish:dish
        })
        this.toggleModal()
     }
     toggleModal=()=>{
         this.setState({
             modalOpen:!this.state.modalOpen
         })
     }
    render() {
        let menu= this.state.dishes.map(item=>{
            return (
                <MenuItem dish={item} key={item.id} dishSelect={this.dishSelect} />
          )
        })

        let dishDetail=null;
        if(this.state.selectedDish !=null){
            const comments=this.state.comments.filter(comment=>{
                return comment.dishId === this.state.selectedDish.id
            })
            dishDetail= <MenudishDetail dish={this.state.selectedDish} comments={comments} />
        }
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={this.toggleModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;