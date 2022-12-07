import React from 'react';
import './HomeMenuBar.css';

const HomeMenuBar = () => {
    return (
        <div className='mt-5 container d-flex justify-content-between align-items-center p-2 border-bottom border-2'>
            <div className='d-flex col-md-6'>

                <p className='mx-2 fw-semibold text-black'>All Posts(32)</p>

                <p className='mx-2 fs-normal'>Article</p>

                <p className='mx-2 fs-normal'>Event</p>

                <p className='mx-2 fs-normal'>Education</p>

                <p className='mx-2 fs-normal'>Job</p>

            </div>
            <div className='col-md-6 d-flex justify-content-end'>
                <div>
                    <button type="button" className="btn btn-light fw-semibold fs-6">Write a Post<i className="px-4 fa-solid fa-caret-down"></i></button>
                    <button type="button" className="mx-2 btn btn-primary fw-semibold fs-6"><i class="fa-solid fa-user-group"></i><span className='px-2'>Join Group</span></button>
                </div>
            </div>
            <br />
        </div>
    );
};

export default HomeMenuBar;