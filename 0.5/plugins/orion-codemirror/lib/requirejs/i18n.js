(function(){function e(e,t,n,r,i,s){t[e]&&(n.push(e),(t[e]===!0||t[e]===1)&&r.push(i+e+"/"+s))}function t(e,t,n,r,i){var s=r+t+"/"+i;require._fileExists(e.toUrl(s))&&n.push(s)}function n(e,t,n){for(var r in t)!(r in i)&&(!(r in e)||n)&&(e[r]=t[r])}var r=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/,i={};define({version:"1.0.0",load:function(i,s,o,u){u=u||{};var f,l=r.exec(i),h=l[1],p=l[4],v=l[5],m=p.split("-"),g=[],y={},b,w,E="";l[5]?(h=l[1],f=h+v):(f=i,v=l[4],p=u.locale||(u.locale=typeof navigator=="undefined"?"root":(navigator.language||navigator.userLanguage||"root").toLowerCase()),m=p.split("-"));if(u.isBuild){g.push(f),t(s,"root",g,h,v);for(b=0;w=m[b];b++)E+=(E?"-":"")+w,t(s,E,g,h,v);s(g,function(){o()})}else s([f],function(t){var r=[];e("root",t,r,g,h,v);for(b=0;w=m[b];b++)E+=(E?"-":"")+w,e(E,t,r,g,h,v);s(g,function(){var e,i;for(e=r.length-1;e>-1&&(w=r[e]);e--){i=t[w];if(i===!0||i===1)i=s(h+w+"/"+v);n(y,i)}o(y)})})}})})()