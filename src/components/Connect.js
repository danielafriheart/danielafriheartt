import React from 'react'
//Icons =======================>>>>>>>>>
//=============================>>>>>>>>>>>>
//Images =======================>>>>>>>>>
import rectangle26 from "../assets/img/rectangle26.png";
import rectangle25 from "../assets/img/rectangle25.png";
import bgDots from "../assets/img/bgDots.png";
import dots1 from "../assets/img/dots1.png";
import { TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
//=============================>>>>>>>>>>>>

export default function Connect() {
    //declare the const and add the material UI style
    const CssTextField = withStyles({
        root: {
            '& label': {
                color: 'gray',
            },
            '& label.Mui-focused': {
                color: 'gray',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'gray',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'gray',
                },
                '&:hover fieldset': {
                    borderColor: 'gray',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'gray',
                },
            },
        },
    })(TextField);
    return (
        <>
            <div className='lg:h-[85vh] h-full py-20 relative'>
                <img src={bgDots} alt="" className='absolute md:bottom-0 bottom-52 md:left-20 opacity-30' />
                <img src={rectangle26} alt="rectangle26" className='right-0 absolute opacity-30' />
                <img src={rectangle25} alt="rectangle26" className='bottom-20 right-0 absolute opacity-30' />
                <img src={dots1} alt="rectangle26" className='bottom-1/2 absolute z-10 opacity-30' />

                {/* <div className="grid md:grid-cols-2 h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto md:gap-5"> */}
                <div className="h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto">
                    <header className='flex md:text-5xl text-3xl gap-3'>
                        <h1 className='text-primary'>/</h1>
                        <h2 className='text-white w-full'>connect with me</h2>
                        <p className='bg-primary w-full h-[1px] my-auto'></p>
                    </header>
                    <div className="grid md:grid-cols-[1fr,2fr] mt-20 ">
                        <div>
                            <p className='text-gray md:w-[85%]'>
                                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                            </p>
                        </div>

                        <div className='h-full md:py-0 py-14 flex flex-col'>
                            <form action="#" className='text-white flex flex-col mt-auto'>
                                <span className="md:flex lg:flex gap-3">
                                    <CssTextField
                                        required
                                        label="Name"
                                        className="name"
                                        name="name"
                                        // onChange={this.onChange}
                                        type="text"
                                        autoComplete="current-password"
                                        margin="normal"
                                        fullWidth
                                        inputProps={{ style: { color: 'white' } }}
                                    />
                                    <CssTextField
                                        required
                                        label="Email"
                                        className="email"
                                        name="email"
                                        // onChange={this.onChange}
                                        type="text"
                                        autoComplete="current-password"
                                        margin="normal"
                                        fullWidth
                                        inputProps={{ style: { color: 'white' } }}
                                    />
                                </span>
                                <span className="flex gap-3 flex-col">
                                    <CssTextField
                                        required
                                        label="Title"
                                        className="title"
                                        name="title"
                                        // onChange={this.onChange}
                                        type="text"
                                        autoComplete="current-password"
                                        margin="normal"
                                        fullWidth
                                        inputProps={{ style: { color: 'white' } }}
                                    />
                                    <textarea className='bg-transparent border-[#808080] border p-2 h-[7em] placeholder:text-[#808080] font-bold' placeholder='Message' color='white' />
                                </span>
                            </form>
                            <div className="">
                                <button className='btn'>send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
