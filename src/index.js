import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppBar, Toolbar, Button, Stack, Box} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import HomeIcon from '@mui/icons-material/Home';
import DialpadIcon from '@mui/icons-material/Dialpad';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';

{/*---  ---*/}
const theme = createTheme({
    palette: {
        plavu: {
          main: '#eebbc3',
          dark_back: '#232946',
          light_text: '#b8c1ec;',
          light_back: '#d4d8f0',

        },
    },
})

{/*--- Helper to create MUI buttons ---*/}
function BasicButtons({id, buttontext, section}) {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row">
                <Button id={id} variant="contained" color='plavu' sx={{textTransform: 'none'}} href={section}>{buttontext}</Button>
            </Stack>
        </ThemeProvider>
    );
}

function HomeButton({id, buttontext, icontype, section}){
    let Icon;

    if(icontype === 'HomeIcon') {
        Icon = HomeIcon;
    }
    else if(icontype =='DialPadIcon'){
        Icon = DialpadIcon;
    }

    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row">
                <Button id={id} variant="contained" color='plavu' startIcon={<Icon />} sx={{textTransform: 'none'}} href={section}>{buttontext}</Button>
            </Stack>
        </ThemeProvider>
    );
}

{/*--- Sticky Navigation Button Bar ---*/}
function StickyHeader(){
    return(
        <AppBar id='top-bar' position='sticky'>
            <Toolbar id='header-pane'>
                <HomeButton id='home-button' buttontext={'Home'} icontype={'HomeIcon'} section="#home-jump"></HomeButton>
                <BasicButtons id='header-button-one' buttontext={'What is Automation?'} section="#jump-two"></BasicButtons>
                <BasicButtons id='header-button-two' buttontext={'Why Automate?'} section="#jump-three"></BasicButtons>
                <BasicButtons id='header-button-three' buttontext={'From'} section="#jump-four"></BasicButtons>
                <BasicButtons id='header-button-four' buttontext={'Butts'} section="#jump-five"></BasicButtons>
                <HomeButton id='contact-button' buttontext={'Contact Us'} icontype={'DialPadIcon'}></HomeButton>
            </Toolbar>
        </AppBar>
    );
}

function MobileBar(){
    return(
        <AppBar id='top-bar-mob' position='sticky'>
            <Toolbar id='header-pane-mob'>
                <HomeButton id='home-button-mob' buttontext={''} icontype={'HomeIcon'} section="#home-jump"></HomeButton>
                <HomeButton id='mob-button-one' buttontext={''} icontype={'Filter1Icon'} section="#jump-two"></HomeButton>
                <HomeButton id='mob-button-two' buttontext={''} icontype={'Filter2Icon'} section="#jump-three"></HomeButton>
                <HomeButton id='mob-button-three' buttontext={''} icontype={'Filter3Icon'} section="#jump-four"></HomeButton>
                <HomeButton id='mob-button-four' buttontext={''} icontype={'Filter4Icon'} section="#jump-five"></HomeButton>
                <HomeButton id='contact-button-mob' buttontext={''} icontype={'DialPadIcon'}></HomeButton>
            </Toolbar>
        </AppBar>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
        {/*top container for button navigation*/}
        <div id='home-jump'></div>
        <StickyHeader></StickyHeader>

        {/*top container for site title*/}
        <div id='header-content' className='top-container'>
                <h1 class="main-title">Swiss Automation Consulting</h1>
        </div>

        {/* container for site body*/}
        <div id='jump-two'></div>
        <div className='body-container'>
            <div id='body-content'>
                <div id='intro-section'>
                    <div id='intro-text'>
                        <p class="body-subtext">Do you or your business have tedious and repetitive tasks that consume far too much of your time?<br></br>Find out if Swiss Consultants can help you to simplify your everyday.</p>
                    </div>
                </div>

                {/* container for second section body*/}
                <div id='section-two'>
                    <div id='section-two-text'>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                    </div>
                </div>
                
                {/* container for third section body*/}
                <div id='jump-three'></div>
                <div id='section-three'>
                    <div id='section-three-text'>
                        <h3>This is my Third Secton, whaddya think?</h3>
                        <p>Tis really just some text for testin in sexy sec 3 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                    </div>
                </div>

                {/* container for fourth section body*/}
                <div id='jump-four'></div>
                <div id='section-four'>
                    <div id='section-four-text'>
                        <h3>This is my Third Secton, whaddya think?</h3>
                        <p>Tis really just some text for testin in sexy sec 3 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                    </div>
                </div>

                {/* container for fifth section body*/}
                <div id='jump-five'></div>
                <div id='section-five'>
                    <div id='section-five-text'>
                        <h3>This is my Third Secton, whaddya think?</h3>
                        <p>Tis really just some text for testin in sexy sec 3 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                        <p>Tis really just some text for testin in sexy sec 2 </p>
                    </div>
                </div>
            </div>
        </div>

    </>
)

