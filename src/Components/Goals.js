import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';


function Goals() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'INTERESTS / GOALS'} span={'INTERESTS / GOALS'} />
                <div className="services">
                    <ul>
                        <li>Learn JavaScript to a professional level</li>
                        <li>Locate On Google Within 5 years</li>
                        <li>Learn TypeScript</li>
                        <li>Familiarity with databases</li>
                    </ul>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default Goals;
