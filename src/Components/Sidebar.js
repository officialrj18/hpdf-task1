import React, { Component } from 'react';
import { Image ,View} from 'react-native';
import { Container, Card, CardItem, Text, Icon, Right, Footer, FooterTab, Button, Left, Thumbnail, Body } from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
         <Card>
           <CardItem cardBody>
              <Image source={{ uri: 'https://www.ledr.com/colours/white.jpg' }} style={{ height: 25, width: null, flex: 1 }} />
           </CardItem>
           <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://scontent.fccu4-1.fna.fbcdn.net/v/t1.0-9/12717639_975402669211806_1217562211782484386_n.jpg?oh=aa153a000ba1e0ed95e2a79e1d81a587&oe=5AC7CB02' }} />
              </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Rajendra Arya</Text>
              <Text note>@officialrj18</Text>
            </Body>
            <Right>
              <Icon active name="ios-arrow-down" />
            </Right>
          </CardItem>

          <CardItem>
            <Left>
              <Text>50</Text>
              <Text note>Following</Text>
            </Left>
            <Left>
              <Text>10k</Text>
              <Text note>Followers</Text>
            </Left>
          </CardItem>
          
          <CardItem>
              <Icon name="ios-person-outline" />
              <Text>Profile</Text>
          </CardItem>
          <CardItem>
               <Icon name="ios-list-box-outline" />
               <Text>Lists</Text>
          </CardItem>
          <CardItem>
                <Icon name="ios-flash-outline" />
                <Text>Moments</Text>
          </CardItem>
          <CardItem>
                 <Icon name="ios-browsers-outline" />
                 <Text>Highlights</Text>
          </CardItem>
          
          <CardItem>
                   <Text>Settings and privacy</Text>
          </CardItem>

          <CardItem>
                   <Text>Help Centre</Text>
          </CardItem>
        
        
        <Footer style={{backgroundColor:"white", marginTop: 25 }} >
            <Left>
            <Icon style={{ marginLeft: 20,color: '#3BB9FF'}} name='ios-moon-outline' ></Icon>
            </Left>
            <Right>
            <Icon style={{ marginRight: 20,color: '#3BB9FF' }} name='ios-qr-scanner-outline'></Icon>
            </Right>
            
        </Footer>
      </Card>
    </Container>
      
    );
  }
}