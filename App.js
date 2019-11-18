import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const movie_data = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./src/img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./src/img/midway.jpg'),
  },
];

const App = () => {
  let movieArr = [];
  for (let i = 0; i < movie_data.length; i++) {
    let movie = movie_data[i];
    movieArr.push(<Text key={movie.title}>{movie.title}</Text>);
    movieArr.push(<Text key={movie.year}>{movie.year}</Text>);
    movieArr.push(<Image source={movie.poster} />);
    console.log(movieArr);
  }
  return (
    <View>
      <Text>C308 Web Frameworks</Text>
      <Text>Lesson 5</Text>

      <Text key="Doctor Sleep">Doctor Sleep</Text>
      <Text key="2019">2019 </Text>

      <ScrollView>
        <Text>Scroll me please</Text>
      </ScrollView>
    </View>
  );
};

export default App;
