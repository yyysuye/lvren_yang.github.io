const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
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
      /*{
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }*/
    ]
});