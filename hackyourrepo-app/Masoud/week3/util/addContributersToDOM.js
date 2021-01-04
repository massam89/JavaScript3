export function addContributersToDOM(data, contributersSection) {
  data.forEach(element => {
    const contItem = document.createElement('div');
    const image = document.createElement('img');
    const link = document.createElement('a');
    const gitName = document.createElement('h3');
    const contributionsNum = document.createElement('h4');

    link.appendChild(image);
    contItem.appendChild(link);
    contItem.appendChild(gitName);
    contItem.appendChild(contributionsNum);
    contributersSection.appendChild(contItem);

    link.style.width = '100px'
    link.href = element.html_url;
    image.src = element.avatar_url;
    gitName.textContent = element.login;
    contributionsNum.textContent = element.contributions;
    contItem.classList.add('items');
  })
}