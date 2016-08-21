import React, { PropTypes } from 'react';
import { Header } from './components/index';
import { Modal } from './components/modal/index';
import { TopAlert } from './components/top-alert/index';
import { DevTools } from './utils/index';

export default class App extends React.Component {
    
    static propTypes = {
        children: PropTypes.any.isRequired  
    };
    static path = '/';
    
    render() {
        return (
            <div className='container-fluid'>
                <TopAlert />
                <Modal />
                <Header />
                { this.props.children }
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
    
}
