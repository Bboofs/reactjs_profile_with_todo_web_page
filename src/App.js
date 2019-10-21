import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/pages/header'
import Home from './components/pages/home_banner';
import About from './components/pages/about';
import Services from './components/pages/services';
import Testimonials from './components/pages/testimonials';
import Blog from './components/pages/blog';
import Portfolio from './components/pages/portfolio';
import Footer from './components/pages/Footer'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import uuid from 'uuid';
import axios from 'axios';
import './App.css';


class App extends React.Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Learn react js',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'ALC Challenge',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Leave Office',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Crossover application',
        completed: false
      }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      //.then(res => console.log(res.data))
      .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    //console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (title) => {

    /*
    // all of below is replaced with the API call

    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] });
    */
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }
  /*
  printDateYr = () => {
    return new Date().getFullYear();
  }

  myFocusFunction = () => {
    return '';
  }
  
  myBlurFunction = () => {
    return 'Email Address';
  }
  */
  render() {
    return (
      <Router>
        <div className="App">

          { /* <!--================START of Header Menu Area =================--> */}

          <Header exact path="/" component={Header} />

          { /* <!--================END of Header Menu Area =================--> */}

          <Route exact path="/todo" render={props => (
            <section className="todo_list_area p_120">
              <div className="container">
                <div className="main_title">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="home_left_img">
                        <img src="img/banner/home-left-1.jpg" alt="Home Banner" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner_content">
                        <React.Fragment>
                          <AddTodo addTodo={this.addTodo} />
                          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                        </React.Fragment>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )} />

          { /* <!--================START of Home Banner Area =================--> */}

          <Route exact path="/" component={Home} />

          { /* <!--================End Home Banner Area =================--> */}

          { /* <!--================START of Welcome Area =================--> */}

          <Route exact path="/about" component={About} />

          { /* <!--================End Welcome Area =================--> */}

          { /* <!--================START of Feature Area =================--> */}

          <Route exact path="/services" component={Services} />

          {/* <!--================End Feature Area =================--> */}

          { /* <!--================Projects Area =================--> */}

          <Route exact path="/portfolio" component={Portfolio} />

          { /* <!--================End Projects Area =================--> */}

          { /* <!--================Testimonials Area =================--> */}

          <Route exact path="/" component={Testimonials} />

          { /* <!--================End Testimonials Area =================--> */}

          { /* <!--================Latest Blog Area =================--> */}

          <Route exact path="/blog" component={Blog} />

          { /* <!--================End Latest Blog Area =================--> */}

          { /* <!--================START of Footer Area =================--> */}

          <Footer />

          { /* <!--================End Footer Area =================--> */}
        </div>

      </Router>
    );
  }
}

export default App;
