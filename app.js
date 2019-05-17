// alert("connected!");
const container = document.querySelector('#container');

const content = document.querySelector('.content');



const p = document.createElement('p');
p.textContent = 'Hey I\'m red!';

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';

container.appendChild(p);
container.appendChild(h3);

const innerContent = document.createElement('div');
let innerContentStyle = innerContent.style;

innerContentStyle.border = '1px solig black';
innerContentStyle.backgroundColor = 'pink';

const innerH1 = document.createElement('h1');
innerH1.textContent = 'I\'m in a div';

const innerP = document.createElement('p');
innerP.textContent = 'ME TOO!';

innerContent.appendChild(innerH1);
innerContent.appendChild(innerP);

container.appendChild(innerContent);

// var btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

var btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});
