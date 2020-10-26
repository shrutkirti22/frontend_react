import React from "react";
import axios from 'axios';  
import DetailCard from './DetailCard'

class PersonDetails extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            name: "Sasha",
        }
        // this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.getDetailsByName()
    }

  async  getDetailsByName(){
        
        let url = 'http://localhost:5000/isPersonRegistered'
        // alert(this.state.name)
        let myName = "Sasha"
       await  axios.get(url,{myName})
            .then( res => {
                alert(JSON.stringify(res))
                let persons = res.data;
                this.setState({ persons });
                console.log(this.state.persons)
                this.forceUpdate();
            }).then(console.error())
    }

    forceUpdateHandler(){
        this.forceUpdate();
      };

      handleChange=(event)=> {
        this.setState({ [event.target.name]: event.target.value });
        this.forceUpdate();

      } 
     
render(){
    console.log(this.state.persons);
    console.log(this.state.name);
    return(
    <div>
         <input
        type="text"
        name="name"
        value="Sasha"
        onChange={this.handleChange}
        placeholder="Enter Name"
    /> 
    <button type="button" onClick={this.getDetailsByName}>Search</button>

    <DetailCard myData={this.state.persons}/>

</div>)}
}
export default PersonDetails; 