import logo from './assets/logo.svg'
import arrow from './assets/arrow.svg'

import Button from './ui/Button'

import './styles/header.css'

const Header = () => {
    return (
        <header className='header'>
            <img className='logo' src={ logo } alt="" />

            <nav>
                <div className="number header-items">
                    <p>0 800 750 643</p>
                    <img src={ arrow } alt="" />
                </div>

                <div className='about-us header-items'>
                    <p>ПРО НАС</p>
                    <img src={ arrow } alt="" />
                </div>

                <div className='price header-items'>
                    <p>ЦЕНЫ</p>
                </div>

                <div className='contacts header-items'>
                    <p>КОНТАКТЫ</p>
                </div>

                <div className='account'>
                    <Button content='ВХОД' type='one'  />
                    <Button content='РЕГИСТРАЦИЯ' type='two'/>
                </div>

                <div className='switch-lang header-items'>
                    <p>РУС</p>
                    <img src={ arrow } alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Header