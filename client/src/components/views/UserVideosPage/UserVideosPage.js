import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";
import moment from 'moment';
const { Title } = Typography;
const { Meta } = Card;
function UserVideosPage() {
    const user = useSelector(state => state.user);
    const [Videos, setVideos] = useState([])

    useEffect(() => {
        const userid=user.userData._id;
        const userId={
            userId:userid
        };
        axios.post('/api/video/getUserVideos',userId)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])





    const renderCards = Videos.map((video, index) => {

        // var minutes = Math.floor(video.duration / 60);
        // var seconds = Math.floor(video.duration - minutes * 60);

        return <Col lg={6} md={8} xs={24}>
            <div style={{ position: 'relative' }}>
                <Link to={`/video/${video._id}`} >
                <img style={{ width: '100%',height:'300px' }} alt="thumbnail" src={video.thumbnail} />
                {/* <div className=" duration"
                    style={{ bottom: 0, right:0, position: 'absolute', margin: '4px', 
                    color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8, 
                    padding: '2px 4px', borderRadius:'2px', letterSpacing:'0.5px', fontSize:'12px',
                    fontWeight:'500', lineHeight:'12px' }}>
                    <span>{minutes} : {seconds}</span>
                </div> */}
                </Link>
            </div><br />
            <Meta
                // avatar={
                //     <Avatar src={video.writer.image} />
                // }
                title={video.title}
            />
            <span>{video.writer.name} </span><br />
            <span style={{ marginLeft: '3rem' }}> {video.views}</span>
            - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
        </Col>

    })



    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={1} > Your videos</Title>
            <hr />

            <Row gutter={16}>
                {renderCards}
            </Row>
        </div>
    )
}

export default UserVideosPage;
