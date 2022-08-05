import React from "react";
import axios from "axios";
import Summary from "./Summary";
import Countries from "./Countries"
class Detail extends React.Component{
    
  constructor(props)
  {
      super(props);
      
      this.state = {
        countries:[],
        global:[],
        currentDate:null,
        loading:true,
      
        txt: '',
    };


  }

  insert=(e)=>{
     this.setState({[e.target.name]: e.target.value});
     //this.show();
  } 

   show=()=>{
       alert(this.state.txt);
   }

  



   async componentDidMount(){
       const res= await axios.get("https://api.covid19api.com/summary");
       //console.log(res);
       this.setState({countries: res.data.Countries});
       this.setState({global:res.data.Global});
       this.setState({currentDate:res.data.Date});
       this.setState({loading:false});
      

    }


   



    render(){

        //we are going to fileter the array here when the component rerender
        let fltCountry=this.state.countries.filter((cnt)=>{
            return cnt.Country.toLowerCase().indexOf(this.state.txt.toLowerCase())!==-1;
        });

       
        if(this.state.loading)
        {
            return <h1>Loading ....... </h1>;
        }

        return(

            <div>
             <Summary summary={this.state.global} 
             currentDate={this.state.currentDate} />     
             <br/> <br />
             <input  className="form-control" name="txt" value={this.state.txt} onChange={this.insert} id="myInput" type="text" placeholder="Enter Your Country Name To Search.." />
             <br/>
                     
            
            <table className="table table-hover table-responsive-sm table-bordered table-striped">

                <thead>
                    <tr className="table-primary">
                        <th>Country</th>
                        <th>New Confirmed </th>
                        <th>Total Confirmed</th>
                        <th>Total Recovered</th>
                        <th>Total Deaths</th>
                    </tr>
                    </thead>

                    <tbody id="myTable">
                        
                        {fltCountry.map(cnt=>(
                            <Countries countries={cnt} key={cnt.Country} />
                        ))}

                    </tbody>

           


            </table>

             <div ><br/><br/><br></br></div>
             <div ><br/><br/><br></br></div>
             <div ><br/><br/><br></br></div>
             <div ><br/><br/><br></br></div>
            </div>
        );
    }
}

export default Detail;