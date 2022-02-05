import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon/>
    const school = <SchoolIcon/>
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'}/>
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'}/>
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2021 Sep - up to now '}
                        title={'JavaScript Engineer'}
                        subTitle={'Dolon Technologies'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.'}
                    />
                    <ResumeItem
                        year={'2021 Feb - 2021 Aug '}
                        title={'Front - End Developer'}
                        subTitle={'Nevis Tech Company'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '}
                    />

                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'}/>
                </div>
                <div className="resume-content ">
                    <ResumeItem
                        year={'2021 - 2021'}
                        title={'Full - Stack Developer'}
                        subTitle={'IT-Moscow-Bootcamp'}
                        // text={'Have written over 1000+ hours if coding time.Worked with various libraries and frameworks.-Have written over 1000+ hours if coding time. Worked with various libraries and frameworks. -Have written over 1000+ hours if coding time. Worked with various libraries and frameworks.'}
                    />
                    <ResumeItem
                        year={'2018 - 2021'}
                        title={'Huai\'an Vocational and Technical College of Information'}
                        subTitle={'Information Technology'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
