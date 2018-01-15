import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import {  Header, Left, Drawer , Body,Right , Button, Icon, Title,Thumbnail,Tabs,TabHeading,Fab,Footer,FooterTab,Container, Tab,Text,ScrollableTab, TouchableOpacity,Content} from 'native-base';

import {PropTypes} from 'prop-types';


import Home from './Home';
import Sidebar from './Sidebar';
import Search from './Search';

export default class AppMain extends React.Component {
    closeDrawer = () => {
        this._drawer._root.close()
      };
      openDrawer = () => {
        this._drawer._root.open()
      };

  
  render() {
    return (

      <Drawer
      ref={(ref) => { this._drawer = ref; }}
      content={<Sidebar
         navigator={this._navigator} />}
      onClose={() => this.closeDrawer()} >

      <Container >
        <Header hasTabs style={{backgroundColor: "white"}}>
            <Left>
              <Button transparent  onPress={() => this.openDrawer()}>
                  <Thumbnail small source={{uri: 'https://scontent.fccu4-1.fna.fbcdn.net/v/t1.0-9/12717639_975402669211806_1217562211782484386_n.jpg?oh=aa153a000ba1e0ed95e2a79e1d81a587&oe=5AC7CB02'}} />
              </Button>
            </Left>

            <Body>
                
                <Title style={{color: "black",alignContent: 'flex-start'}} >Home</Title>
          
            </Body>
            <Right />
        </Header>

        <Tabs initialPage={0} 
          tabBarUnderlineStyle={{backgroundColor:'#3BB9FF',borderBottomWidth:0}} >
              <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="md-home" style={{color:'#3BB9FF'}} /></TabHeading> } >
              <Home />
                </Tab>

              <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="search" style={{color:'#3BB9FF'}} /></TabHeading> } >
                <Search />
              </Tab>

              <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="notifications" style={{color:'#3BB9FF'}}/></TabHeading> }>
                        {/* <Tab3 /> */}
              </Tab>

              <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="mail" style={{color:'#3BB9FF'}} /></TabHeading> }>
                {/* <Tab4 /> */}
              </Tab>
        </Tabs>

        <Fab style={{ backgroundColor: '#3BB9FF', marginBottom:50 }} position="bottomRight">
            <Icon name="logo-twitter" />
        </Fab>   
        
        
      

        <Footer style={{backgroundColor: 'white'}}>
         
                    <FooterTab style={{backgroundColor: 'white'}}>
                      
                      <Button style={{paddingRight:0,paddingLeft:0}}>
                        <Text style={{fontSize: 12, color: '#3BB9FF', fontWeight: 'bold'}}>All</Text>
                      </Button>
                      <Button style={{paddingRight:75}} >
                        <Text style={{ fontSize: 12, fontWeight: 'bold',color: '#A9A9A9'}}>Mentions</Text>
                      </Button>
                     
                      <Right>
                        <Icon style={{ marginRight: 10, color: '#3BB9FF' }} name='settings'></Icon>
                    </Right>
                    
                    </FooterTab>
                    
                  
                  
        </Footer>
      
      
    </Container>
    </Drawer>

    );
  }
}



AppRegistry.registerComponent('Main Screen', () => AppMain)

