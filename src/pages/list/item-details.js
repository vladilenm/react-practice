import React, { PropTypes } from 'react';

export default class ItemDetails extends React.Component {
    
    static propTypes = {
        routeParams: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.routeParams.id
        };
    }
    
    render() {
        return (
            <div>
                <h1>Item details { this.state.id } works!</h1>
            </div>
        );
    }
    
}
