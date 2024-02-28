import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppBar, Toolbar, Button, Stack, Box} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import HomeIcon from '@mui/icons-material/Home';

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
function BasicButtons({id, buttontext}) {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row">
                <Button id={id} variant="contained" color='plavu'>{buttontext}</Button>
            </Stack>
        </ThemeProvider>
    );
}

function HomeButton({id, buttontext}){
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row">
                <Button id={id} variant="contained" color='plavu' startIcon={<HomeIcon />}>{buttontext}</Button>
            </Stack>
        </ThemeProvider>
    );
}

{/*--- Sticky Navigation Button Bar ---*/}
function StickyHeader(){
    return(
        <AppBar id='top-bar' position='sticky'>
            <Toolbar id='header-pane'>
                <div id='home-box'>
                    <HomeButton id='home-button' buttontext={'Home'}></HomeButton>
                </div>
                <BasicButtons id='header-button-one' buttontext={'What is Automation?'}></BasicButtons>
                <BasicButtons id='header-button-two' buttontext={'Why Automate?'}></BasicButtons>
                <BasicButtons id='header-button-three' buttontext={'From'}></BasicButtons>
                <BasicButtons id='header-button-four' buttontext={'Butts'}></BasicButtons>
            </Toolbar>
        </AppBar>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
        {/*top container for button navigation*/}
        <StickyHeader></StickyHeader>
           
        {/*top container for site title*/}
        <div id='header-content' className='top-container'>
                <h1 class="main-title">Swiss Automation Consulting</h1>
        </div>

        {/* container for site body*/}
        <div className='body-container'>
            <div id='body-content'>
                <div id='intro-section'>
                    <div id='intro-text'>
                        <p class="body-subtext">Do you or your business have tedious and repetitive tasks that consume far too much of your time?<br></br>Find out if Swiss Consultants can help you to simplify your everyday.</p>
                    </div>
                </div>

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

                <div id='section-three'>
                    <div id='section-three-text'>
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

