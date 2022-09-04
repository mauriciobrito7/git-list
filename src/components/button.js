import styled from 'styled-components'
import { isValidElement } from 'react'

const ButtonStyled = styled.button`
  background: var(--bg-button);
  color: var(--white);
  border:1px solid var(--grey);
  gap: .5rem;
  display: inline-flex;
  cursor: pointer;
  text-decoration: none !important;
  min-inline-size 135px;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  padding-block: .25rem;
  font: var(--button);
  &:hover {
    background: var(--white);
    color: var(--bg-button);
  }
`

function Button({text, link = 'button', className, icon}) {
  const component = link ? 'a' : 'button'
  let IconComponent = null
  
  if(icon){
    if(isValidElement(icon)){
      IconComponent = icon
    }
  }

  return (
    <ButtonStyled className={className} as={component}>
      {IconComponent}
      {text}
    </ButtonStyled>
  )
}

export default Button
