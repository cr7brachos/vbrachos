import Alert from 'react-bootstrap/Alert';

const AlertComponent = ({ showState, variantState, message }) => {
    return (
        <Alert
           show={showState} 
           variant={variantState}> 
           {message}
        </Alert>
    )
}

export default AlertComponent;