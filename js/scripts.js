// Sample script to render player cards. Replace `players` with your API fetch.
const players = [
  {rank:1,name:'Game1K',avatar:'',badges:['Combat Grandmaster'],kits:['NA','MK'],icons:['sword','axe','bow'],points:380},
  {rank:2,name:'system1117',avatar:'',badges:['Combat Master'],kits:['NA','MK'],icons:['sword','pick'],points:270},
  {rank:3,name:'TimmyLoal',avatar:'',badges:['Combat Master'],kits:['OC','MK'],icons:['sword'],points:260}
];

function createBadge(text){const b=document.createElement('div');b.className='badge';b.textContent=text;return b}
function createIcon(text){const i=document.createElement('div');i.className='kit-icon';i.textContent=text;return i}

function renderPlayers(list){const container=document.getElementById('playersList');container.innerHTML='';
  list.forEach(p=>{
    const card=document.createElement('div');card.className='player-card';
    const rank=document.createElement('div');rank.className='rank';rank.textContent=p.rank;
    const avatar=document.createElement('div');avatar.className='avatar';avatar.textContent=p.name[0];
    const meta=document.createElement('div');meta.className='player-meta';
    const name=document.createElement('div');name.className='player-name';name.textContent=p.name;
    const badges=document.createElement('div');badges.className='player-badges';
    p.badges.forEach(b=>badges.appendChild(createBadge(b)));
    const icons=document.createElement('div');icons.className='kit-icons';p.icons.forEach(ic=>icons.appendChild(createIcon(ic)));
    const points=document.createElement('div');points.className='points';points.textContent=p.points + ' PTS';

    meta.appendChild(name);meta.appendChild(badges);
    card.appendChild(rank);card.appendChild(avatar);card.appendChild(meta);card.appendChild(icons);card.appendChild(points);
    container.appendChild(card);
  })
}

// initial render
renderPlayers(players);

// TODO: replace with a fetch to your players endpoint
// fetch('/api/players').then(r=>r.json()).then(data=>renderPlayers(data));
