(()=>{
  const requirements={
    first_festival:'Complete your first festival.',
    year_two_material:'Secure Year Two.',
    promoter_on_the_rise:'Score 80+.',
    headliner_status:'Score 90+.',
    century_club:'Score 100+.',
    packed_field:'Sell 50,000 tickets.',
    black_ink:'Finish profitable.',
    seven_figures:'Earn $1M+ profit.',
    big_business:'Earn $3M+ profit.',
    printing_money:'Earn $5M+ profit.',
    penny_pincher:'Secure Year Two with $15+ of booking budget unused.',
    perfectly_spent:'Finish with exactly $0 of booking budget left.',
    big_swing:'Secure Year Two after spending $45+ on a single artist.',
    no_superstars_needed:'Score 90+ without booking a superstar-tier artist.',
    hometown_hero:'Book an artist with a major hometown boost in the host city.',
    read_the_room:'Finish with Local Fit of +8 or better.',
    big_tent:'Secure Year Two with a Wide Crowd Mix.',
    mr_305:'Book Pitbull in Miami.',
    boricua_blockbuster:'Book Bad Bunny in San Juan.',
    nevermind_forecast:'Book Nirvana in Seattle.',
    rock_en_espanol:'Book Maná in Mexico City.',
    big_easy_homecoming:'Book The Revivalists in New Orleans.'
  };

  ACHIEVEMENTS.forEach(d=>{ if(requirements[d.id]) d.requirement=requirements[d.id]; });

  achievementCard=function(d,isUnlocked){
    if(d.hidden&&!isUnlocked)return '<div class="achievement-card secret locked"><div class="achievement-icon">❓</div><strong>???</strong><p>Secret achievement</p></div>';
    return '<div class="achievement-card '+(isUnlocked?'unlocked':'locked')+'"><div class="achievement-icon">'+d.icon+'</div><strong>'+d.title+'</strong><p>'+d.copy+'</p>'+(d.requirement?'<div class="achievement-req">'+(isUnlocked?'Earned by: ':'Goal: ')+d.requirement+'</div>':'')+'</div>';
  };

  achievementUnlockMarkup=function(items){
    if(!items.length)return '';
    return items.map(d=>'<div class="achievement-unlock"><span>New badge unlocked</span><strong>'+d.icon+' '+d.title+'</strong><p>'+d.copy+'</p>'+(d.requirement?'<div class="achievement-req">Earned by: '+d.requirement+'</div>':'')+'</div>').join('');
  };

  const buildNode=[...document.querySelectorAll('body *')].find(el=>el.childElementCount===0&&el.textContent.trim()==='build 0.16.2 · ready');
  if(buildNode)buildNode.textContent='build 0.16.2 · badge detail update';
})();