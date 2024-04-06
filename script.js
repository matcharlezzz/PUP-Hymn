const hymn = document.getElementById('hymn');
const lyric_cont = document.getElementById('lyric_cont');
let curr_idx = -1;

const lyric_list = [
    {lyric: "- Intro -",                                timestamp: 0},
    {lyric: "Sintang paaralan",                         timestamp: 12},
    {lyric: "Tanglaw ka ng bayan",                      timestamp: 15},
    {lyric: "Pandayan ng isip ng kabataan",             timestamp: 18},
    {lyric: "Kami ay dumating nang salat sa yaman",     timestamp: 24},
    {lyric: "Hanap na dunong ay iyong alay",            timestamp: 29},
    {lyric: "Ang layunin mong makatao",                 timestamp: 35},
    {lyric: "Dinarangal ang Pilipino",                  timestamp: 41},
    {lyric: "Ang iyong aral, diwa, adhikang taglay",    timestamp: 47},
    {lyric: "PUP, aming gabay",                         timestamp: 53},
    {lyric: "Paaralang dakila",                         timestamp: 56},
    {lyric: "PUP, pinagpala",                           timestamp: 62},
    {lyric: "Gagamitin ang karunungan",                 timestamp: 68},
    {lyric: "Mula sa iyo, para sa bayan",               timestamp: 74},
    {lyric: "Ang iyong aral, diwa, adhikang taglay",    timestamp: 80},
    {lyric: "PUP, aming gabay",                         timestamp: 86},
    {lyric: "Paaralang dakila",                         timestamp: 89},
    {lyric: "PUP, pinagpala",                           timestamp: 95},
    {lyric: "",                                         timestamp: 106},
];

lyric_list.forEach((line, index) => {
    const lyric = document.createElement('p');
    lyric.textContent = line.lyric;
    lyric.setAttribute('class', 'lyric');

    if(lyric.textContent == ""){
        lyric.style.fontSize = "2pt";
    }

    lyric_cont.appendChild(lyric);
});

function lyricScroll(){
    const currTimeStamp = hymn.currentTime;
    let i;
    for(i = 0; i < lyric_list.length; i++){
        if(i == lyric_list.length - 1){
            const curr_lyric = lyric_cont.querySelector('.lyric_hl');
            if(curr_lyric){
                unhlLyric(curr_lyric);
                lyric_cont.children[0].scrollIntoView(
                    {
                        behavior: 'smooth', 
                        block: 'center'
                    });
            }
            break;
        }

        if (lyric_list[i].timestamp <= currTimeStamp && lyric_list[i + 1].timestamp > currTimeStamp){
            if (i !== curr_idx){
                const curr_lyric = lyric_cont.querySelector('.lyric_hl');
                if (curr_lyric){
                    unhlLyric(curr_lyric);
                }
                hlLyric(lyric_cont.children[i]);
                lyric_cont.children[i].scrollIntoView({behavior: 'smooth', block: 'center'});
                curr_idx = i;
            }
            break;
        }
    }
}

function hlLyric(document){
    document.classList.remove('lyric');
    document.classList.add('lyric_hl');
}

function unhlLyric(document){
    document.classList.remove('lyric_hl');
    document.classList.add('lyric');
}