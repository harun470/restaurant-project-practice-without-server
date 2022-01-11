import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem';
import MenudishDetail from './dishDetail';

 class Menu extends Component {
     state={
         dishes: DISHES,
         selectedDish:null
     }
      dishSelect=(dish)=>{
        this.setState({
            selectedDish:dish
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
                        <div className='col-6'>
                            {menu}
                        </div>
                        <div className='col-6'>
                            {dishDetail}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;