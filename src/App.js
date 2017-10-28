import React, {Component} from 'react';
import './App.css';
import swal from 'sweetalert';

import Header from './Components/Header';
import Action from './Components/Action';
import Options from './Components/Options';

// Stateless Functional Component

const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="wrap">
        <p>{props.name}</p>
      </div>
    </footer>
  )
}

class App extends Component {

  componentDidMount(){
    //console.log("Mounted");
    // get db
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("Updated");
    // Update db here
  }

  state = {
    options: (localStorage.getItem('options') !== null) ? JSON.parse(localStorage.getItem('options')) : [{
      name: 'Learn Javascript',
      active: false,
      done: false
    }],
    inputvalue: 'Add Options'
  }

  //state.options = JSON.parse(localStorage.getItem('options'))

  handleRemoveItem = (e, index) => {

    swal("Are you sure you want to do this?", {
      buttons: ["No", "Yes"],
    }).then((yes) => {
      if (yes) {
        const opts = this.state.options;
        opts.splice(index, 1);

        localStorage.setItem('options', JSON.stringify(opts));

        this.setState({
          options: opts
        });
      } else {
        return;
      }
    });
  }

  handleRemoveAll = (e) => {

    swal({
        title: "Are you sure?",
        text: "once deleted, you will not be able to recover the deleted items.",
        icon: "warning",
        buttons: true,
        dangerMode: true
      })
      .then((willdelete) => {
        if (willdelete) {
          localStorage.removeItem('options');
          this.setState({
            options: []
          })
          swal("Poof! Your option list are gone!", {
            icon: "success"
          });
        } else {
          swal("Your option list are still available!");
        }
      });


  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      inputvalue: e.target.value
    })
  }

  handleAdd = (e) => {
    e.preventDefault();
    const newOption = {
      name: e.target.item.value,
      done: false
    }

    const opts = this.state.options;
    opts.push(newOption);

    localStorage.setItem('options', JSON.stringify(opts));

    this.setState({
      options: opts,
      inputvalue: 'Add Options'
    });
  }

  handleRandomOption = (e) => {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const opts = this.state.options;
    const msg = opts[rand];

    swal(msg.name, "Get up and start working on it!", "success", {
        buttons: ["Cancel", "Ok"]
      })
      .then((yes) => {
        if (yes) {
          if (!opts[rand].active) {
            opts[rand].active = true;

            localStorage.setItem('options', JSON.stringify(opts));

            this.setState({
              options: opts
            });
            swal("Nice", "One step is a big start.");
          }else{
            swal("Opps", "You already started that!","info");
          }

        } else {
          swal("Duh!", "Another lazy day today!");
        }
      })
  }

  render() {
    return ( <div className = "App" >
      <Header title="My ToDo List" />
      <Action handleRandomOption = {this.handleRandomOption}/> 
      <Options options = {this.state.options}
      inputvalue = {this.state.inputvalue}
      handleChange = {this.handleChange}
      handleAdd = {this.handleAdd}
      handleRemoveItem = {this.handleRemoveItem}
      handleRemoveAll = {this.handleRemoveAll}/>
      <Footer name="Coded by: Sonny Tambiac" />
      </div>
    );
  }
}

export default App;