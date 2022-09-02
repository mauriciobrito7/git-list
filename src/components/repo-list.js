import styled from 'styled-components'

const RepoListStyled = styled.div`
  grid-area: repo-list;
  background: green;
`

function RepoList() {
  return (
    <RepoListStyled>
      RepoList
    </RepoListStyled>
  )
}

export default RepoList
