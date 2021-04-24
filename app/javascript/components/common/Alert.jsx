import React from 'react';

class Alert extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.timer = setTimeout(
            this.props.onClose,
            3000
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    alertClass (type) {
        let classes = {
            error: 'alert-danger',
            alert: 'alert-warning',
            notice: 'alert-info',
            success: 'alert-success'
        };
        return classes[type] || classes.success;
    }

    render() {
        const message = this.props.message;
        const alertClassName = `alert ${ this.alertClass(message.type) } fade in`;

        // console.log(message.text);

        return(
            <div className={ alertClassName }>
            <button className='close'
                onClick={ this.props.onClose }>
                &times;
            </button>
            { message }
            </div>
        );
    }
}
export default Alert;

// Alert.propTypes = {
//     onClose: PropTypes.func,
//     timeout: PropTypes.number,
//     message: PropTypes.object.isRequired
// };

// Alert.defaultProps = {
//     timeout: 3000
// };