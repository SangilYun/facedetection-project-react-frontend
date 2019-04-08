import React from 'react';
import './Profile.css';

const Profile= ({isProfileOpen, toggleModal}) =>{
    return (
    <div className="profile-modal">
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center bg-white">
            <main className="pa4 black-80 w-80">
                <img
                    src="http://tachyons.io/img/logo.jpg"
                    className="h3 w3 dib" alt="avatar"/>
                <h1>John Doe</h1>
                <h4>Images Submitted: 5</h4>
                <p>Member since: Janurary</p>
                <hr/>
                <lable className="mt2 fw6" htmlFor="user-name">Name:</lable>
                <input 
                    className="pa2 ba w-100" 
                    placeholder="john"
                    type="text" 
                    name="user-name"  
                    id="name"
                    />
                <lable className="mt2 fw6" htmlFor="user-age">Age:</lable>
                <input 
                    className="pa2 ba w-100" 
                    placeholder="56"
                    type="text" 
                    name="user-age"  
                    id="age"
                    />
                <lable className="mt2 fw6" htmlFor="user-name">Pet:</lable>
                <input 
                    className="pa2 ba w-100" 
                    placeholder="dragon"
                    type="text" 
                    name="user-pet"  
                    id="pet"
                    />
                <div className="mt4" style={{display:'flex', justifyContent:'space-evenly'}}>
                    <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'>
                        Save
                    </button>
                    <button className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                        onClick={toggleModal}>
                        Cancel
                    </button>
                </div>
            </main>
            <div className='modal-close' onClick={toggleModal}>&times;</div>
        </article>
    </div>
    )
}

export default Profile;