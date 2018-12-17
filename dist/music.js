const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "summer",
        artist: '久石让',
        url: 'http://link.hhtjim.com/163/443242.mp3',
        cover: '',
      }
      /*{
        name: '9420',
        artist: '麦小兜',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }*/
    ]
});