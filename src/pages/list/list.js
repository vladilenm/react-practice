import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import ListItem from './list-item';

class ListPage extends React.Component {
    
    static path = '/list';
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        list: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['renderItems']);
    }

    renderItems(item, idx) {
        return (
            <ListItem 
                key={ idx }
                id={ item.id }
                name={ item.name }
                youtube={ item.youtube }
            />
        );
    }
    
    render() {
        const { items } = this.props.list;
        return (
            <div className='row'>
                <div className='col-xs-12'>
                    <h3>Список видео</h3>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        { items.map(this.renderItems) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps)(ListPage);
