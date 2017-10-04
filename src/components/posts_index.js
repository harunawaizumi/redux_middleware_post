/**
 * Created by haruna on 9/25/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import _ from 'lodash'
import {Link} from 'react-router-dom'

class PostsIndex extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount () {
        this.props.fetchPosts()
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        })
    }
    render () {
        console.log('state', this.props.posts)
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts
})


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);

// state.posts[postId] 特定のデータの渡し方
// [ postId: { title: TITLE, id: ID, content: CONTENT }
// connect(null, {auth})(COMPONENT)
// { {auth} : {auth} } = {{auth}}

// 1 UI show up on the screen
// 2 componentDidMount to fetch data to be shown up on the screen
// -　データの取得はasyncだから時間がかかる、そのためUIの表示が終わってからデータをフェッチするのがよい

// mount twice
// 1 after mounting component
// 2 after fetching data

// _.map(OBJECT)
// mapping object

// Link to='/PATH' : ボタンを押した際のリンク先
