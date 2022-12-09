import React, { useContext } from 'react';
import { GoLocation } from "react-icons/go";
import { RiPencilFill, RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineThumbUp, MdClose } from "react-icons/md";
import { StateContext } from '../../../context/StateProvider';
import img1 from '../../../assets/groups/group1.png';
import img2 from '../../../assets/groups/group2.png';
import img3 from '../../../assets/groups/group3.png';
import img4 from '../../../assets/groups/group4.png';

const groupItem = [
    {
        id: 1,
        image: img1,
        title: "Leisure"
    },
    {
        id: 2,
        image: img2,
        title: "Activism"

    },
    {
        id: 3,
        image: img3,
        title: "MBA"

    },
    {
        id: 4,
        image: img4,
        title: "Philosophy"

    }

]

const RightSideContent = () => {
    const { loggedIn } = useContext(StateContext);
    return (
        <div className='col-md-10'>
            {
                loggedIn ?
                    <>
                        <div className='d-flex justify-content-between border-bottom border-1 py-2'>

                            <div className='d-flex form-label-group' >
                                <div className='d-flex align-items-center' style={{ margin: '0' }}><GoLocation className='fs-4' ></GoLocation>
                                    <input type="text" placeholder='Enter your location' className='form-control border-0 shadow-none' style={{ fontSize: '.9rem' }} />
                                </div>
                            </div>
                            <MdClose className='fs-4'></MdClose>
                        </div>
                        <div className='mt-4 d-flex' style={{ color: '#5C5C5C' }}>
                            <div className='d-flex align-items-stretch'>
                                <RiErrorWarningLine className='fs-5' ></RiErrorWarningLine>
                            </div>
                            <p className='mx-1' style={{ fontSize: '.8rem', wordWrap: 'break-word' }}> Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                        <div className='mt-4'>
                            <div className='d-flex align-items-center'>
                                <MdOutlineThumbUp className='fs-5'></MdOutlineThumbUp>
                                <p className='mx-2 fw-semibold' style={{ margin: '0' }}>Recommanded Groups</p>

                            </div>

                            {
                                groupItem?.map(group => <div key={group.id} group={group} className='mt-4'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <img src={group.image} alt="" />
                                            <p className='mx-2' style={{ margin: '0', fontSize: '.9rem' }}>{group.title}</p>
                                        </div>
                                        <div>
                                            <button className='border-0 px-3 rounded-pill'>Follow</button>
                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>
                    </>
                    :
                    <>
                        <div className='d-flex justify-content-between border-bottom border-1 py-2'>

                            <div className='d-flex \' >
                                <p className='' style={{ margin: '0' }}><GoLocation className='fs-4' ></GoLocation><span className='fs-6 fw-semibold mx-2'>Noida, India</span></p>
                            </div>

                            <RiPencilFill className='fs-4'></RiPencilFill>
                        </div>
                        <div className='mt-4 d-flex' style={{ color: '#5C5C5C' }}>
                            <div className='d-flex align-items-stretch'>
                                <RiErrorWarningLine className='fs-5' ></RiErrorWarningLine>
                            </div>
                            <p className='mx-1' style={{ fontSize: '.8rem', wordWrap: 'break-word' }}> Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </>
            }
        </div >

    );
};

export default RightSideContent;