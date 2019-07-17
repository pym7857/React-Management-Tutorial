import React from 'react';
import './App.css';
import Customer from './components/Customer.js';

const customers = [
{
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': '홍길동1',
  'birth': '19950319',
  'gender': 'M',
  'job': 'Univ.Student'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name': '홍길동2',
  'birth': '19950319',
  'gender': 'M',
  'job': 'Univ.Student'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': '홍길동3',
  'birth': '19950319',
  'gender': 'M',
  'job': 'Univ.Student'
}
]

class App extends React.Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birth={c.birth}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    )
  }
}

export default App;
