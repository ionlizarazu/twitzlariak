import React, { useState, useEffect } from 'react';

import api from './api.js';
import { Container, Segment, Grid, Card, Image, Dropdown, Header, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import TwitzlariaCard from './TwitzlariaCard';
import twitzlariak from './twitzlariak.json';
import moment from "moment";

const Bilatzailea = ((props) => {
    const [users, setUsers] = useState([])
    const [options, setOptions] = useState([])
    const [userList, setUserList] = useState([])
    const [bideoak, setBideoak] = useState([])
    const [clipak, setClipak] = useState([])
    const [selectedUser, setSelectedUser] = useState([])
    // const [atzeraData, setAtzeraData] = useState(new Date())
    const twitzlariList = twitzlariak.twitzlariak.map((twitzlaria)=>{return {key: twitzlaria, text: twitzlaria, value: twitzlaria}})
    useEffect(() => {
      const fetchData = async () => {
        userList.length > 0 && (
          api.get('users?login=' + userList.join('&login=')).then((response) => (
            setUsers(response.data.data)
          ))
        )
      }
      fetchData()
    }, [userList])
    useEffect(() => {
        setOptions(twitzlariList)
      setSelectedUser('')
    }, [])
  
    function handleChange(e, { value }) {
      setUserList(value)
      setBideoak([])
      setClipak([])
    }
  
    function handleClick(user) {
      if (user) {
        setSelectedUser(user.display_name)
        setBideoak([])
        setClipak([])
        let azkenBideo = []
        let azkenClip = []
        api.get('videos?user_id=' + user.id).then((response) => {
            response.data.data.map( (bideoa) => {
                new Date(bideoa.created_at)>atzeraData && (azkenBideo = [...azkenBideo, bideoa])
            })
            setBideoak(azkenBideo)
        })

        api.get('clips?broadcaster_id=' + user.id).then((response) => {
            response.data.data.map((clipa) => {
                new Date(clipa.created_at)>atzeraData &&  (azkenClip = [...azkenClip, clipa])
            })
            setClipak(azkenClip)
        })
      }
    };

    let gaur = new Date()
    let atzeraData = new Date()
    atzeraData.setDate(gaur.getDate()-900)
    
    return(
        <Container>
            <Dropdown placeholder='Erabiltzaileak' fluid multiple selection search allowAdditions
                onAddItem={(event, data) => setOptions([...options,
                { key: data.value, text: data.value, value: data.value }])}
                options={options}
                onChange={handleChange} />
            <Segment>
                <Grid columns={2} divided>
                <Grid.Column width={5}>
                    {users.length > 0 ? (
                    users.map((user, index) => (
                        <Card className={selectedUser === user.display_name ? 'active': ''} onClick={() => handleClick(user)}>
                        <TwitzlariaCard 
                            title={user.display_name} 
                            meta={user.view_count} 
                            description={user.description} 
                            image_url={user.profile_image_url} 
                            key={index} />
                        </Card>
                    ))
                    ) : (
                    <Card>
                        <TwitzlariaCard />
                    </Card>
                    )
                    }
                </Grid.Column>
                <Grid.Column width={5}>
                {bideoak.length > 0 && 
                    <Segment>
                        <Header as='h2'>
                            <Icon  size='tiny' name='video camera' />
                            <Header.Content>Bideoak</Header.Content>
                        </Header>
                    </Segment>
                }
                    <Card.Group>
                    {bideoak.length > 0 ? (
                        bideoak.map((bideoa, index) => (
                            <>
                        {new Date(bideoa.created_at)>atzeraData && 
                            <Card>
                            <Image src={bideoa.thumbnail_url.replace('%{width}', 440).replace('%{height}', 228)} />
                            <Card.Content>
                                <Card.Header as={Link} to={{ pathname: bideoa.url }} target='_blank'>{bideoa.title}</Card.Header>
                                <Card.Description as='a'>{moment(bideoa.created_at).format('YYYY/MM/DD HH:MM')}</Card.Description>
                            </Card.Content>
                            </Card>
                        }
                        </>
                        ))
                    ) : (
                        <>
                        </>
                    )
                    }
                    </Card.Group>
                </Grid.Column>
                <Grid.Column width={5}>
                    {clipak.length > 0 && 
                    <Segment>
                        <Header as='h2'>
                            <Icon  size='tiny' name='paperclip' />
                            <Header.Content>Clipak</Header.Content>
                        </Header>
                    </Segment>
                    }
                    <Card.Group>
                    {clipak.length > 0 ? (
                        clipak.map((clip, index) => (
                        <>
                        {new Date(clip.created_at)>atzeraData && 
                            <Card>
                            <Image src={clip.thumbnail_url.replace('%{width}', 440).replace('%{height}', 228)} />
                            <Card.Content>
                                <Card.Header as={Link} to={{ pathname: clip.url }}>{clip.title}</Card.Header>
                                <Card.Description as='a'>{moment(clip.created_at).format('YYYY/MM/DD HH:MM')}</Card.Description>
                            </Card.Content>
                            </Card>
                        }
                        </>
                        ))
                    ) : (
                        <>

                        </>
                    )
                    }
                    </Card.Group>
                </Grid.Column>

                </Grid>
            </Segment>
        </Container>
    )
})

export default Bilatzailea;