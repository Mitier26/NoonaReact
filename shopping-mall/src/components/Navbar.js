import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();

    const gotoLogin = () => {

        navigate('/login')
    }

    const search = (event) => {
        if (event.key === "Enter") {
            const keyword = event.target.value;

            navigate(`/?q=${keyword}`);
        }
    }

    return (
        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser} />
                <div onClick={() => gotoLogin()}>로그인</div>
            </div>
            <div className='nav-section'>
                <img src='https://e7.pngegg.com/pngimages/92/1010/png-clipart-pokemon-logo-pokemon-logo-thumbnail.png'></img>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu, index) => (<li key={index}>{menu}</li>))}
                </ul>
                <div className='search-area'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder='제품검색' onKeyDown={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar