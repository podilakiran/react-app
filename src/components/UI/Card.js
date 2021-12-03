import classes from './Card.module.css';
import img from '../../assets/meals.jpg';

const Card = props => {
    return (

        <div className="container-fluid mb-10">
            <div className="row">
                <div className="col-3 d-none d-lg-block">
                    <div className="card text-center">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
                <div className="col-6 mx-auto">
                    <div className="row row-cols-1 row-cols-md-3">{props.children}</div>
                </div>
                <div className="col-3 d-none d-lg-block">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio
                            <span className="badge badge-primary badge-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Dapibus ac facilisis in
                            <span className="badge badge-primary badge-pill">2</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Morbi leo risus
                            <span className="badge badge-primary badge-pill">1</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



    );
};

export default Card;