import React from 'react';
import { useAuth } from '../../contexts/auth';

const Home: React.FC = () => {
    const { Logout } = useAuth();

    async function handleLogout(e: any) {
        e.preventDefault();
        Logout();
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        {/* <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div> */}
                        <div className="col-lg-12 login-title">
                            Home
                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button className="btn btn-outline-primary" onClick={handleLogout}>LOGOUT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;