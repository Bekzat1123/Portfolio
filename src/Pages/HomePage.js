import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';
import {Instagram, LinkedIn, Telegram} from "@material-ui/icons";

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Bekzat</span></h1>
                <h1><span>Front-End</span> Developer</h1>
                <p>
                    High level experience in web development, love coding, producing quality work.
                </p>
                <div className="icons">
                    <a href="https://www.instagram.com/amirbekov.11/" className="icon i-instagram" target='_blank'>
                        <Instagram />
                    </a>
                    <a href="https://github.com/Bekzat1123" className="icon i-github" target="_blank">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/bekzat-erlan-uulu-6a02b3213/" className="icon i-linkedin" target='_blank'>
                        <LinkedIn />
                    </a>
                    <a href="https://t.me/amirbekov11" className="icon i-telegram" target='_blank'>
                        <Telegram />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-instagram{
                &:hover{
                    border: 2px solid pink;
                    color: pink;
                }
            }

            .i-linkedin{
                &:hover{
                    border: 2px solid blue;
                    color: blue;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-telegram{
            &:hover{
                    border: 2px solid blue;
                    color: blue;
            }
        }
    }
`;

export default HomePage;
