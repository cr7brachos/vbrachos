import "./bussiness-development.styles.scss";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";


const BussinessDevelopment = ({title}) => {
    return (
        <div className='bussiness-development'>
            <h1>{title}</h1>
                <LinkContainer to="/bussiness-development">
                    <Button variant="primary">Learn more</Button>
                </LinkContainer>
        </div>
        
    )
}

export default BussinessDevelopment;
