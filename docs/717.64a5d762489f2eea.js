"use strict";(self.webpackChunkgameover=self.webpackChunkgameover||[]).push([[717],{4586:(_,m,n)=>{n.d(m,{D:()=>e});var p=n(6895),l=n(1571);class e{static#e=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275mod=l.oAB({type:e});static#i=this.\u0275inj=l.cJS({imports:[p.ez]})}},5553:(_,m,n)=>{n.d(m,{Y:()=>l});var p=n(1571);class l{transform(c,t="background.jpg"){return null!=c?c.replace("thumbnail.jpg",t):""}static#e=this.\u0275fac=function(t){return new(t||l)};static#t=this.\u0275pipe=p.Yjl({name:"sliceuntile",type:l,pure:!0})}},4729:(_,m,n)=>{n.d(m,{B:()=>e});var p=n(1571),l=n(529);class e{constructor(t){this._HttpClient=t}getGames(){return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games")}getGamesId(t){return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${t}`)}getGamesByCat(t){return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${t}`)}getGamesByPlatForm(t){return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${t}`)}getGamesBySored(t){return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${t}`)}getGamesBySPC(t,r,g){return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?${"Browse By Platform:"!=r?`platform=${r}&`:""}${"Sort By:"!=g?`sort-by=${g}&`:""}${"all"!=t?`category=${t}&`:""}`)}playVideo(t,r){t.classList.replace("d-none","d-flex"),t.muted=!0,r.classList.replace("d-none","d-flex"),t.play().then(()=>{r.classList.replace("d-flex","d-none")}).catch(g=>{console.log("Not Support")})}stopVideo(t,r){r.classList.replace("d-flex","d-none"),t.muted=!0,t.pause(),t.classList.replace("d-flex","d-none")}static#e=this.\u0275fac=function(r){return new(r||e)(p.LFG(l.eN))};static#t=this.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}},1717:(_,m,n)=>{n.r(m),n.d(m,{DetailsModule:()=>h});var p=n(6895),l=n(646),e=n(1571),c=n(4729),t=n(5553);class r{transform(s){return null!=s?s.split("\n"):[]}static#e=this.\u0275fac=function(i){return new(i||r)};static#t=this.\u0275pipe=e.Yjl({name:"split",type:r,pure:!0})}function g(o,s){if(1&o&&(e.TgZ(0,"p",49),e._uU(1),e.qZA()),2&o){const i=s.$implicit;e.xp6(1),e.hij(" ",i," ")}}function b(o,s){1&o&&(e.TgZ(0,"span"),e._uU(1,"More"),e.qZA())}function y(o,s){1&o&&(e.TgZ(0,"span"),e._uU(1,"Less"),e.qZA())}function A(o,s){1&o&&e._UZ(0,"i",50)}function w(o,s){1&o&&e._UZ(0,"i",51)}function x(o,s){if(1&o&&(e.TgZ(0,"div",38),e._UZ(1,"img",52),e.qZA()),2&o){const i=s.$implicit,a=e.oxw();e.xp6(1),e.Q6J("src",i.image,e.LSH)("alt",a.game.title)}}function U(o,s){if(1&o&&(e.TgZ(0,"h3"),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" Minimum System Requirements (",i.game.platform,") ")}}function C(o,s){if(1&o&&(e.TgZ(0,"div",38)(1,"div",39)(2,"h4",53),e._uU(3),e.qZA(),e.TgZ(4,"p",54),e._uU(5),e.qZA()()()),2&o){const i=s.$implicit;e.xp6(3),e.hij(" ",i.key," "),e.xp6(2),e.Oqu(i.value)}}const q=function(o){return{show:o}};class d{constructor(s,i){this._ActivatedRoute=s,this._GamesService=i,this.show=!1,this.game={}}ngOnInit(){this._GamesService.getGamesId(this._ActivatedRoute.snapshot.params.id).subscribe({next:i=>{console.log(i),this.game=i}})}playVideo(s,i){this._GamesService.playVideo(s,i)}stopVideo(s,i){this._GamesService.stopVideo(s,i)}showText(){this.show=!this.show}static#e=this.\u0275fac=function(i){return new(i||d)(e.Y36(l.gz),e.Y36(c.B))};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-details"]],decls:116,vars:35,consts:[[1,"py-3"],[1,"container",3,"mouseenter","mouseleave"],[1,"row","g-4"],[1,"col-12","col-md-4"],[1,"card","overflow-hidden","border-0","bg-transparent","cp","position-sticky",2,"top","60px"],[1,"position-relative","mb-0"],[1,"w-100","h-100","card-img-top",3,"src","alt"],["preload","none","muted","true","loop","",1,"w-100","h-100","position-absolute","top-0","start-0","d-none",3,"src"],["vid",""],[1,"layer","position-absolute","top-0","start-0","w-100","h-100","bg-primary","bg-opacity-50","d-none","justify-content-center","align-items-center"],["spinner",""],["role","status",1,"spinner-grow","c-blue",2,"width","3rem","height","3rem"],[1,"visually-hidden"],[1,"mt-4","hstack","gap-2"],[1,"badge","p-3","bg-darklight","text-light","text-uppercase","fw-lighter"],["target","_blank",1,"text-uppercase","btn-r","text-white","text-decoration-none","btn-blue","d-flex","align-items-center","gap-1","flex-grow-1","justify-content-center",3,"href"],[1,"fa-solid","fa-play"],[1,"col-12","col-md-8"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/home",1,"small","text-reset","text-decoration-none"],["routerLink","/games",1,"small","text-reset","text-decoration-none"],["aria-current","page",1,"breadcrumb-item","active","small"],[1,"title"],[1,"h3"],[1,"my-3","d-grid","gap-4","p-0","m-0"],[1,"d-flex","align-items-center","gap-3"],[1,"fas","fa-star","fa-xl"],[1,"fa-solid","fa-hill-rockslide","fa-xl"],[1,"text-details",3,"ngClass"],["class","mb-3",4,"ngFor","ngForOf"],["role","button",1,"text-light","mt-3","cp",3,"click"],[4,"ngIf"],[1,"text-muted",2,"font-size","12px"],[1,"small"],[1,"fas","fa-info-circle","me-2"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","g-4"],[1,"col"],[1,"item"],[1,"h5","mb-0"],[1,"text-light"],[1,"d-flex","align-items-center","gap-2"],["class","fa-brands fa-windows",4,"ngIf"],["class","fa-solid fa-window-maximize",4,"ngIf"],[1,"text-light","mb-0"],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-3","g-4","pb-5"],["class","col",4,"ngFor","ngForOf"],[1,"row","row-cols-1","row-cols-md-2","gx-4","pb-5"],[1,"mb-3"],[1,"fa-brands","fa-windows"],[1,"fa-solid","fa-window-maximize"],[1,"w-100","rounded",3,"src","alt"],[1,"h6","mb-0","fw-light","text-uppercase"],[1,"text-light","small","text-muted"]],template:function(i,a){if(1&i){const v=e.EpF();e.TgZ(0,"header",0),e.ALo(1,"sliceuntile"),e.TgZ(2,"div",1),e.NdJ("mouseenter",function(){e.CHM(v);const f=e.MAs(9),Z=e.MAs(12);return e.KtG(a.playVideo(f,Z))})("mouseleave",function(){e.CHM(v);const f=e.MAs(9),Z=e.MAs(12);return e.KtG(a.stopVideo(f,Z))}),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"figure",5),e._UZ(7,"img",6)(8,"video",7,8),e.ALo(10,"sliceuntile"),e.TgZ(11,"div",9,10)(13,"div",11)(14,"span",12),e._uU(15,"Loading..."),e.qZA()()()(),e.TgZ(16,"div",13)(17,"span",14),e._uU(18,"Free"),e.qZA(),e.TgZ(19,"a",15),e._uU(20," play now "),e._UZ(21,"i",16),e.qZA()()()(),e.TgZ(22,"div",17)(23,"div")(24,"nav",18)(25,"ol",19)(26,"li",20)(27,"a",21),e._uU(28,"Home"),e.qZA()(),e.TgZ(29,"li",20)(30,"a",22),e._uU(31,"Free Games"),e.qZA()(),e.TgZ(32,"li",23),e._uU(33),e.qZA()()()(),e.TgZ(34,"article")(35,"div",24)(36,"h2",25),e._uU(37,"Diablo Immortal"),e.qZA()(),e.TgZ(38,"ul",26)(39,"li",27),e._UZ(40,"i",28),e.TgZ(41,"span"),e._uU(42,"Massively Positive"),e.qZA()(),e.TgZ(43,"li",27),e._UZ(44,"i",29),e.TgZ(45,"span"),e._uU(46),e.qZA()()()(),e.TgZ(47,"article")(48,"div",24)(49,"h2",25),e._uU(50,"About Diablo Immortal"),e.qZA()(),e.TgZ(51,"div",30),e.YNc(52,g,2,1,"p",31),e.ALo(53,"split"),e.qZA(),e.TgZ(54,"p",32),e.NdJ("click",function(){return a.showText()}),e._uU(55," Read "),e.YNc(56,b,2,0,"span",33),e.YNc(57,y,2,0,"span",33),e.qZA(),e._UZ(58,"hr"),e.TgZ(59,"p",34),e._uU(60," Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding experience. In order to keep everything free to use we may sometimes earn a small commission from some partners. Find more info in our FAQ page. "),e.qZA(),e.TgZ(61,"h3"),e._uU(62,"Additional Information"),e.qZA(),e.TgZ(63,"p",35),e._UZ(64,"i",36),e._uU(65," Please note this free-to-play game may or may not offer optional in-game purchases. "),e.qZA(),e._UZ(66,"hr"),e.TgZ(67,"div",37)(68,"div",38)(69,"div",39)(70,"h4",40),e._uU(71,"Title"),e.qZA(),e.TgZ(72,"p",41),e._uU(73),e.qZA()()(),e.TgZ(74,"div",38)(75,"div",39)(76,"h4",40),e._uU(77,"Developer"),e.qZA(),e.TgZ(78,"p",41),e._uU(79),e.qZA()()(),e.TgZ(80,"div",38)(81,"div",39)(82,"h4",40),e._uU(83,"Publisher"),e.qZA(),e.TgZ(84,"p",41),e._uU(85),e.qZA()()(),e.TgZ(86,"div",38)(87,"div",39)(88,"h4",40),e._uU(89,"Release Date"),e.qZA(),e.TgZ(90,"p",41),e._uU(91),e.qZA()()(),e.TgZ(92,"div",38)(93,"div",39)(94,"h4",40),e._uU(95,"Genre"),e.qZA(),e.TgZ(96,"p",41),e._uU(97),e.qZA()()(),e.TgZ(98,"div",38)(99,"div",39)(100,"h4",40),e._uU(101,"Platform"),e.qZA(),e.TgZ(102,"div",42),e.YNc(103,A,1,0,"i",43),e.YNc(104,w,1,0,"i",44),e.TgZ(105,"p",45),e._uU(106),e.qZA()()()()(),e.TgZ(107,"h3"),e._uU(108,"Diablo Immortal Screenshots"),e.qZA(),e.TgZ(109,"div",46),e.YNc(110,x,2,2,"div",47),e.qZA(),e.YNc(111,U,2,1,"h3",33),e._UZ(112,"hr"),e.TgZ(113,"div",48),e.YNc(114,C,6,2,"div",47),e.ALo(115,"keyvalue"),e.qZA()()()()()()}2&i&&(e.Jzz("background-image: url('",e.lcZ(1,24,a.game.thumbnail),"')"),e.xp6(7),e.Q6J("src",a.game.thumbnail,e.LSH)("alt",a.game.title),e.xp6(1),e.Q6J("src",e.xi3(10,26,a.game.thumbnail,"videoplayback.webm"),e.LSH),e.xp6(11),e.Q6J("href",a.game.game_url,e.LSH),e.xp6(14),e.hij(" ",a.game.title," "),e.xp6(13),e.hij("Status ",a.game.status,""),e.xp6(5),e.Q6J("ngClass",e.VKq(33,q,a.show)),e.xp6(1),e.Q6J("ngForOf",e.lcZ(53,29,a.game.description)),e.xp6(4),e.Q6J("ngIf",!a.show),e.xp6(1),e.Q6J("ngIf",a.show),e.xp6(16),e.Oqu(a.game.title),e.xp6(6),e.Oqu(a.game.developer),e.xp6(6),e.Oqu(a.game.publisher),e.xp6(6),e.Oqu(a.game.release_date),e.xp6(6),e.Oqu(a.game.genre),e.xp6(6),e.Q6J("ngIf","Windows"===a.game.platform),e.xp6(1),e.Q6J("ngIf","Web Browser"===a.game.platform),e.xp6(2),e.Oqu(a.game.platform),e.xp6(4),e.Q6J("ngForOf",a.game.screenshots),e.xp6(1),e.Q6J("ngIf",a.game.minimum_system_requirements),e.xp6(3),e.Q6J("ngForOf",e.lcZ(115,31,a.game.minimum_system_requirements)))},dependencies:[p.mk,p.sg,p.O5,l.rH,p.Nd,t.Y,r],styles:['header[_ngcontent-%COMP%]{position:relative;z-index:1;background-position:center;background-size:cover;transition:height .5s}header[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:-1;inset:0;background-image:linear-gradient(90deg,#292e33 0%,rgba(35,46,46,.1) 16.15%,rgba(35,46,46,.1) 80.21%,#292e33 100%),linear-gradient(180deg,rgb(39,43,48) 0%,rgba(0,0,0,.58) 33.85%,#292e33 100%)}header[_ngcontent-%COMP%]   .text-details[_ngcontent-%COMP%]{height:100px;overflow:hidden}header[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{height:min-content!important}']})}const D=[{path:"",component:d}];class u{static#e=this.\u0275fac=function(i){return new(i||u)};static#t=this.\u0275mod=e.oAB({type:u});static#i=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(D),l.Bz]})}var O=n(4586);class h{static#e=this.\u0275fac=function(i){return new(i||h)};static#t=this.\u0275mod=e.oAB({type:h});static#i=this.\u0275inj=e.cJS({imports:[p.ez,u,O.D]})}}}]);