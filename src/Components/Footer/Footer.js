import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                    <footer class="cotainer-footer">
                        <h4>Influencer products</h4>
                        <p>Copyright &#169; 2022  influencer products</p>
                        <p>All rights reserved</p>
                        <div class="icons">
                            <i class="fa fa-facebook-f icon"></i>
                            <i class="fa fa-instagram icon"></i>
                            <i class="fa fa-youtube icon"></i>
                            <i class="fa fa-twitter icon"></i>
                            <i class="fa fa-whatsapp icon"></i>
                         </div>
                    </footer>
            </div>
        )
    }
}
