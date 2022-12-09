import React, { useContext } from 'react';
import { StateContext } from '../../../context/StateProvider';
import { MdExitToApp } from "react-icons/md";

const HomeMenuBar = () => {
    const { loggedIn } = useContext(StateContext);

    return (
        <div className='mt-4 container d-flex justify-content-between align-items-center p-2 border-bottom border-2' style={{ padding: '0' }}>
            <div className='d-flex col-md-6'>

                <p className='d-none d-md-block  mx-2 fw-bolder text-black' style={{ margin: '0', fontSize: '1.2vw' }}>All Posts(32)</p>

                <p className='d-block d-md-none d-lg-none d-xl-none d-xxl-none mx-2 fw-bolder text-black' style={{ margin: '0' }}>Posts(368)</p>

                <p className='d-none d-md-block  mx-2' style={{ margin: '0', fontSize: '1.2vw' }}>Article</p>

                <p className='d-none d-md-block  mx-2 ' style={{ margin: '0', fontSize: '1.2vw' }}>Event</p>

                <p className='d-none d-md-block  mx-2 ' style={{ margin: '0', fontSize: '1.2vw' }}>Education</p>

                <p className='d-none d-md-block  mx-2 ' style={{ margin: '0', fontSize: '1.2vw' }}>Job</p>
            </div>
            <div className='col-md-6 container-fluid d-flex justify-content-end' style={{ marginRight: '0', paddingRight: '0' }}>
                <div className='d-none d-md-flex'>
                    <button type="button" className="btn btn-light fw-semibold fs-6" style={{ backgroundColor: '#EDEEF0' }}>Write a Post<i className="mx-2 fa-solid fa-caret-down"></i></button>
                </div>
                <div className='d-none d-md-flex mx-2 '>
                    {
                        loggedIn ?
                            <button type="button" className="btn btn-light fw-semibold fs-6" style={{ backgroundColor: '#EDEEF0' }}><MdExitToApp className='me-2'></MdExitToApp>Leave Group</button>
                            :
                            <button type="button" className="btn btn-primary fw-semibold fs-6"><i className="fa-solid fa-user-group"></i><span className='px-2'>Join Group</span></button>
                    }

                </div>
                <div className='d-flex d-md-none d-lg-none d-xl-none d-xxl-none'>
                    <button type="button" className="btn btn-light fw-semibold fs-6" style={{ backgroundColor: '#EDEEF0' }}>Filter: All<i className="mx-2 fa-solid fa-caret-down"></i></button>
                </div>
            </div>
            <br />
        </div >
    );
};

export default HomeMenuBar;