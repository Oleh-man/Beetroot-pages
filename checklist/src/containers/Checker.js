import React from 'react'
import Input from '../components/Input'
import Todo from '../components/Todo'
import Filter from '../components/Filter'

class Checker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            label: "",
            toDos: ['dsdsd', 'sdsds']
        }
    }

    onLableChange = (e) => {
        this.setState({
            label: e.target.value
        })
        console.log(this.state.label)
    }

    submit = (e) => {
        e.preventDefault();
        this.setState(oldState => {
            return {
                ...oldState,
                

            }
        })

        
        
    }
    
    addItem = () => {
        let text = this.state.label
        console.log(text);
        this.setState(oldState => {
            return {
                ...oldState,
                toDos: [...oldState.toDos, text]

            }
        })
    }

    

    
    render() {
        console.log('state is', this.state);
        return (
          <div className="App">
           <Input addItem={this.addItem} list={this.state} onLableChange={this.onLableChange}/>
           <Todo addItem={this.addItem} list={this.state} />
           <Filter />
          </div>
        );
    }
  }
  
  export default Checker;
  