import React from 'react'
const products = [
    {productName: 'Halo 1',price: "10,00"},
    {productName: 'COD WW2',price: 800},
    {productName: 'GTA Vice city',price: 5000},
    {productName: 'Battlefield',price: 3500},
    {productName: 'PUBG',price: 800},
]

const high = (WrappedComponent) => {
    class searchFunctionality extends React.Component{
        constructor(props){
            super(props);
            this.state={
                search: ''
            }

        }
        updateSearch = (e) =>{
            this.setState({search:e.target.value})
        }
        filterProducts = () => {
            return products.filter(product => product.productName.toLowerCase().includes(this.state.search));
          }
          render(){
            const updatedProducts = this.filterProducts();
          return (
            <div>
                <input type="text" onChange={this.updateSearch}></input>
                <WrappedComponent products={updatedProducts} {...this.props}/>
            </div>
          )
    }
}
  return searchFunctionality;
}

export default high;