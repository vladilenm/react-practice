import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { closeModal } from '../../../components/modal/index';
import Input from '../../../components/ui/input/index';

class EditModal extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onSave: PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.id,
            name: this.props.name,
            youtube: this.props.youtube,
            errors: {
                name: '',
                youtube: ''
            }
        };

        bindAll(this, ['close', 'changeName', 'changeLink', 'save']);
    }

    close() {
        this.props.dispatch( closeModal() );
    }

    changeName(name) {
        this.setState({ name });
    }

    changeLink(youtube) {
        this.setState({ youtube });
    }

    save() {
        const { id, name, youtube } = this.state;
        const errorTitle = 'Поле не должно быть пустым!';
        const errors = {
            name: '',
            youtube: ''
        };
        if (name === '') {
            errors.name = errorTitle;
        }
        if (youtube === '') {
            errors.youtube = errorTitle;
        }

        this.setState({ errors });

        if (errors.name || errors.youtube) {
            return;
        }

        this.props.dispatch( this.props.onSave({ id, name, youtube }) );
        this.close();
    }
    
    render() {
        return (
            <div>
                <div className='modal-body'>
                    <p><b>ID:</b> { this.state.id }</p>
                    <Input onChange={ this.changeName } value={ this.state.name } error={ this.state.errors.name } />
                    <Input onChange={ this.changeLink } value={ this.state.youtube } error={ this.state.errors.youtube } />
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-default' onClick={ this.close }>Закрыть</button>
                    <button className='btn btn-success' onClick={ this.save }>Сохранить</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(EditModal);

