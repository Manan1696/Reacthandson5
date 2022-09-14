import React from 'react';
import high from './high';

class product extends React.Component{
    render() {
        return(
            <div>
                {
                    this.props.products.map((item,index) => {
                        return (
                            <p key={index}>{item.productName} {item.price}</p>
                        )
                    })
                }
            </div>
        )
    }
}

const EnhancedComponent = high(product)


export default EnhancedComponent