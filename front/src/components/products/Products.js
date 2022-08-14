import React, { Component } from 'react';



class Products extends Component{
    render(){
            const { title, description, img} = this.props
            return (
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img src={img}  alt='...'/>
                </div>

            )
       
    }
}

export default Products