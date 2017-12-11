import React,{Component} from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import {PropTypes} from 'prop-types';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Home extends Component {
    
  render(){
    return(
      
        <Container style={{paddingTop: 0}} >
           
                <Content style={{flex: 1}}>
                    <Card>
                        <CardItem>
                            <Left>

                                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlOvEHMl596SZjM7kCu5qGzJjt-n1Bt7ttsJG6pendjuACX3SbQ'}} />

                                <Body>
                                <Text>
                                <Text>Smarter Every Day</Text>
                                <Text style={{color: '#a9a9a9'}}>  @smarter  30m <Icon name="arrow-dropdown" style={{color: '#a9a9a9'}}/></Text></Text>
                                <Text note> Genuine Thinker </Text>
                                </Body>
                            </Left>

                        </CardItem>
                        
                        <CardItem cardBody>
                        <Image source={{uri: 'https://i.pinimg.com/564x/d7/ca/83/d7ca83aac5b7dd4e7df2094f13a22a81.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>

                        <CardItem style={{paddingLeft: 50, paddingRight: 20}} >
                        <Left>
                          <Button transparent>
                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                            <Text>600</Text>
                          </Button>
                        
                        
                          <Button transparent>
                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                            <Text>19</Text>
                          </Button>                        
                        
                          <Button transparent>
                            <Icon name="heart" style={{color: '#3BB9FF'}} />
                            <Text>22K</Text>
                            </Button>
                        
                          <Button transparent >
                            <Icon name="mail" style={{color: '#3BB9FF'}} />
                            <Text>22</Text>
                          </Button>
                       </Left>

                        </CardItem>
   
                    </Card>

{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxx----------2nd feed-------------------xxxxxxxxxxxxxxxxxxxxx */}
                    <Card>
                        <CardItem>
                            <Left>
                            <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg'}} />

                                <Body>
                                <Text>
                                <Text>Sundar Pichai</Text>
                                <Text style={{color: '#a9a9a9'}}>  @sundarpichai  <Icon name="arrow-dropdown" style={{color: '#a9a9a9'}}/></Text></Text>
                                <Text note>CEO @Google</Text>
                                </Body>
                            </Left>

                        </CardItem>
                        
                        <CardItem cardBody>
                        <Image source={{uri: 'https://i.pinimg.com/564x/60/63/70/6063701cad4bb43a44df4b30d848cdd2.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>

                        <CardItem style={{paddingLeft: 50, paddingRight: 20}} >
                        <Left>
                          <Button transparent>
                            <Icon name="chatboxes" style={{color: '#3BB9FF'}}/>
                            <Text>234k</Text>
                          </Button>
                        
                        
                          <Button transparent>
                            <Icon name="repeat" style={{color: '#3BB9FF'}}/>
                            <Text>193k</Text>
                          </Button>                        
                        
                          <Button transparent>
                            <Icon name="heart" style={{color: '#3BB9FF'}} />
                            <Text>22M</Text>
                            </Button>
                        
                          <Button transparent >
                            <Icon name="mail" style={{color: '#3BB9FF'}} />
                            <Text>22</Text>
                          </Button>
                       </Left>

                        </CardItem>
                    </Card>


                    
                </Content>
         </Container>

    );
  }
}
