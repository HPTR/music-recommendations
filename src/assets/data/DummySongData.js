import vaccines from "./images/vaccines.jpg";
import melBlue from "./images/melblue.jpg";
import walkingOnRivers from "./images/walkingonrivers.jpg";
import waxWorks from "./images/waxworks.jpg";

const songArray = [
    {
        id: 0,
        songName: "If You Wanna",
        artistName: "The Vaccines",
        albumName: "What Did You Expect From The Vaccines?",
        image: vaccines,
        review: <p>Other than a relatively recent enjoyment in their album 'Back In Love City', I've not listened to The Vaccines much, but seeing them live recently prompted me to give them a proper look. I was surprised to find I'd heard a fair few of their older songs before, I was aware of their success but couldn't have named a song on this (their debut) album until now.<br></br><br></br>What I like about If You Wanna is that it takes a story of someone really struggling to get over their ex, and wraps it in a drum beat so rapid it almost completely distracts from the story the song is trying to tell; this gives the listener the oppurtunity to enjoy the song for its energy on initial listens, then gain a new appreciation once the meaning of the lyrics is really taken in.</p>,
        spotifyEmbed: <iframe style={{borderRadius:"20px"}} title="if-you-wanna" src="https://open.spotify.com/embed/track/6Ca3uEAuun3HusTUiIXKs1?utm_source=generator" width="100%" height="80" frameBorder="0" allowFullScreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    },
    {
        id: 1,
        songName: "Overachiever",
        artistName: "Walking On Rivers",
        albumName: "Overachiever",
        image: walkingOnRivers,
        review: <p>There isn't one single thing I can pick out about this song that appeals to me, the vocals mixed with the backing vocals, the guitar solos, the general flow of composition just creates and maintains an energy that I find so addictive.</p>,
        spotifyEmbed: <iframe style={{borderRadius:"20px"}} title="overachiever" src="https://open.spotify.com/embed/track/2jzCWWy4mRZEzGtqak3JM0?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    },
    {
        id: 2,
        songName: "Cleopatra",
        artistName: "Mel Blue",
        albumName: "Cleopatra",
        image: melBlue,
        review: <p>Cleopatra opens, teasing with a subtle reverberating synth, then, a few seconds later, throws the drums at you, while the synth builds in to the main riff and within 20 seconds, you know exactly what kind of song this is going to be. When the vocals kick in with processing almost reminiscent of light radio/walkie talkie muffle, it elicited feelings of warmth and fuzziness that just made me feel so comfy just listening, and has kept me coming back again and again.</p>,
        spotifyEmbed: <iframe style={{borderRadius:"20px"}} title="cleopatra" src="https://open.spotify.com/embed/track/7MZNg4HTyeLwsHMxkWRMJf?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    },
    {
        id: 3,
        songName: "why you so sad?",
        artistName: "Wax Works",
        albumName: "why you so sad? EP",
        image: waxWorks,
        review: <p>Completely nailing one of my favourite genres (deep lyrics disguised by an upbeat tone), why you so sad? almost sounds like a diary entry written by the author, trying to shake off their irrationally negative thoughts, while managing to stay vague enough to be relatable to many, allowing the listener to imagine themselves as the writer, singing along, hoping that the lyrics will somehow become a reality.</p>,
        spotifyEmbed: <iframe style={{borderRadius:"20px"}} title="why-you-so-sad" src="https://open.spotify.com/embed/track/2Bhc4Iv2xExK4DhWDPyTRx?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    }
];

export default songArray;