const linksSocialMedia = {
  github: 'edinh0xd',
  instagram: 'edim.souzza',
  youtube: 'channel/UCfdLI-jQ5uNpQ_tCJDCEz3w',
  facebook: '',
  twitter: ''
}
function changeSocialMidial() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMidial()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      socialMedia.textContent = data.bio
      userLink.href = data.html_url
      avatarImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
