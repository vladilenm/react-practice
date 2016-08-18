import React, { PropTypes } from 'react';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './styles.less';

class HomePage extends React.Component {
    
    static path = '/';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        bindAll(this, ['renderTodos', 'inputOnChange', 'addTodo']);
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        const { todos } = this.props.home;
        const id = todos[todos.length - 1].id + 1;
        const name = this.state.todoName;
        this.props.dispatch( addTodo(id, name) );
        this.setState({ todoName: ''});
    }

    renderTodos(item, idx) {
        return (
            <li key={ idx }>{ item.name }</li>
        );
    }
    
    render() {
        const { todoName } = this.state;
        const { todos, error } = this.props.home;
        return (
            <div className='row-fluid b-home'>
                <div className='col-xs-12'>
                    <ul>
                        { todos.map(this.renderTodos) }
                    </ul>
                    <div className='col-xs-4'>
                        <Input
                            onChange={ this.inputOnChange }
                            value={ todoName }
                            error={ error }
                        />
                        <button className='btn btn-primary' onClick={ this.addTodo }>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

function mapStateToProps(state) {
    return {
        home: state.home  
    };
}

export default connect(mapStateToProps)(HomePage);
