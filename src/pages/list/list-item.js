import React, { PropTypes } from 'react';
import { Link } from 'react-router'; 

export default class ListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    };
    
    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td><Link to={`/list/${ this.props.id }`}>{ this.props.name }</Link></td>
                <td>
                    <button className='btn btn-success'>
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
