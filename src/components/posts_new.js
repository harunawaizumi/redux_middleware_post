import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../actions'
import {connect} from 'react-redux'



class PostsNew extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    renderField(field) {
        console.log('field', field)
        const { meta : { touched, error, warning}} = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    name={field.input.name}
                    className="form-control"
                    type="text"
                    {...field.input}
                    {...field.meta}
                    />
                <div className="text-help">
                    {touched ? error : ''}
                    {warning}
                </div>
                </div>
        )
    }

    onSubmit (values) {
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })
    }


    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Title for Posts"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}

    if (!values.title) {
        errors.title = "Enter a title"
    }

    if (!values.tags) {
        errors.tags = "Enter some categories"
    }

    if (!values.content) {
        errors.content = "Enter some content please"
    }
    // Validate the inputs from 'values
    return errors
}

function warn (values) {
    const warnings = {}

    if (values.title < 5) {
        warnings.title = 'Hmm, you seem a bit young'
    }



    return warnings
}

export default reduxForm({
    validate,
    warn,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
)


// 1 Identify different pieces of form state
// 2 Make one 'Field' component per piece of state
// 3 User changes a 'Field' input
// 4 User submits form
// 5 We validate inputs and handle form submit

// 'field' is the way to connect input to Field
// component: how to look like (need to pass parameter!)
// name property inside of 'Field' is important to identical to all errors


// input: inputされた内容
// errors: エラー用の内容

// handleSubmit: NOT responsible for fetching data nor posting a request
// 1 User click the submit button
// 2 ReduxForm validate the form
// 3 IF everything looks ok, ready to be submitted

// pristine: no input has touched it yet and the user has not yet selected
// touched: users has touched the field or not

// validate: to check whether there is something in input or not
// warn: to check the detail of each input

// how to use TWO HELPERS at the same time ?
// export default reduxForm({ *** })( connect(null, { ** })( COMPONENT )

// to change the screen automatically
// this.props.history.push('/')