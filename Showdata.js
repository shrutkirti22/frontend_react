import React from "react";
import axios from 'axios';  
import DetailCard from './DetailCard'

class Showdata extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        this.getData()
    }


    async  getData() {
        let url = 'http://localhost:5000/getInfo'

         alert(url)
        await axios.get(url)
            .then(res => {
                alert(JSON.stringify(res))
                let persons = res.data;
                this.setState({ persons });
                console.log(this.state.persons)
            }).then(console.error())
    }
    render() {
        return (
            <div>
                 <DetailCard myData={this.state.persons}/>

               hii
                </div>

        );
      }
}
export default Showdata;