import React from 'react'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import {connect} from 'react-redux'
// import {robot} from '../robots'
import {Header,Container,Segment,Dimmer} from 'semantic-ui-react'
import {setSearchField,requestSearchRobot} from '../Action'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobot.searchField,
    robot: state.requestRobot.robot,
    error: state.requestRobot.error,
    isPending: state.requestRobot.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      onChange : (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobot : ()=> dispatch(requestSearchRobot())
    }
}

class App extends React.Component {
  /* Now no need of redux
  constructor(props){
    super(props)
    this.state = {
      robot  :robot,
      // searchField : ""  # change to redux
    }
  }
*/

  async componentDidMount(){
    this.props.onRequestRobot()
    /**
      Bellow code change in redux
     console.log(this.props.onRequestRobot);
     let url = "https://jsonplaceholder.typicode.com/users"
     let responce = await fetch(url,{
       method:'GET',
       cors :'no-cors',
       headers:{
         'Content-Type':'application/json',
         'Accept':'application/json'
       },
     })
     const userData =await responce.json()
     this.setState({
       robot : userData
     })
     */
  }

  // onChange = (e) => {
  //   this.setState({
  //     searchField:e.target.value
  //   })
  // }  change to redux

  render(){
    const { searchField,onChange,robot,isPending } = this.props
    const filterData = robot.filter(robot=>{
      return robot.name.toUpperCase().includes(searchField.toUpperCase()) || robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return(
      <Container >
        <Header as="h1" className="text-center text-muted" >My Friends</Header>
         <SearchBar searchChange = {onChange} />
          { isPending  ? <Segment> <Dimmer active inverted >Please Wait...</Dimmer> </Segment> : <Card   robots={filterData} /> }
          <hr />
          <Header as="h3" className="text-center text-muted " >©2020. All rights reserved. </Header>
      </Container>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
