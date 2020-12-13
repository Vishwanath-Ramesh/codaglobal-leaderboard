(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{159:function(e,a,r){var n=r(25),t=r(160);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]);var l={insert:"head",singleton:!1};n(t,l);e.exports=t.locals||{}},160:function(e,a,r){"use strict";r.r(a);var n=r(7),t=r.n(n)()(!1);t.push([e.i,".actions {\r\n  position: fixed;\r\n  display: flex;\r\n  flex-direction: column;\r\n  right: 1rem;\r\n  bottom: 1rem;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n.actions .actions__item {\r\n  margin: 0.5rem;\r\n}\r\n\r\n.actions .actions__item.MuiFab-primary {\r\n  background-color: rgba(0, 0, 0, 0.87);\r\n}\r\n\r\n.actions .actions__item.MuiFab-primary:hover {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  color: #000000;\r\n}\r\n\r\n#download-link {\r\n  display: none;\r\n}\r\n",""]),a.default=t},161:function(e,a,r){var n=r(25),t=r(162);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]);var l={insert:"head",singleton:!1};n(t,l);e.exports=t.locals||{}},162:function(e,a,r){"use strict";r.r(a);var n=r(7),t=r.n(n)()(!1);t.push([e.i,".modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 420px;\r\n  /* height: 100%; */\r\n  background: #ffffff;\r\n  box-shadow: 0px 0.42vw 1.48vh rgba(0, 0, 0, 0.1),\r\n    0 25px 50px rgba(0, 0, 0, 0.2);\r\n  position: absolute;\r\n  right: 0%;\r\n  top: 64px;\r\n  bottom: 0%;\r\n  overflow-y: auto;\r\n  z-index: 1200;\r\n}\r\n\r\n.modal__header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1.5rem;\r\n}\r\n\r\n.modal__close .MuiIconButton-root {\r\n  padding: 0px;\r\n}\r\n\r\n.modal__title {\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  line-height: 20px;\r\n  color: #303030;\r\n}\r\n\r\n.modal__content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0rem 1rem;\r\n  gap: 1rem;\r\n}\r\n\r\n.modal__footer {\r\n  display: flex;\r\n  margin-top: 1rem;\r\n  padding: 1rem 1rem;\r\n  gap: 1rem;\r\n  border-top: 1px solid #ececec;\r\n}\r\n\r\n.modal .MuiButton-root {\r\n  border-radius: 4px;\r\n  text-transform: none;\r\n}\r\n\r\n.modal .modal__success,\r\n.modal .modal__success.MuiButton-root:hover {\r\n  background-color: var(--primary-color);\r\n  color: #ffffff;\r\n}\r\n\r\n.modal__cancel,\r\n.modal__cancel.MuiButton-root:hover {\r\n  color: #ffffff;\r\n}\r\n\r\n@media (max-width: 80em) {\r\n  .modal {\r\n    width: 420px;\r\n  }\r\n}\r\n\r\n@media (max-width: 60em) {\r\n  .modal {\r\n    width: 100%;\r\n    top: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 37.5em) {\r\n  .modal {\r\n    width: 100%;\r\n    top: 0;\r\n  }\r\n}\r\n",""]),a.default=t},166:function(e,a,r){var n=r(25),t=r(167);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[e.i,t,""]]);var l={insert:"head",singleton:!1};n(t,l);e.exports=t.locals||{}},167:function(e,a,r){"use strict";r.r(a);var n=r(7),t=r.n(n)()(!1);t.push([e.i,".leaderboard {\r\n  display: flex;\r\n  padding: 1rem;\r\n  height: 81%;\r\n  width: 80%;\r\n  font-size: 1rem;\r\n}\r\n\r\n.leaderboard__table {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n/* Match Modal */\r\n.matchmodal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  color: #ffffff;\r\n  background-color: #fff;\r\n}\r\n\r\n.matchmodal__content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.leaderboard__selectedteam {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  color: #000000;\r\n}\r\n\r\n.leaderboard__resulttype {\r\n  justify-content: center;\r\n}\r\n\r\n.ag-theme-alpine-dark {\r\n  font-family: Alegreya, serif;\r\n}\r\n.ag-header-group-cell-label {\r\n  justify-content: center;\r\n}\r\n\r\n.leaderboard .ag-header-group-cell {\r\n  font-size: 50px;\r\n}\r\n\r\n.ag-pivot-on .ag-header-group-cell {\r\n  font-size: 10px;\r\n  color: green;\r\n}\r\n\r\n.ag-header-group-cell-label {\r\n  color: #8a6d3b;\r\n}\r\n\r\n.leaderboard .ag-header-cell-label {\r\n  color: #2196f3;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.ag-pivot-on .ag-header-cell-label .ag-header-cell-text {\r\n  /*There is empty space left at the top from the menu and sort\r\n    icons not used*/\r\n  /* margin-top: 25px; */\r\n}\r\n",""]),a.default=t},196:function(e,a,r){"use strict";r.r(a);var n=r(102),t=r.n(n),l=r(103),o=r.n(l),i=r(124),c=r.n(i),d=r(130),s=r.n(d),u=r(0),m=r.n(u),p=r(193),f=r(199),h=r(204),b=r(198),g=r(194),E=r(205),_=r(192),v=r(131),T=r(139),y=r.n(T);String("production").toLowerCase();var w,M,D={serverConfig:{baseURL:"http://localhost:5000"}},N=y.a.create({baseURL:null!==(w=null===(M=D.serverConfig)||void 0===M?void 0:M.baseURL)&&void 0!==w?w:"",headers:{"content-type":"application/json"}}),x=function(){var e=o()(t.a.mark((function e(a,r,n){var l;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({method:a,url:r,data:n});case 2:return l=e.sent,e.abrupt("return",l);case 4:case"end":return e.stop()}}),e)})));return function(a,r,n){return e.apply(this,arguments)}}(),A={getLeaderboardData:{method:"get",url:"/api/leaderboard"},getTeam:{method:"get",url:"/api/teams"},addTeam:{method:"post",url:"/api/teams"},createMatch:{method:"post",url:"/api/matches"}},C=(r(157),r(186)),O=r(187),F=r(188),R=r(3),S=r.n(R),L=(r(159),function(e){var a=e.dispatch;return m.a.createElement("div",{className:"actions"},m.a.createElement(C.a,{className:"actions__item",color:"primary","aria-label":"add",disableRipple:!0,onClick:function(){return a({type:"SHOW_TEAMMODAL",showTeamModal:!0})}},m.a.createElement(O.a,null)),m.a.createElement(C.a,{className:"actions__item",color:"primary","aria-label":"add",disableRipple:!0,onClick:function(){return a({type:"SHOW_MATCHMODAL",showMatchModal:!0})}},m.a.createElement(F.a,null)))});L.defaultProps={dispatch:function(){return null}},L.propTypes={dispatch:S.a.func};var k=L,H=r(189);r(161);function j(e){var a=e.children;return m.a.createElement("div",{className:"modal__header"},a)}function P(e){var a=e.children;return m.a.createElement("span",{className:"modal__title"},a)}function W(e){var a=e.children,r=e.onClick;return m.a.createElement("span",{className:"modal__close"},m.a.createElement(H.a,{"aria-label":"Close",disableRipple:!0,onClick:r},a))}function V(e){var a=e.children;return m.a.createElement("div",{className:"modal__content"},a)}function q(e){var a=e.children;return m.a.createElement("div",{className:"modal__footer"},a)}var I=function(e){var a=e.open,r=e.children;return a?m.a.createElement("div",{className:"modal"},r):null};j.propTypes={children:S.a.element.isRequired},P.propTypes={children:S.a.element.isRequired},W.propTypes={children:S.a.element.isRequired,onClick:S.a.func.isRequired},V.propTypes={children:S.a.element.isRequired},q.propTypes={children:S.a.element.isRequired},I.defaultProps={open:!1},I.propTypes={open:S.a.bool,children:S.a.element.isRequired},I.Header=j,I.Title=P,I.Close=W,I.Content=V,I.Footer=q;var z=I,B=r(200),U=r(201),G=r(195),J=function(e){var a=e.className,r=e.Field,n=e.value,t=e.onChangeHandler;return m.a.createElement(B.a,{variant:"outlined"},m.a.createElement(U.a,null,null==r?void 0:r.FieldLabel),m.a.createElement(G.a,{id:null==r?void 0:r.FieldValue,className:"dropdown ".concat(a||""),variant:"outlined",native:!0,onChange:function(e){t&&t(e,{id:null==r?void 0:r.FieldValue,value:e.target.value})},label:null==r?void 0:r.FieldLabel,disabled:null==r?void 0:r.disabled,defaultValue:null==r?void 0:r.DefaultValue,value:n},m.a.createElement("option",{"aria-label":"None",value:"0"},"--Select--"),r.Datasource&&r.Datasource.map((function(e){return m.a.createElement("option",{key:e[r.TextField],value:e[r.ValueField]},e[r.TextField])}))))};J.defaultProps={className:"",value:"",onChangeHandler:function(){}},J.propTypes={Field:S.a.shape({FieldValue:S.a.string.isRequired,DefaultValue:S.a.string,FieldLabel:S.a.string,TextField:S.a.string,ValueField:S.a.string,Datasource:S.a.arrayOf(S.a.object),disabled:S.a.bool}).isRequired,value:S.a.string,onChangeHandler:S.a.func,className:S.a.string};var Y=J;r(164),r(166);function K(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?K(Object(r),!0).forEach((function(a){s()(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function X(e,a){switch(a.type){case"SHOW_TEAMMODAL":return Q(Q({},e),{},{showTeamModal:a.showTeamModal});case"SHOW_MATCHMODAL":return Q(Q({},e),{},{showMatchModal:a.showMatchModal});case"RESULTTYPE_CHANGE":return Q(Q({},e),{},{resultType:a.resultType});case"SET_TEAM1":return Q(Q({},e),{},{team1:a.team1});case"SET_TEAM2":return Q(Q({},e),{},{team2:a.team2});case"SET_SELECTEDTEAM":return Q(Q({},e),{},{selectedTeam:a.selectedTeam});case"SET_TEAMNAME":return Q(Q({},e),{},{teamName:a.teamName});case"ON_TEAMADD":return Q(Q({},e),{},{showTeamModal:!1,teamName:""});case"ON_TEAMPAIRED":return Q(Q({},e),{},{showMatchModal:!1,team1:"",team2:"",selectedTeam:"",resultType:"WIN"});case"SET_LEADERBOARDDATA":return Q(Q({},e),{},{leaderboardData:Q(Q({},e.leaderboardData),{},{rowData:a.rowData})});default:throw new Error("Unhandled action type: ".concat(a.type))}}a.default=function(){var e=m.a.useReducer(X,{showTeamModal:!1,showMatchModal:!1,resultType:"WIN",teamName:"",team1:"0",team2:"0",selectedTeam:"",leaderboardData:{columnDefs:[{headerName:"Leaderboard",children:[{field:"team_name",headerName:"Team Name",filter:"agTextColumnFilter"},{field:"wins",headerName:"Wins",filter:"agNumberColumnFilter"},{field:"losses",headerName:"Losses",filter:"agNumberColumnFilter"},{field:"ties",headerName:"Ties",filter:"agNumberColumnFilter"},{field:"score",headerName:"Score",filter:"agNumberColumnFilter"}]}],rowData:[]}}),a=c()(e,2),r=a[0],n=a[1];m.a.useEffect((function(){function e(){return(e=o()(t.a.mark((function e(){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(A.getLeaderboardData.method,A.getLeaderboardData.url).then((function(e){n({type:"SET_LEADERBOARDDATA",rowData:e.data})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]);var l=r.leaderboardData,i=r.showTeamModal,d=r.showMatchModal,s=r.resultType,u=r.team1,T=r.team2,y=r.teamName;return m.a.createElement("div",{className:"leaderboard"},m.a.createElement("div",{className:"ag-theme-alpine-dark leaderboard__table"},m.a.createElement(v.AgGridReact,{defaultColDef:{flex:1,resizable:!0,floatingFilter:!0,sortable:!0,enableRowGroup:!0},groupHeaderHeight:75,rowData:l.rowData,columnDefs:l.columnDefs,pagination:!0,paginationAutoPageSize:!0})),m.a.createElement(z,{open:d},m.a.createElement(z.Header,null,m.a.createElement(z.Title,null,"Match"),m.a.createElement(z.Close,{onClick:function(){return n({type:"SHOW_MATCHMODAL",showMatchModal:!1})}},m.a.createElement(_.a,null))),m.a.createElement(z.Content,null,m.a.createElement(Y,{Field:{FieldID:"Team1",DefaultValue:"0",FieldLabel:"Team 1",Datasource:l.rowData,TextField:"team_name",ValueField:"team_name"},value:u,onChangeHandler:function(e,a){return n({type:"SET_TEAM1",team1:a.value})}}),m.a.createElement(Y,{Field:{FieldID:"Team2",DefaultValue:"0",FieldLabel:"Team 2",Datasource:l.rowData,TextField:"team_name",ValueField:"team_name"},value:T,onChangeHandler:function(e,a){return n({type:"SET_TEAM2",team2:a.value})}}),m.a.createElement("div",{className:"leaderboard__selectedteam"},m.a.createElement("div",{className:"leaderboard__selectedteam_label1"},u),m.a.createElement(p.a,{color:"default",inputProps:{"aria-label":"checkbox with default color"},onChange:function(e){var a=e.target;return n({type:"SET_SELECTEDTEAM",selectedTeam:a.checked?T:u})}}),m.a.createElement("div",{className:"leaderboard__selectedteam_label2"},T)),m.a.createElement(f.a,{row:!0,className:"leaderboard__resulttype","aria-label":"gender",name:"gender1",value:s,onChange:function(e){var a=e.target;return n({type:"RESULTTYPE_CHANGE",resultType:a.value})}},m.a.createElement(h.a,{value:"WIN",control:m.a.createElement(b.a,{disableRipple:!0}),label:"Winner"}),m.a.createElement(h.a,{value:"LOSE",control:m.a.createElement(b.a,{disableRipple:!0}),label:"Loser"}),m.a.createElement(h.a,{value:"TIE",control:m.a.createElement(b.a,{disableRipple:!0}),label:"Tie"}))),m.a.createElement(z.Footer,null,m.a.createElement(g.a,{variant:"contained",color:"primary",disableRipple:!0,disableElevation:!0,className:"modal__success",onClick:function(){var e=r.team1,a=r.team2,t=r.selectedTeam,l=r.resultType,o="";if("0"===e&&(o+="\n \t Team 1 should be selected"),"0"===a&&(o+="\n \t Team 2 should be selected"),o)return alert("Please select the following fields".concat(o));var i={team1:e,team2:a,selectedTeam:t||e,result:l};return x(A.createMatch.method,A.createMatch.url,i).then((function(e){n({type:"ON_TEAMPAIRED",rowData:e.data.leaderboardData}),alert("Team added successfully")})).catch((function(){return alert("Something went wrong!")}))}},"Continue"),m.a.createElement(g.a,{variant:"contained",color:"secondary",disableRipple:!0,disableElevation:!0,className:"modal__cancel",onClick:function(){return n({type:"SHOW_MATCHMODAL",showMatchModal:!1})}},"Cancel"))),m.a.createElement(z,{open:i},m.a.createElement(z.Header,null,m.a.createElement(z.Title,null,"Add Team"),m.a.createElement(z.Close,{onClick:function(){return n({type:"SHOW_TEAMMODAL",showTeamModal:!1})}},m.a.createElement(_.a,null))),m.a.createElement(z.Content,null,m.a.createElement(E.a,{id:"team-name",label:"Team Name",variant:"outlined",value:y,onChange:function(e){var a=e.target;return n({type:"SET_TEAMNAME",teamName:a.value})}})),m.a.createElement(z.Footer,null,m.a.createElement(g.a,{variant:"contained",disableRipple:!0,disableElevation:!0,className:"modal__success",onClick:function(){if(!r.teamName)return alert("Team name can't be empty");var e={team_name:r.teamName};return x(A.addTeam.method,A.addTeam.url,e).then((function(){n({type:"ON_TEAMADD"}),alert("Team added successfully")})).catch((function(){return alert("Something went wrong!")}))}},"Continue"),m.a.createElement(g.a,{variant:"contained",disableRipple:!0,disableElevation:!0,className:"modal__cancel",onClick:function(){return n({type:"SHOW_TEAMMODAL",showTeamModal:!1})}},"Cancel"))),m.a.createElement(k,{dispatch:n}))}}}]);