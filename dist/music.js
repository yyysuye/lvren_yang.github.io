const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
	preload : 'auto',
	mutex: true,
    audio: [
	  {
        name: 'Mia & Sebastian’s Theme',
        artist: 'From "La La Land" Soundtrack',
        url: 'http://link.hhtjim.com/163/445867334.mp3',
        cover: '',
      },
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
      },
      {
        name: 'luv letter',
        artist: 'DJ Okawari',
        url: 'http://link.hhtjim.com/163/406232.mp3',
        cover: '',
      }
    ]
});
