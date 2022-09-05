import ArrowDown from './icons/arrow-down'
import Book from './icons/book'
import Branch from './icons/branch'
import Cancel from './icons/cancel'
import Check from './icons/check'
import Github from './icons/github'
import Heart from './icons/heart'
import Home from './icons/home'
import Link from './icons/link'
import Location from './icons/location'
import Search from './icons/search'
import Star from './icons/star'
import Twitter from './icons/twitter'
import User from './icons/user'

function Icon({name, ...props}) {
  switch (name) {
    case 'arrow-down':
      return <ArrowDown {...props} />
    case 'book':
      return <Book {...props} />
    case 'branch':
      return <Branch {...props} />
    case 'cancel':
      return <Cancel {...props} />
    case 'check':
      return <Check {...props} />
    case 'github':
      return <Github {...props} />
    case 'heart':
      return <Heart {...props} />
    case 'home':
      return <Home {...props} />
    case 'link':
      return <Link {...props} />
    case 'location':
      return <Location {...props} />
    case 'search':
      return <Search {...props} />
    case 'star':
      return <Star {...props} />
    case 'twitter':
      return <Twitter {...props} />
    case 'user':
      return <User {...props} />
    default:
      return null
  }
}

export default Icon
