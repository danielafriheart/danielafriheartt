import React from 'react'
import { Link } from 'react-router-dom';
// Icons =============================>>>>>>>>>>>>>
import GitHubIcon from '@mui/icons-material/GitHub';
import { BsBehance } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
// import {IoLogoFigma} from 'react-icons/io';
// ====================================>>>>>>>>>>>>>

function SideNav() {
    return (
        <div className='fixed z-10 flex flex-col items-center ml-10'>
            <p className='line bg-gray'></p>
            <div className="flex flex-col gap-5">
                <Link to='.com' className=''><GitHubIcon /></Link>
                <Link to='.com' className=''><BsBehance fontSize='large' className='text-red-500'/></Link>
                <Link to='.com' className=''><ImLinkedin2 fontSize='large' /></Link>
            </div>

        </div>
    )
}

export default SideNav