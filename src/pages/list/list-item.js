import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListItem extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired
    };
    
    render() {
        return (
            <li>
                <Link to={`/list/${ this.props.id }`}>Item { this.props.id }</Link>
            </li>
        );
    }
    
}
