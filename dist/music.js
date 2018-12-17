const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
	preload : 'auto',
	mutex: true,
    audio: [
      {
        name: "summer",
        artist: '久石让',
        url: 'http://link.hhtjim.com/163/443242.mp3',
        cover: '',
      },
      {
        name: 'Variations on the Kanon By Pachelbel',
        artist: 'George Winston',
        url: 'http://link.hhtjim.com/163/1374348.mp3',
        cover: '',
      }
    ]
});
document.onload(ap.play());