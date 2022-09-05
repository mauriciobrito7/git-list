import { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import Button from './button'
import Icon from './icon'

const ProfileStyled = styled.div`
  grid-area: profile;
  .custom {

  }
  .avatar {
    border-radius: 50%;
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name {
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: 0.5rem;
  }
  .username {
    margin-block: 0.5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
  }
  .info {
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }
  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: .5rem;
    margin-block-end: 1.5rem;
  }
`

function Profile() {
  const [user, setUser] = useState(null)

  const getUserInfo = useCallback(async () => {
    const userData = await fetch('https://api.github.com/users/mauriciobrito7').then(data => data.json())
    setUser(userData)
  }, [])

  useEffect(() =>
    {
      getUserInfo()
    }, [getUserInfo])

  const { avatar_url, name, login, bio, location, followers, following, company } = user || {
    avatar_url: '',
    name: '',
    login: '',
    bio: '',
    location: '',
    followers: '',
    following: '',
    company: '',
  }

  return (
    <ProfileStyled>
      <img className="avatar" src={avatar_url} alt="" width="278" height="278"/>
      <p className="name">{name}</p>
      <p className="username">{login}</p>
      <div className="buttons">
        <Button
          text="Follow"
          link="#"
          icon={<i>ho</i>}
        />
      </div>
      <p className="bio info">
        {bio}
      </p>
      <p className="followers info">
        °  {followers} <span>followers</span> <span>°</span> {following} <span>following</span>
      </p>
      <p className="company info">
        ° {company}
      </p>
      <p className="location info">
        ° {location}
      </p>
      <a className="info" href="https://www.linkedin.com/in/mauricio-brito-62b0a6140/" target="_blank" rel="noreferrer">
        Linkedin: Mauricio Brito
      </a>
      <a className="info" href="https://www.instagram.com/mauriciobrito7/" target="_blank" rel="noreferrer">
        @mauriciobrito7
      </a>
    </ProfileStyled>
  )
}

export default Profile
