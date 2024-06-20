import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    return (
        <div>
            <div className='login-area'>
                <FontAwesomeIcon icon={faUser} />
                로그인
            </div>
            <div className='logo-area'>
                <img src="https://e7.pngegg.com/pngimages/92/1010/png-clipart-pokemon-logo-pokemon-logo-thumbnail.png" />
            </div>
            <div className='menu-area'>
                <ul>
                    {menuList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar