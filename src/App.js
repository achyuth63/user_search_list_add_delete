import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1626670905/IMG_20210319_200530_984_ygyjge.jpg',
    name: 'Munagala Achyuth Reddy',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @NXT WAVE',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1622649059/20200702_201810_am0cke.jpg',
    name: 'Adithya',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @NXT WAVE',
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1622648878/Bhargav_Cse_E_20210602_210255_l7dfvb.jpg',
    name: 'Bhargav',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @NXT WAVE',
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1607274510/Pranav_Bsnl_20201206_223642_ttmrsz.jpg',
    name: 'Pranav',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @NXT WAVE',
  },
  {
    uniqueNo: 5,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1612513736/logo_1_riutsp.svg',
    name: 'Raghava ',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @NXT WAVE',
  },
  {
    uniqueNo: 6,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1613400532/images_-_2021-02-15T183942.724_pb7oxb.jpg',
    name: 'Ajith Munagala',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @NXT WAVE',
  },
  {
    uniqueNo: 7,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1612013522/Screenshot_2021-01-30-18-54-42-86_2_zenxqz.jpg',
    name: 'Annupurneswari',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @NXT WAVE',
  },
  {
    uniqueNo: 8,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1622651922/IMG-20210602-WA0006_odglbf.jpg',
    name: 'Tharunya',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @NXT WAVE',
  },
  {
    uniqueNo: 9,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1625944173/Screenshot_2021-07-11-00-32-06-32_1c337646f29875672b5a61192b9010f9_2_sk8xix.jpg',
    name: 'Manisha',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @NXT WAVE',
  },
  {
    uniqueNo: 10,
    imageUrl:
      'https://res.cloudinary.com/des7uyibo/image/upload/v1623668117/tst2_edvaav.jpg',
    name: 'Chandana',
    role:
      'An aspiring Fullstack developer trainee with MERN specialization @Edyoda.......',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
