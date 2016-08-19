import React from 'react';
import { bindAll } from 'lodash';
import ListItem from './list-item';

export default class ListPage extends React.Component {
    
    static path = '/list';

    constructor(props) {
        super(props);

        this.state = {
            items: [
                1, 2
            ]
        };

        bindAll(this, ['renderItems']);
    }

    renderItems(item, idx) {
        return (
            <ListItem 
                key={ idx }
                id={ item }
            />
        );
    }
    
    render() {
        return (
            <div>
                <h3>List</h3>
                <ul>
                    { this.state.items.map(this.renderItems) }
                </ul>
            </div>
        );
    }
    
}
