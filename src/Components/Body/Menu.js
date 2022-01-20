import React, { Component } from 'react'
import MenuItem from './MenuItem';
import MenudishDetail from './dishDetail';
import {Button, CardColumns, Modal, ModalBody, ModalFooter} from 'reactstrap'
import { connect } from 'react-redux';
import { addComment,fetchDishes } from '../redux/actionCreator';
import Loading from './Loading'


const mapStateToProps=(state)=>{
    return{
        dishes:state.dishes,
        comments:state.comments
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addComment:(dishId,author,rating,comment)=>dispatch(addComment(dishId,author,rating,comment)),
        fetchDishes:()=>dispatch(fetchDishes())
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
     componentDidMount(){
         this.props.fetchDishes()
     }
    render() {
        if(this.props.dishes.isLoading){
            return (
                <Loading />
            )
        }else{
            let menu= this.props.dishes.dishes.map(item=>{
                return (
                    <MenuItem dish={item} key={item.id} dishSelect={this.dishSelect} />
              )
            })
    
            let dishDetail=null;
            if(this.state.selectedDish != null){
                const comments=this.props.comments.filter(comment=>{
                    return comment.dishId === this.state.selectedDish.id
                })
                dishDetail= <MenudishDetail dish={this.state.selectedDish} comments={comments}
                 addComment={this.props.addComment} />
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
}
export default connect(mapStateToProps,mapDispatchToProps) (Menu);