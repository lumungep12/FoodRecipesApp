import React from 'react';

const Footer = () => {
    return(
        <>
         <footer className="footer text-center">
                    <div>
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-primary btn-social mx-1" href="https://stackoverflow.com/users/16274859/lumunge"><i className="fab fa-stack-overflow"></i></a>
                        <a className="btn btn-outline-primary btn-social mx-1" href="https://github.com/lumungep12"><i className="fab fa-github"></i></a>
                        <a className="btn btn-outline-primary btn-social mx-1" href="linkedin.com/in/lumunge-erick-b3521b19a"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-primary btn-social mx-1" href="https://www.lumunge.dev"><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container text-dark"><small>created by <a href="https://github.com/lumungep12">lumunge</a></small></div>
        </div>
        </>
    )
}

export default Footer;