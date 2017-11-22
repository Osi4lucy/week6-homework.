const reposContainer = document.getElementById("repos-info");
const button = document.getElementById('btn');

btn.addEventListener('click', function(){
  const ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos');
  ourRequest.onload = function() {
    const reposData = JSON.parse(ourRequest.responseText);

  };
  ourRequest.send();
});

function reposHTML(data) {
   const htmlData = "";
  for(i = 0; i < data.length; i++) {
    htmlData += "<p>" + data[i].name + data[i].full_name + data[i].owner + ".</p>";
  }
  reposContainer.insertAdjacentHTML('beforeend', 'htmlData');
}
