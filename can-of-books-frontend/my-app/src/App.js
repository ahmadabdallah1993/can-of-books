import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      arr:[],
      cersel: false
    }
  }

  componentDidMount = () =>{
    axios.get(`http://localhost:3001/bookss`).then( result =>{
    console.log(result.data)

    this.setState({
      arr: result.data,
      cersel: true
    })

    }).catch( err =>{
      console.log(err)
    })
  }


  render() {
    return (
      <>
        <div class="p-5 text-center bg-light">
          <h1 class="mb-3">Welcome to Books website</h1>
        </div>
        <Carousel variant="dark" >
      {this.state.arr.map( item =>{
        return(
          
         

<Carousel.Item>
{/* <img
  className="d-block w-100"
  src="holder.js/800x400?text=First slide&bg=f5f5f5"
  alt="First slide"
/> */}
<br></br>
{/* <Carousel.Caption> */}
<h3>title: {item.title}</h3>
<br></br>
          <p>status: {item.status}</p>
          <p>description: {item.description}</p>
{/* </Carousel.Caption> */}
<br></br>
<br></br>
</Carousel.Item>
    
      )})}
</Carousel>









        <div class="p-5 text-center bg-light">
          <h1 class="mb-3">Done by: Ahmad Yaghi</h1>
        </div>
      </>
    );
  }
}
export default App;
