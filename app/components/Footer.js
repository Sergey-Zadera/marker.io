import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-6 col-md-6 col-lg-6 col-lg-12'>
							<h3 className='lead'>
								<strong>Services</strong>
							</h3>
							<ul className='list-inline'>
								<li>Test</li>
								<li>Test</li>
								<li>Test</li>
								<li>Test</li>
							</ul>
						</div>
						<div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
							<h3 className='lead'>
								<strong>Information</strong> and <strong>Copyright</strong>
							</h3>
							<p>Powered by
								<strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong>
								with Flux architecture and server-side rendering.
							</p>
							<p>You may view the
								<a href='https://github.com/Sergey-Zadera/marker.io'>Source Code</a>
								behind this project on GitHub.
							</p>
							<p>© 2015 Marker.Io.</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;