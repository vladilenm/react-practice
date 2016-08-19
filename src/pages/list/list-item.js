import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { openModal } from '../../components/modal/index';
import EditModal from './edit-modal';

class ListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);
        
        this.edit = this.edit.bind(this);
    }
    
    edit() {
        this.props.dispatch( openModal({
            content: <EditModal />,
            title: 'Редактировать',
            btnText: 'Сохранить'
        }) );
    }
    
    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={`/list/${ this.props.id }`}>{ this.props.name }</Link></td>
                <td>
                    <button className='btn btn-success' onClick={ this.edit } >
                        <i className='glyphicon glyphicon-pencil' />
                    </button>
                    <button className='btn btn-danger'>
                        <i className='glyphicon glyphicon-remove' />
                    </button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ListItem);
