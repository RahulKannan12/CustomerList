import React  from "react";
import "./index.css";

//function CustomerList() {
class CustomerList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      CustomerList : [],
      currentCustomer : ''
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleCustomerAddition = this.handleCustomerAddition.bind(this);
  }

  handleTermChange(event){    
    this.setState({ currentCustomer : event.target.value});
  }

  handleCustomerAddition(){
    if(this.state.currentCustomer == '' || this.state.currentCustomer == null){
      return;
    }
    var CustomerTemp = this.state.currentCustomer;
    var CustomerListTemp = [...this.state.CustomerList];
    CustomerListTemp.push(CustomerTemp);
    this.setState({CustomerList : CustomerListTemp,
    currentCustomer: ''});
    
  }

  render(){
    return (
      <div className="mt-75 layout-column justify-content-center align-items-center">
        <section className="layout-row align-items-center justify-content-center">
          <input type="text" className="large" placeholder="Name" data-testid="app-input" value={this.state.currentCustomer} onChange = {this.handleTermChange}/>
          <button type="submit" className="ml-30" data-testid="submit-button" onClick={this.handleCustomerAddition}>Add Customer</button>
        </section>
  
        {this.state.CustomerList.length > 0 ? <ul className="styled mt-50" data-testid="customer-list">            
            {
            this.state.CustomerList.map((customer,index)=> {
             return <li className="slide-up-fade-in" data-testid="list-item1" key={index}>{customer}</li> 
            })
          }
        </ul> : <div></div>}
      </div>
    );
  }
}  


export default CustomerList