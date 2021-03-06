navigator.getUserMedia=
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

const video = document.querySelector('#video');
const camvas = document.querySelector('#canvas');
const audio = document.querySelector('#audio');
const context = document.querySelector('2d');

navigator.getUserMedia({video: {}},stream=>{
  video.srcObject = stream;
},
err => console.log(err)
);
