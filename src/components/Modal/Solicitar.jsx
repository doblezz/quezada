import React from 'react'


// icon react
import {IoIosArrowDown} from 'react-icons/io';
import {MdTouchApp} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';

// Materual @MUI UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Css
import "./solicitar.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};




const Solicitar = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className="description_swiper">
            <Button onClick={handleOpen} className="solicitar">Solicitar Tasa &nbsp; <IoIosArrowDown/></Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" className='title' variant="h6" component="h2">
                    Solicita tus tasas más fácil
                    </Typography>
                        
                        <div className='solicitar_modal'>
                            <a href='https://api.whatsapp.com/send/?phone=18095565111&text&app_absent=0'>Via WhatsApp <IoLogoWhatsapp /></a>
                            <a href='https://quezada.do/divisas.html'>Via Web <MdTouchApp /></a>
                        </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Solicitar