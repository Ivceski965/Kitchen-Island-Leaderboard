// Tabs shown at the top. Add a new stat here to get a new tab.
const MODES = [
  { key: 'kills',  label: 'Kills' },
  { key: 'kd',     label: 'K/D' },
  { key: 'deaths', label: 'Deaths' },
  { key: 'rounds', label: 'Rounds' }
];

let players = [];
let mode = 'kills';
let query = '';

const fmt = n => n.toLocaleString('en-AU');
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function load() {
  players = PLAYERS.map(p => ({ ...p, kd: p.deaths ? p.kills / p.deaths : p.kills }));
  renderTabs();
  render();
}

function renderTabs() {
  document.getElementById('tabs').innerHTML = MODES.map(m =>
    `<button class="tab ${m.key === mode ? 'on' : ''}" data-k="${m.key}">${m.label}</button>`
  ).join('');
}

function render() {
  const ranked = [...players]
    .sort((a, b) => b[mode] - a[mode])
    .map((p, i) => ({ p, rank: i + 1 }))
    .filter(x => x.p.player.toLowerCase().includes(query));

  document.getElementById('sub').textContent =
    `${players.length} players ranked by ${MODES.find(m => m.key === mode).label}`;

  document.getElementById('rows').innerHTML = ranked.length
    ? ranked.map(({ p, rank }) => rowHtml(p, rank)).join('')
    : '<div class="empty">No players found</div>';
}

function rowHtml(p, rank) {
  const tier = rank <= 3 ? 't' + rank : rank <= 10 ? 'm' : 'l';
  const cell = key => 'num' + (key === mode ? ' act' : '');
  return `<div class="row ${tier}">
    <span class="rank">${rank}.</span>
    <span class="name">${esc(p.player)}</span>
    <span class="${cell('kills')}">${fmt(p.kills)}</span>
    <span class="${cell('kd')}">${p.kd.toFixed(2)}</span>
    <span class="${cell('deaths')}">${fmt(p.deaths)}</span>
    <span class="${cell('rounds')}">${fmt(p.rounds)}</span>
    <span class="num">${fmt(p.xp)}</span>
    <span class="num">${fmt(p.level)}</span>
  </div>`;
}

document.getElementById('tabs').addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  mode = btn.dataset.k;
  renderTabs();
  render();
});

document.getElementById('q').addEventListener('input', e => {
  query = e.target.value.trim().toLowerCase();
  render();
});

load();
