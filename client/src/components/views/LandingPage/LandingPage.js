import React, { useEffect, useState } from 'react'
import "./LandingPage.css";
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const { Title } = Typography;

const { Meta } = Card;

function LandingPage() {

    const [Videos, setVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])





    // const renderCards = Videos.map((video, index) => {

    //     // var minutes = Math.floor(video.duration / 60);
    //     // var seconds = Math.floor(video.duration - minutes * 60);

    //     return <Col lg={6} md={8} xs={24}>
    //         <div style={{ position: 'relative' }}>
    //             <Link to={`/video/${video._id}`} >
    //             <img style={{ width: '100%',height:'300px' }} alt="thumbnail" src={video.thumbnail} />
    //             </Link>
    //         </div><br />
    //         <Meta
    //             title={video.title}
    //         />
    //         <span>{video.writer.name} </span><br />
    //         <span style={{ marginLeft: '3rem' }}> {video.views}</span>
    //         - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
    //     </Col>

    // })



    return (

        <div className="content">
            <div className="content__main">
                    
                        {Videos.map((video,index) => {
                            return (
                                <div key={index} className="content__video">
                                    <div className="content__videoUpper">
                                                                            
                                        <Link to={`/video/${video._id}`} >
                                            <img  alt="thumbnail" src={video.thumbnail} />
                                        </Link>
                                    </div>
                                    <div className="content__videoLower">
                                    <div className="writer__info">
                                        <AccountCircleIcon />
                                        <h3>{video.title}</h3>
                                        </div>
                                        <div className="writer__info2">
                                            <h5>{video.writer.name}</h5>
                                            <p> {moment(video.createdAt).format("MMM Do YY")} </p>
                                        </div>
                                        

                                    </div>
                                </div>
                            )
                        })}
                    
            </div>
        </div>

        // <div >
        //     <Title level={2} > Recommended </Title>
        //     <hr />

        //     <Row gutter={16}>
        //         {renderCards}
        //     </Row>
        // </div>
    )
}

export default LandingPage
