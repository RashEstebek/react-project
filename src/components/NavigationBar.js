import React from 'react'

const NavigationBar = () => {
  return (
    <div>
        <nav className='navigation'>
            <a href='/profile' className='profile-name'>Rash Estebek</a>
            <div className='navigation-menu'>
                <ul>
                    <li>
                        <a href='/about_me'>About Me</a>
                    </li>
                    <li>
                        <a href='/education'>Education</a>
                    </li>
                    <li>
                        <a href='/experience'>Experience</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavigationBar