import React, { useState, useEffect } from 'react';

import TwitzlariaCard from './TwitzlariaCard';
import { Container, Menu, Icon, Segment, Grid, Card, Image, Dropdown, Label } from 'semantic-ui-react';
import api from './api.js';
import twitzlariak from './twitzlariak.json';


const Zuzenean = ((props) => {
    const [lives, setLives] = useState([])
    const twitzlariList = twitzlariak.twitzlariak.map((twitzlaria)=>{return twitzlaria})
    useEffect(() => {
        api.get('streams?user_login=' + twitzlariList.join('&user_login=')).then((response) => (
            // console.log(response.data.data)
            setLives(response.data.data)
        ))
    }, []);
    return (
        <Container style={{ margin: 20 }}>
            <Segment>
                <Card.Group>
                    {lives.length > 0 ? (
                        lives.map((user, index) => (
                            <>
                                {console.log(user)}
                                <Card >
                                        <Image
                                            src={user?.thumbnail_url.replace('{width}', 440).replace('{height}', 228) || 'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png'}
                                        />
                                    <Card.Content>
                                        <Label color='red' ribbon='right'>
                                            Zuzenean
                                        </Label>
                                        <Card.Header>
                                            {user?.user_name || 'Twitzlaria'}
                                        </Card.Header>
                                        <Card.Meta>{user?.game_name}</Card.Meta>
                                        <Card.Description>
                                            {user?.title || 'twitzlariaren deskribapena hemen idatzita agertuko da'}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </>
                        ))
                    ) : (
                        <>
                            <Card >
                                <Card.Content>
                                    <Image
                                        floated='right'
                                        size='tiny'
                                        src={'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png'}
                                    />
                                    <Card.Header>
                                        {/* <Icon circular inverted size='tiny' color='red' name='record' /> */}
                                        {'Twitzlaria'}
                                    </Card.Header>
                                    <Card.Meta>{'0 ikustaldi'}</Card.Meta>
                                    <Card.Description className="ellipsis">
                                        {'twitzlariaren deskribapena hemen idatzita agertuko da'}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </>
                    )}
                </Card.Group>
            </Segment>
        </Container>
    )

})

export default Zuzenean;