import React from 'react';
import './App.css';
import Header from './app/partials/header';
import BlogList from './app/users/blog-list';
import PropTypes from "prop-types"

const App = (props) => {
  return (
      <div>
          <Header title={"My Blog"} />
          <MainElement />
      </div>
  )

}
App.propTypes = {
  title: PropTypes.string.isRequired
}
App.defaultProps = {
  title: "MyName"
}


const MainElement = (props) => {
  return (
      <main>
      <BlogList/>
      </main>
  )
}

export default App;
