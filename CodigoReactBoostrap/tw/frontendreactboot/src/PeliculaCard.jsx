import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const PeliculaCard = ({ pelicula, showSinopsis = false }) => {

    const RenderSinopsis = (sinopsis) => {
        if(showSinopsis)
        return (
            <Card.Text>
                {sinopsis}
            </Card.Text>
        )
        return null
    }

    return (
        <>
        {(showSinopsis == true)
            ? (
                <Card style={{ maxWidth: '50rem' }} classname="mx-auto">
                    <Card.Header className="small text-end">{pelicula.anio}</Card.Header>
                    <Row className='g-0'>
                        <Col cm={4}>
                            <Card.Img variant="top" src={pelicula.poster !== 'N/A' ? pelicula.poster : 'https://via.placeholder.com/400'}/>
                        </Col>
                        <Col sm={8}>
                            <Card.Body>
                                <Card.Title>{pelicula.titulo}</Card.Title>
                                <Card.Subtitle className="mb-2 small text-body-secondary">PELICULA</Card.Subtitle>
                                {RenderSinopsis(pelicula.sinopsis)}
                            </Card.Body>
                        </Col>
                        </Row>
                        <Col sm={8}>
                            <Card.Footer className="samll text-uppercase">
                                <Link to={`/Editar/${pelicula.peliculaId}`} className="card-link text-decoration-none">Editar</Link>
                                <Link to={`/Eliminar/${pelicula.peliculaId}`} className="card-link text-decoration-none">Eliminar</Link>
                            </Card.Footer>
                        </Col>
                </Card>
            ):
            (
                <Card style={{ maxWidth: '20rem'}} classname="mx-auto h-100">
                    <Card.Header className="small text-end">{pelicula.anio}</Card.Header>
                    <Card.Img variant="top" src={pelicula.poster !== 'N/A' ? pelicula.poster: 'https://via.placeholder.com/400'}/>
                    <Card.Body>
                        <Card.Title>{pelicula.titulo}</Card.Title>
                        <Card.Subtitle className="mb-2 small text-body-secondary">PELICULA</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className="samll">
                        <Link to={`/Detalles/${pelicula.peliculaId}`} className="card-link text-decoration-none">Detalles</Link>
                    </Card.Footer>
                </Card>
            )
        }
      </>
    )
}

export default PeliculaCard;
