export const dummyData = {
  messageTooLongForSpace: 'There\'s no way this text is gonna fit.',
  messageWayTooLongForSpace: `This is a long message, and for some reason the middle isn't that helpful when scanning but seeing the end is like totally super helpful.`,
  markdownSource: `We have markdown with some **bold stuff**, _italicized stuff_, and even [links](//www.google.com)!`,
  commaSeparatedList: ['thing', 
    '[another thing](//www.google.com)', 
    'yet another thing', 
    'so many things'
  ],
  dropdownItems: [
    { name: "item1", isActive:false }, 
    { name: "item2", isActive:true }, 
    { name: "item3", isActive:false }
  ],  
  slideshowImages: [
    "https://media.giphy.com/media/65tCn6AgsJn1e/giphy.gif",
    "https://i2.kym-cdn.com/photos/images/original/000/511/116/7b7.gif",
    "https://media.giphy.com/media/xsATxBQfeKHCg/giphy.gif",
    "https://media.giphy.com/media/10hO9c6zalcju/giphy.gif",
    "https://heavy.com/wp-content/uploads/2014/03/922.gif?w=550",
    "https://i2.wp.com/www.wehuntedthemammoth.com/wp-content/uploads/2018/08/anigif_optimized-23932-1455822037-3.gif?resize=600%2C338",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fe4jvIeZwYUhiw%2Fgiphy.gif&f=1&nofb=1"
  ],
  iframeUrl: "//gif.tv/",
  videoConfig: {
    sources: [
      { src: '//test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_30MB.mp4', type: 'video/mp4' }
    ],
    poster: "//images.hellogiggles.com/uploads/2016/08/12051540/Arrested_Development__Meet_Buster_Bluth.jpg",
    chapters: [
      { startTime: '0:00', title: 'Chapter 1' },
      { startTime: '0:05', title: 'Chapter 2' }
    ]
  },
  sortableListCollection: [
    "List item 1",
    "List item 2",
    "List item 3 that's so long that we need that CenterTextEllipticizer in there so that our list doesn't get too long and we can still get the best parts of the sentence."
  ]
};
