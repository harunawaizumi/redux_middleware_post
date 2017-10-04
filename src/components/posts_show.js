/**
 * Created by haruna on 9/26/17.
 */
import React, { Component } from 'react'
import { fetchPost, deletePost } from '../actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class PostsShow extends Component {
    constructor(props) {
        super(props)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchPost(id);
    }

    onDeleteClick () {
        const { id } = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/')
        });
    }

    render () {
        const { post } = this.props
        console.log('post', post)

        if (!post) {
            return <div>Loading ... </div>
        }

        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-ex-right"
                    onClick={this.onDeleteClick}
                >
                    Delete Post
                </button>
                <h3> {post.title}</h3>
                <h6> Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    console.log('ownprops', posts)
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost, deletePost })( PostsShow )

// this.props === ownProps

// 1 render 'Loading'
// 2 connect component, mapStateToProps, and action creators
// 3 componentDidMount to get data
// 4 render component again