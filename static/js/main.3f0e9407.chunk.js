(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{218:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"whiteListMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},244:function(t,e){},267:function(t,e){},269:function(t,e){},346:function(t,e){},348:function(t,e){},381:function(t,e){},386:function(t,e){},388:function(t,e){},395:function(t,e){},408:function(t,e){},431:function(t,e){},440:function(t,e){},442:function(t,e){},511:function(t,e,n){},513:function(t,e,n){},514:function(t,e,n){},515:function(t,e,n){"use strict";n.r(e);var a,i,r,o,s,c,u,l,p,d,b,y,m,x=n(2),j=n(84),h=n.n(j),f=n(13),g=n(118),O=n(17),w=n(57),A=n(19),T=n.n(A),C=n(68),v=n(67),k=n.n(v),S=n(217),M=n.n(S),E=n(218),N=n(69),F=n(219),I=n(16),B={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},B),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},B),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:e.payload.account});default:return t}},W={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,name:e.payload.name,totalSupply:e.payload.totalSupply,cost:e.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},W),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},D=Object(N.b)({blockchain:R,data:z}),L=[F.a],P=Object(N.c)(N.a.apply(void 0,L)),J=Object(N.d)(D,P),H=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},U=function(t){return function(){var t=Object(C.a)(T.a.mark((function t(e){var n,a,i;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,J.getState().blockchain.smartContract.methods.name().call();case 4:return n=t.sent,t.next=7,J.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=t.sent,t.next=10,J.getState().blockchain.smartContract.methods.cost().call();case 10:i=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),e(H("Could not load data from contract."));case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()},_=function(t){return{type:"CONNECTION_FAILED",payload:t}},X=function(t){return function(){var e=Object(C.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(U());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=n(18),V=q.a.div(a||(a=Object(O.a)(["\n  background-color: var(--dark-grey);\n  background-image: ",';\n  background-image: url("https://raw.githubusercontent.com/CryptoBugPunks/mint/main/src/styles/city.png");\n  background-repeat: repeat-x;\n  background-size: auto 100%;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: white;\n'])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),Z=(q.a.div(i||(i=Object(O.a)(["\n  height: 8px;\n  width: 8px;\n"]))),q.a.div(r||(r=Object(O.a)(["\n  height: 16px;\n  width: 16px;\n"])))),G=q.a.div(o||(o=Object(O.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Y=q.a.div(s||(s=Object(O.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Q=q.a.div(c||(c=Object(O.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  color: white;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),K=q.a.p(u||(u=Object(O.a)(["\n  color: var(--white);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),$=(q.a.p(l||(l=Object(O.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),q.a.p(p||(p=Object(O.a)(["\n  color: var(--white);\n  font-size: 12px;\n  line-height: 1.6;\n  color: white;\n"])))),tt=(q.a.div(d||(d=Object(O.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p+"static/media/cars.f373f308.gif"),et=(n(511),n(1)),nt=q.a.button(b||(b=Object(O.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  padding: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-weight: bold;\n  font-size: 40px;\n  color: #000000;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    color: #white;\n  }\n  :hover {\n    transition-duration: .4s;\n    color: black;\n    background-color: #37F713;\n  }\n"]))),at=q.a.div(y||(y=Object(O.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),it=q.a.img(m||(m=Object(O.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 350px;\n    height: 350px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var rt=function(){var t,e,n,a,i=Object(w.b)(),r=Object(w.c)((function(t){return t.blockchain})),o=Object(w.c)((function(t){return t.data})),s=Object(x.useState)(""),c=Object(g.a)(s,2),u=c[0],l=c[1],p=Object(x.useState)(!1),d=Object(g.a)(p,2),b=d[0],y=d[1],m=function(){""!==r.account&&null!==r.smartContract&&i(U(r.account))};return Object(x.useEffect)((function(){m()}),[r.account]),Object(et.jsx)(V,{style:{backgroundColor:"var(--black)",fontSize:40},children:Object(et.jsxs)(Q,{className:"bigContainer",flex:1,ai:"center",style:{padding:24},children:[Object(et.jsx)(K,{style:(t={display:"flex",flexDirection:"row",textAlign:"left",fontSize:12,fontWeight:"bold",paddingRight:10,margin:0,borderStyle:"solid",borderColor:"black",borderWidth:0,borderRadius:50},Object(f.a)(t,"textAlign","center"),Object(f.a)(t,"justifySelf","center"),Object(f.a)(t,"justifyContent","center"),t),children:Object(et.jsx)("a",{className:"logoHolder",href:"#google",children:Object(et.jsx)("img",{alt:"BooCrew Logo",src:"data:image/png;base64,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",className:"logo"})})}),Object(et.jsxs)("div",{className:"menubar",style:{color:"blue",padding:20,borderRadius:0,borderColor:"white",borderStyle:"solid"},children:[Object(et.jsx)("a",{href:"#Minter",children:"Minter"})," | ",Object(et.jsx)("a",{href:"#Roadmap",children:"Roadmap"})," | ",Object(et.jsx)("a",{href:"https://opensea.io",children:" OpenSea"})," | ",Object(et.jsx)("a",{href:"https://twitter.com",children:"Twitter"})]}),Object(et.jsx)(G,{}),Object(et.jsxs)(Q,{className:"topdesc",flex:1,jc:"center",ai:"center",style:{backgroundColor:"black",color:"white",padding:44,paddingTop:24,maxWidth:1500,borderRadius:100,borderColor:"white",borderWidth:5,borderStyle:"solid",boxShadow:"0px 0px 10px white",textAlign:"center",marginBottom:20},children:[Object(et.jsx)("text",{className:"rainbow",style:{fontSize:30}}),"CryptoBugPunks is a collection of 10,000 unique NFTs\u2014 unique digital collectibles living on the Ethereum blockchain. ",Object(et.jsx)("br",{}),Object(et.jsx)(G,{}),"Total Supply: 10,000. ",Object(et.jsx)("br",{}),"Every single CryptoBugPunk is 1/1.",Object(et.jsx)("br",{}),Object(et.jsx)(G,{}),"The CryptoBug Punks are waiting to park up in your garage. ",Object(et.jsx)("br",{}),Object(et.jsx)(G,{}),"Let`s see how far around the world they can reach!"]}),Object(et.jsx)(at,{flex:1,style:{padding:24,paddingTop:0},children:Object(et.jsxs)(Q,{flex:1,jc:"center",ai:"center",style:{paddingTop:0,flexDirection:"column"},children:[Object(et.jsx)(K,{style:(e={textAlign:"center",fontSize:30,fontWeight:"bold",borderStyle:"solid",borderColor:"black",color:"white",backgroundColor:"black",padding:20,borderRadius:100},Object(f.a)(e,"borderColor","white"),Object(f.a)(e,"borderWidth",5),Object(f.a)(e,"borderStyle","solid"),Object(f.a)(e,"boxShadow","0px 0px 10px white"),Object(f.a)(e,"marginBottom",20),e),children:"0.04 ETH + Gas"}),Object(et.jsx)(it,{alt:"BooCrew Hidden",src:tt,style:{paddingTop:0,borderStyle:"solid",borderColor:"white",boxShadow:"0px 0px 30px white",borderWidth:5,borderRadius:0,width:600,height:295}}),Object(et.jsxs)(K,{style:(n={textAlign:"center",fontSize:40,fontWeight:"bold",borderStyle:"solid",borderColor:"black",borderWidth:0,paddingLeft:100,paddingRight:100,borderRadius:0,marginTop:20,marginBottom:20,backgroundColor:"black",padding:20,color:"white"},Object(f.a)(n,"borderRadius",100),Object(f.a)(n,"borderColor","white"),Object(f.a)(n,"borderWidth",5),Object(f.a)(n,"borderStyle","solid"),Object(f.a)(n,"boxShadow","0px 0px 10px white"),n),children:[null==r.account?"????":o.totalSupply,"/10000"]}),Object(et.jsx)(Q,{flex:1,jc:"center",ai:"center",id:"Minter",style:(a={backgroundColor:"black",color:"white",padding:50,borderStyle:"solid",borderColor:"black",borderWidth:0,borderRadius:30,fontSize:40,maxWidth:1500},Object(f.a)(a,"borderRadius",100),Object(f.a)(a,"borderColor","white"),Object(f.a)(a,"borderWidth",5),Object(f.a)(a,"borderStyle","solid"),Object(f.a)(a,"boxShadow","0px 0px 10px white"),a),children:5555==Number(o.totalSupply)?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(K,{style:{textAlign:"center"},children:"The sale has ended."}),Object(et.jsx)(Z,{}),Object(et.jsxs)($,{style:{textAlign:"center"},children:["Dont worry, you're not missing out! You can still get CryptoBugPunks on"," ",Object(et.jsx)("a",{href:"https://testnets.opensea.io/collection/rinkeby-doodlenauts",children:"Opensea.io"})]})]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)($,{style:{textAlign:"center",fontSize:30},children:u}),Object(et.jsx)(G,{}),""===r.account||null===r.smartContract?Object(et.jsxs)(Q,{ai:"center",jc:"center",children:[Object(et.jsx)($,{style:{textAlign:"center",fontSize:30,marginBottom:0,color:"white"},children:"Connect to the CryptoBugPunks Minter!"}),Object(et.jsx)(Z,{}),Object(et.jsx)(nt,{style:{fontFamily:"coder"},onClick:function(t){t.preventDefault(),i(function(){var t=Object(C.a)(T.a.mark((function t(e){var n,a,i,r,o;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){t.next=21;break}return k.a.setProvider(a),i=new M.a(a),t.prev=6,t.next=9,a.request({method:"eth_requestAccounts"});case 9:return r=t.sent,t.next=12,a.request({method:"net_version"});case 12:4==t.sent?(o=new k.a(E,"0x03C94DC266bD8Bd942453c4FabA3BAD228003bd3"),e({type:"CONNECTION_SUCCESS",payload:{account:r[0],smartContract:o,web3:i}}),a.on("accountsChanged",(function(t){e(X(t[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):e(_("Change network to Ethereum.")),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),e(_("Something went wrong."));case 19:t.next=22;break;case 21:e(_("Please install Metamask."));case 22:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(e){return t.apply(this,arguments)}}()),m()},children:"CONNECT"}),""!==r.errorMsg?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(Z,{}),Object(et.jsx)($,{style:{textAlign:"center",fontSize:50},children:r.errorMsg})]}):null]}):Object(et.jsxs)(Q,{ai:"center",jc:"center",fd:"row",style:{marginTop:0,paddingTop:0},children:[Object(et.jsxs)("form",{children:["I want",Object(et.jsx)("div",{style:{backgroundColor:"grey",borderWidth:5,borderColor:"black",borderStyle:"solid",borderRadius:40,textAlign:"center"},children:Object(et.jsx)("input",{id:"inputBox",placeholder:"#",type:"number",min:"1",max:"10",style:{fontSize:40,textAlign:"center",backgroundColor:"grey",maxWidth:200,borderWidth:0,fontFamily:"coder",color:"white"}})}),"CBPs"]}),Object(et.jsx)(Z,{}),Object(et.jsx)(nt,{style:{fontFamily:"coder"},disabled:b?1:0,onClick:function(t){var e;t.preventDefault(),e=1,(e=document.getElementById("inputBox").value)<=0||(l("Minting your Official CryptoBugPunk(s)..."),y(!0),r.smartContract.methods.mint(r.account,e).send({gasLimit:285e3*e,to:"0x03C94DC266bD8Bd942453c4FabA3BAD228003bd3",from:r.account,value:r.web3.utils.toWei((.04*e).toString(),"ether")}).once("error",(function(t){console.log(t),l("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),y(!1)})).then((function(t){l("Your CryptoBugPunk(s) successfully minted!"),y(!1),i(U(r.account))}))),m()},children:b?"BUSY":"MINT"})]})]})}),Object(et.jsx)(Y,{}),Object(et.jsxs)(Q,{flex:1,jc:"center",ai:"center",id:"Roadmap",className:"fullmap",style:{backgroundColor:"black",color:"white",padding:24,paddingTop:24,maxWidth:1500,borderRadius:100,borderColor:"white",borderWidth:5,borderStyle:"solid",boxShadow:"0px 0px 10px white",textAlign:"center"},children:[Object(et.jsx)("text",{className:"rainbow roadmap",children:"Roadmap"}),Object(et.jsx)("br",{}),Object(et.jsx)(G,{}),Object(et.jsx)(G,{}),Object(et.jsxs)("text",{style:{textAlign:"left",paddingLeft:40},children:[Object(et.jsx)("text",{className:"rainbow roadmap",children:"25% "}),Object(et.jsx)("br",{}),Object(et.jsx)(Z,{}),"- 10 NFT Giveaway and 5 x $1000 ETH Giveaway",Object(et.jsx)("br",{}),Object(et.jsx)(G,{}),Object(et.jsx)(Z,{}),Object(et.jsx)("text",{className:"rainbow roadmap",children:"50% "}),Object(et.jsx)("br",{}),Object(et.jsx)(Z,{}),"- 5% to Community Selected Charities and Rarity Ranking",Object(et.jsx)("br",{}),Object(et.jsx)(G,{}),Object(et.jsx)(Z,{}),Object(et.jsx)("text",{className:"rainbow roadmap",children:"75% "}),Object(et.jsx)("br",{}),Object(et.jsx)(Z,{}),"- Buy plot of land in the Metaverse to build a CryptoBugPunk garage where the community can show their art and hang out and 5% to Community Selected Animal Shelters",Object(et.jsx)("br",{}),Object(et.jsx)(G,{}),Object(et.jsx)(Z,{}),Object(et.jsx)("text",{className:"rainbow roadmap",children:"100% "}),Object(et.jsx)("br",{}),Object(et.jsx)(Z,{}),"- 10 x $1000 ETH Giveaway. Continued growth of project, and additional collections released.",Object(et.jsx)("br",{}),Object(et.jsx)(G,{}),Object(et.jsx)(Z,{}),Object(et.jsx)(G,{}),Object(et.jsx)(Z,{}),Object(et.jsx)(G,{}),Object(et.jsx)(Z,{})]}),"Get them bugs started!!!"]})]})}),Object(et.jsx)(Z,{}),Object(et.jsx)(Y,{}),Object(et.jsx)(Y,{}),Object(et.jsx)(Y,{}),Object(et.jsxs)(Q,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(et.jsx)($,{id:"google",style:{textAlign:"center",fontSize:40},children:Object(et.jsx)("a",{href:"https://rinkeby.etherscan.io/address/0x03C94DC266bD8Bd942453c4FabA3BAD228003bd3",style:{textDecoration:"none",color:"black",fontSize:20},children:"CryptoBugPunks Smart Contract"})}),Object(et.jsx)(Z,{})]})]})})},ot=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,519)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),r(t),o(t)}))};n(513),n(514);h.a.render(Object(et.jsx)(w.a,{store:J,children:Object(et.jsx)(rt,{})}),document.getElementById("root")),ot()}},[[515,1,2]]]);
//# sourceMappingURL=main.3f0e9407.chunk.js.map