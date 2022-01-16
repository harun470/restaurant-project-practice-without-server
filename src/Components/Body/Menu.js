import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem';
import MenudishDetail from './dishDetail';
import {Button, CardColumns, Modal, ModalBody, ModalFooter} from 'reactstrap'

 class Menu extends Component {
     state={
         dishes: DISHES,
         selectedDish:null,
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
            dishDetail= <MenudishDetail dish={this.state.selectedDish} />
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