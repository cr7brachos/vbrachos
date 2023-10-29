import "./bussiness-development.styles.scss";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";



const BussinessDevelopment = ({title, subtitle, route}) => {
    return (
        <div className='bussiness-development'>
            <h1>{title}</h1>
            <h6 className="h6-custom"><i>{subtitle}</i></h6>
                <LinkContainer to={route}>
                    <Button variant="outline-dark" size="sm">Learn more</Button>
                </LinkContainer>
        </div>
        
    )
}

export default BussinessDevelopment;
