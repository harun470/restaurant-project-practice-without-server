import React, { Component } from 'react'
import MenuItem from './MenuItem';
import MenudishDetail from './dishDetail';
import {Button, CardColumns, Modal, ModalBody, ModalFooter} from 'reactstrap'
import { connect } from 'react-redux';

const mapStateToProps=(state)=>{
    return{
        dishes:state.dishes,
        comments:state.comments
    }
    
}

 class Menu extends Component {
     state={
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
        let menu= this.props.dishes.map(item=>{
            return (
                <MenuItem dish={item} key={item.id} dishSelect={this.dishSelect} />
          )
        })

        let dishDetail=null;
        if(this.state.selectedDish !=null){
            const comments=this.props.comments.filter(comment=>{
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
export default connect(mapStateToProps) (Menu);