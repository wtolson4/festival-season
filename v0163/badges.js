(()=>{
  const requirementsByTitle={
    'FIRST FESTIVAL':'Complete your first festival.',
    'YEAR TWO MATERIAL':'Secure Year Two.',
    'PROMOTER ON THE RISE':'Score 80+.',
    'HEADLINER STATUS':'Score 90+.',
    'THE CENTURY CLUB':'Score 100+.',
    'PACKED FIELD':'Sell 50,000 tickets.',
    'BLACK INK':'Finish profitable.',
    'SEVEN FIGURES':'Earn $1M+ profit.',
    'BIG BUSINESS':'Earn $3M+ profit.',
    'PRINTING MONEY':'Earn $5M+ profit.',
    'PENNY PINCHER':'Secure Year Two with $15+ of booking budget unused.',
    'PERFECTLY SPENT':'Finish with exactly $0 of booking budget left.',
    'BIG SWING':'Secure Year Two after spending $45+ on a single artist.',
    'NO SUPERSTARS NEEDED':'Score 90+ without booking a superstar-tier artist.',
    'HOMETOWN HERO':'Book an artist with a major hometown boost in the host city.',
    'READ THE ROOM':'Finish with Local Fit of +8 or better.',
    'BIG TENT':'Secure Year Two with a Wide Crowd Mix.',
    'MR. 305':'Book Pitbull in Miami.',
    'BORICUA BLOCKBUSTER':'Book Bad Bunny in San Juan.',
    'NEVERMIND THE FORECAST':'Book Nirvana in Seattle.',
    'ROCK EN ESPAÑOL':'Book Maná in Mexico City.',
    'BIG EASY HOMECOMING':'Book The Revivalists in New Orleans.'
  };
  const specialIcons={'MR. 305':'👨‍🦲','BORICUA BLOCKBUSTER':'🐸'};

  function patchBadgeCards(){
    document.querySelectorAll('.achievement-card').forEach(card=>{
      const titleEl=card.querySelector('strong');
      if(!titleEl)return;
      const title=titleEl.textContent.trim().toUpperCase();
      const requirement=requirementsByTitle[title];
      if(!requirement)return;
      const unlocked=card.classList.contains('unlocked');
      let req=card.querySelector('.achievement-req');
      if(!req){req=document.createElement('div');req.className='achievement-req';card.appendChild(req)}
      const text=(unlocked?'Earned by: ':'Goal: ')+requirement;
      if(req.textContent!==text)req.textContent=text;
      if(specialIcons[title]){
        const icon=card.querySelector('.achievement-icon');
        if(icon&&icon.textContent!==specialIcons[title])icon.textContent=specialIcons[title];
      }
    });

    document.querySelectorAll('.achievement-unlock').forEach(card=>{
      const strong=card.querySelector('strong');
      if(!strong)return;
      const match=Object.keys(requirementsByTitle).find(title=>strong.textContent.toUpperCase().includes(title));
      if(!match)return;
      let req=card.querySelector('.achievement-req');
      if(!req){req=document.createElement('div');req.className='achievement-req';card.appendChild(req)}
      const text='Earned by: '+requirementsByTitle[match];
      if(req.textContent!==text)req.textContent=text;
      if(specialIcons[match])strong.textContent=specialIcons[match]+' '+match.replace(/\b\w/g,c=>c);
    });
  }

  let scheduled=false;
  function schedulePatch(){
    if(scheduled)return;
    scheduled=true;
    requestAnimationFrame(()=>{scheduled=false;patchBadgeCards()});
  }

  patchBadgeCards();
  setTimeout(patchBadgeCards,50);
  new MutationObserver(schedulePatch).observe(document.body,{childList:true,subtree:true});

  const buildNode=[...document.querySelectorAll('body *')].find(el=>el.childElementCount===0&&el.textContent.trim().startsWith('build 0.16.2'));
  if(buildNode)buildNode.textContent='build 0.16.2 · badge details fixed';
})();