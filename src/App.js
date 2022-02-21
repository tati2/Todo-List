import React, { Component } from "react"
import './App.css';
import Lixeira from './img/lixeira.png'


class App extends Component {

  state = {
    list: "",
    listTask: []
  }

 
  handleChange = (event) => {
    this.setState({
      list: event.target.value
    });
  };

  addItem = (event) => {
    const { listTask, list } = this.state
    if (list.length > 0){
      this.setState({
        list: "",
        listTask:listTask.concat({
          list: list,
          id: Date.now()
        })
      })
    }
    event.preventDefault();    
  }

  removeItem = (id) => {
    const { listTask } = this.state;
    this.setState({
      listTask: listTask.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <div className="App">        
        <form id="to-do-form">
          <input 
            type="text" 
            placeholder="Enter text" 
            value={this.state.list}
            onChange={this.handleChange}
            maxlength = "30"
          />
          <button onClick={this.addItem} type="submit">Add</button>
            {this.state.listTask.map((listTask, index) => (
           <div className="box-list">
              <li className="lista-item">
                {listTask.list}                
              </li>
              <span
                onClick={() => {
                  this.removeItem(listTask.id);
                }}
                key={index}
              >
                <img className="delete" src={Lixeira} alt="lixeira"/>
              </span>
            </div>          
            ))} 
        </form>   
      </div>
    );
  }
}


export default App;
