import React from 'react';
import {Link} from 'react-router';


class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="baner">
							<Link to={'/add'}>
								<img className='thumbnail' src={'./img/baner.jpg'} />
							</Link>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-4 col-md-4">
						<div className="thumbnail">
							<img className='thumbnail' src={'./img/baner.jpg'} />
							<div className="caption">
								<h3>Lorem Ipsum</h3>
								<p>...</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">Lorem Ipsum</a>
									<a href="#" className="btn btn-default" role="button">Lorem Ipsum</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-4 col-md-4">
						<div className="thumbnail">
							<img className='thumbnail' src={'./img/baner.jpg'} />
							<div className="caption">
								<h3>Lorem Ipsum</h3>
								<p>...</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">Lorem Ipsum</a>
									<a href="#" className="btn btn-default" role="button">Lorem Ipsum</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-4 col-md-4">
						<div className="thumbnail">
							<img className='thumbnail' src={'./img/baner.jpg'} />
							<div className="caption">
								<h3>Lorem Ipsum</h3>
								<p>...</p>
								<p>
									<a href="#" className="btn btn-primary" role="button">Lorem Ipsum</a>
									<a href="#" className="btn btn-default" role="button">Lorem Ipsum</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
