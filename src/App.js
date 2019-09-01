import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HeadLine from './components/HeadLine/HeadLine';
import Button from './components/Button/Button';
import ListItem from './components/ListItem/ListItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';

const tempArray = [{
  firstName: 'Joe',
  lastName: 'Bloggs',
  email: 'joe@gmail.com',
  age: 24,
  onlineStatus: true
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
  }
  render () {
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    };
    return (
      <div className="App">
        <Header />
        <section className="main">
          <HeadLine header="Posts" description="Click the button to render posts." tempArray={tempArray} />
          <Button {...configButton} />
          {posts.length > 0 ? (
            <div>
              {posts.map(post => <ListItem key={post.id} title={post.title} description={post.body}/>)}
            </div>
            ) : (
              <p>No posts!</p>
            )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
