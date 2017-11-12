import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import { Grid, Col, Cell, Row } from '../Grid';
import { animateScrollTo } from '../../common/animateScroll';
import './Blog.less';

export class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getBlogPosts } = this.props;
    const userId = 1;

    getBlogPosts(userId);
  }

  scrollPostIntoView(e) {
    const containerNode = ReactDOM.findDOMNode(this).parentNode;
    const postNode = e.target;

    setTimeout(() => {
      const postRect = postNode.getBoundingClientRect();
      const containerRect = containerNode.getBoundingClientRect();
      const topDiff = postRect.top - containerRect.top;
      const bottomDiff = postRect.bottom - containerRect.bottom;
      let scrollTop = 0;

      if(bottomDiff > 0) { /* Bottom off screen */
        scrollTop += bottomDiff;
      }

      if(topDiff - scrollTop < 0) { /* Top off screen */
        scrollTop += topDiff - scrollTop;
      }

      animateScrollTo(containerNode, containerNode.scrollTop + scrollTop, 250);

    }, 100);
  }

  togglePost(e, postId) {
    const { openedPost } = this.state;
    postId = postId === openedPost ? undefined : postId;

    if(postId){
      this.scrollPostIntoView(e);
    }

    this.setState({ openedPost: postId });
  }

  // TODO :: refactor and optimize the className applications of 'is-opened' and 'is-focused'
  // TODO :: make button to apply 'is-full'
  renderPosts() {
    const { posts } = this.props;
    const { openedPost } = this.state;

    return posts.map((post, i) => (
      <Cell key={ i }
        className={ ClassNames('post', { 'is-opened is-full': i === openedPost }) }
        onClick={ (e) => this.togglePost(e, i) }>
        <h3>{ post.title }</h3>
        <p>{ post.content }</p>
      </Cell>
    ));
  }

  render() {
    const { ...props } = this.props;
    const { openedPost } = this.state;
    const posts = this.renderPosts();

    return (
      <Grid className='Blog' { ...props }>
        <Row>
          <Col className={ ClassNames({ 'is-focused is-full': openedPost % 3 === 0, 'one-focused is-full': openedPost > -1 }) }>
            { posts.filter((p,i) => i % 3 === 0) }
          </Col>
          <Col className={ ClassNames({ 'is-focused is-full': openedPost % 3 === 1, 'one-focused is-full': openedPost > -1 }) }>
            { posts.filter((p,i) => i % 3 === 1) }
          </Col>
          <Col className={ ClassNames({ 'is-focused is-full': openedPost % 3 === 2, 'one-focused is-full': openedPost > -1 }) }>
            { posts.filter((p,i) => i % 3 === 2) }
          </Col>
        </Row>
      </Grid>
    );
  }
};
