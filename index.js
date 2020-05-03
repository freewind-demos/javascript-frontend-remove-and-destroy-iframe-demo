const iframe = document.getElementById('iframe');

function checkIFrame() {
  console.log(iframe.contentWindow.top);
}

checkIFrame();

iframe.parentNode.removeChild(iframe);

checkIFrame();

