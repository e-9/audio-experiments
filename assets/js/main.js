window.onload = init;
var context;
var bufferLoader;
var source1;
var playingSource1;

function init() {
  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
      'assets/sounds/bla.mp3',
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
    
  source1 = context.createBufferSource();
  source1.buffer = bufferList[0];

  source1.connect(context.destination);
  //source1.start(0);
}

$( document ).ready(function() {
    
    var 
        play = function () {
            source1.start(0);
        },
        
        stop = function () {
            source1.stop(0);
        };
    
    $("#btn-song-play").click ( function() {
        play();
    });
    
    $("#btn-song-stop").click ( function() {
        stop();
    });
});
