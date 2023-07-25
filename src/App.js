// ===============================
//           Functions
// ===============================

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Alert from './Components/layout/Alert'
import About from './Components/pages/About'
import User from './Components/users/User'
import Practice from './Components/Practice'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css';
import Home from './Components/pages/Home'
import NotFound from './Components/pages/NotFound'

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">   
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />} /> 
                <Route exact path='/about' element={<About />} />
                <Route exact path='/user/:login' element={<User />} />
                <Route exact path='/practice' element={<Practice />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
    );
}

export default App;



// ===============================
//           Classes
// ===============================

// import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './Components/layout/Navbar'
// import Users from './Components/users/Users'
// import axios from 'axios'
// import Search from './Components/users/Search'
// import Alert from './Components/layout/Alert'
// import About from './Components/pages/About'
// import User from './Components/users/User'
// import './App.css';

// class App extends Component {
//   state = {
//     users: [],
//     user: {},
//     repos: [],
//     loading: false,
//     alert: null,
//   }

//   async componentDidMount() {
//     this.setState({ 
//       loading: true 
//     })
    
//     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

//     this.setState({ 
//       users: res.data, 
//       loading: false 
//     })
//   }

//   searchUsers = async (text) => {
//     this.setState({ 
//       loading: true 
//     })
//     const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//     this.setState({ 
//       users: res.data.items, 
//       loading: false 
//     })
//   }

//   getUser = async (username) => {
//     this.setState({ 
//       loading: true 
//     })
//     const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//     this.setState({ 
//       user: res.data, 
//       loading: false 
//     })
//   }

//   getUserRepos = async (username) => {
//     this.setState({ 
//       loading: true 
//     })
//     const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//     this.setState({ 
//       repos: res.data, 
//       loading: false 
//     })
//   }

//   clearUsers = () => {
//     this.setState({ 
//       users: [], 
//       loading: false,
//     })
//   }

//   setAlert = (msg, type) => {
//     this.setState({ alert: { msg, type, } })

//     setTimeout(() => {
//       this.setState({ alert: null })
//     }, 5000)
//   }

//   render() {
//     const { user, users, loading, repos } = this.state

//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className="container">
//             <Alert alert={this.state.alert} />
//             <Routes>
//               <Route exact path='/' element={
//                 <Fragment>
//                   <Search clearUsers={this.clearUsers} searchUsers={this.searchUsers} showClear={users.length > 0 ? true : false} setAlert={this.setAlert} />
//                   <Users loading={loading} users={users} />
//                 </Fragment>
//               } /> 
//               <Route exact path='/about' element={<About />} />
//               <Route exact path='/user/:login' element={
//                 <User getUser={this.getUser} getUserRepos={this.getUserRepos} repos={repos} user={user} loading={loading} />
//               } />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

