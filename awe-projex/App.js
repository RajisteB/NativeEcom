import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, PanResponder, Animated } from 'react-native';
import Card from './card';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      profileIdx: 0,
    }
  }

  nextCard = () => {
    this.setState((prevState) => {
      return { profileIdx: prevState.profileIdx + 1 }
    })
  }

  render() {
    const { profileIdx } = this.state;
    return (
      <View style={styles.container}>
        {profiles.slice(profileIdx, profileIdx + 3).reverse().map((profile) => {
          return (
            <Card 
              key={profile.id}
              profile={profile}
              onSwipeOff={this.nextCard}
            />
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const profiles = [
  {
    id: 0,
    name: 'Candace',
    age: 22,
    bio: 'Grad Student',
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: 1,
    name: 'Evelyn',
    age: 25,
    bio: 'Model',
    img: 'https://images.unsplash.com/photo-1530452491045-fcc42194fe79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=44d51c411d32029fd5a62e4c75a2469d&auto=format&fit=crop&w=632&q=80'
  },
  {
    id: 2,
    name: 'Alexa',
    age: 28,
    bio: 'Lawyer',
    img: 'https://images.unsplash.com/photo-1526849122213-74cba494747f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8a620d935efc0f18c14eae98a6ad1b8&auto=format&fit=crop&w=634&q=80'
  },
  {
    id: 3,
    name: 'Jamie',
    age: 24,
    bio: 'Singer',
    img: 'https://images.unsplash.com/photo-1524772128034-3ecf9a73cbe9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9841a6380db01cd57fc12ba6c51d6a59&auto=format&fit=crop&w=634&q=80'
  },
  {
    id: 4,
    name: 'Angela',
    age: 29,
    bio: 'TV Host',
    img: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e4481cff1599f6c147a945432207ed7&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    name: 'Shishka',
    age: 27,
    bio: 'Actress',
    img: 'https://images.unsplash.com/photo-1520810336800-28d1a1d41906?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0f86b0656f7f07126b142faf38927c1&auto=format&fit=crop&w=635&q=80'
  },
  {
    id: 6,
    name: 'Sierra',
    age: 26,
    bio: 'Supermodel',
    img: 'https://images.unsplash.com/photo-1521117660421-ce701ed42966?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b0cb0541f9e1d6c1208d80ea587458e&auto=format&fit=crop&w=634&q=80'
  },
  {
    id: 7,
    name: 'Alice',
    age: 28,
    bio: 'Dancer',
    img: 'https://images.unsplash.com/photo-1518157542428-1be9739022f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc0eec188da5aa872a6eae58b89ec034&auto=format&fit=crop&w=634&q=80'
  },
  {
    id: 8,
    name: 'Pamela',
    age: 24,
    bio: 'Personal Trainer',
    img: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6312e78ebbc8257cd681742d28f8473e&auto=format&fit=crop&w=634&q=80'
  },
  {
    id: 9,
    name: 'Tiana',
    age: 21,
    bio: 'Bartender',
    img: 'https://images.unsplash.com/photo-1521037870373-2e910d7923dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9b014c5197ce4b5e0c3b816d2bb6ea0&auto=format&fit=crop&w=634&q=80'
  },
]