//make profile info hide and signIn block display
var signIn = document.getElementById('login_form');
var info = document.getElementById('info');
signIn.style.display = 'block';
info.style.display = 'none';
//declear function to show up info
function showInfo(j) {
  signIn.style.display = 'none';
  info.style.display = 'block';
  var img = document.createElement('img');
  img.setAttribute('class', 'pic');//create image element
  img.setAttribute('src', myData[j].image);// append src to img tag
  var ul = document.createElement('ul');
  ul.setAttribute('class', 'info');
  var myName = document.createElement('li');
  myName.innerHTML = myData[j].name;
  var btn = document.createElement('button');
  btn.setAttribute('id', 'update');
  btn.setAttribute('type', 'submit');
  btn.innerHTML = 'update score'
  var myInfo = document.createElement('ul');
  myInfo.innerHTML = '<li>Score: ' + myData[j].score + '</li><li> Wins: ' + myData[j].wins + '</li><li>Losses: ' + myData[j].losses + '</li>';
  ul.appendChild(myName);
  ul.appendChild(myInfo);
  ul.appendChild(btn);
  info.appendChild(img);
  info.appendChild(ul);
  document.body.appendChild(info);
  return;
};
//others info
function others(){
  var z = ranking.length - 1;
  for(var r = z; r > -1; r--){
    var div = document.getElementById('others');
    var place = scores.indexOf(ranking[ranking.length - r - 1]);
    var ul = document.createElement('ul');
    var s = r + 1;
    ul.innerHTML = '<li>' + s + '</li><li> Name: ' + myData[place].name + '</li> <li> Score: ' + myData[place].score + '</li>';
    div.appendChild(ul);
  };
};
//page load save info
function onLoad(){
//check if local storage have list of privious
  if(localStorage.signIn){
    for (var i = 0; i < myData.length; i++){
      if(myData[i].userName === localStorage.signIn){
        var j = i;
        showInfo(j);
      };
    }
  }
}

//add userName and passWord input area form DOM
//check if username and password is right
function check(event){
  event.preventDefault();
  var username = event.target.userName.value;
  var password = event.target.passWord.value;
  for(var i = 0; i < myData.length; i++){
    if(username === myData[i].userName && password === myData[i].passWord){
      console.log('userName =', myData[i].userName, 'passWord =', myData[i].passWord);
      localStorage.signIn = username;
      var j = i;
    };
  }
  showInfo(j);
  others();
  //Error catching for wrong input
  if(j == undefined) {
    signIn.style.display = 'block';
    info.style.display = 'none';
    alert('username or password is worng!!');
  };
};
//update scores
function updateScore(event){
  event.preventDefault();
  var info = document.getElementById('info');

}

//infoPage(3);
// onLoad();
document.getElementById('login_form').addEventListener('submit', check);
document.getElementById('update').addEventListener('submit', updateScore);
