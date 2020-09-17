(this.webpackJsonpdna=this.webpackJsonpdna||[]).push([[0],{48:function(e,t,n){e.exports=n.p+"static/media/finals.c099e776.png"},51:function(e,t,n){e.exports=n(71)},56:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),o=n.n(l),i=(n(56),n(28)),c=n(29),m=n(33),s=n(31),u=n(18),p=n(6),d=n(12),h=n(13),g=n(8),f=n(23),E=n.n(f),A=n(20),C=n(16);function b(){var e=Object(d.a)(["\n  .input {\n    background-image: linear-gradient(to right, #073C16, #0A5C22);\n    color: #ffffff;\n    padding-top: 100px;\n    padding-bottom: 100px;\n  }\n\n  .form-group {\n    flex-grow:1\n  }\n\n  .form-control {\n    margin-right: 10px;\n    border-radius: 10px;\n    flex-grow:1\n  }\n\n  .customButton {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    background: #eb6434;\n    font-family: Open Sans;\n    color: #FFFFFF;\n    border: 1px solid #eb6434;\n    border-radius: 10px;\n  }\n\n  .result {\n    padding-top: 50px;\n    padding-bottom: 20px;\n    background-color: #EEEEEE\n  }\n"]);return b=function(){return e},e}var v=h.a.div(b()),G=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.value.replace(/[^AaTtCcGg]/g,"").toUpperCase(),n=a.getComplement(t),r=a.getmRNAfromDNA(t),l=a.getProteinDetails(r),o=l[0],i=l[1];a.setState({input:t,complement:n,mRNA:r,protein:o,proteinWeight:i})},a.handleReverse=function(){var e=a.state.input.split("").reverse().join(""),t=a.state.complement.split("").reverse().join(""),n=a.state.mRNA.split("").reverse().join(""),r=a.getProteinDetails(n)[0];a.setState({input:e,mRNA:n,complement:t,protein:r})},a.state={aminoAcidTable:{UUU:["F","Phe",147.06841],CUU:["L","Leu",113.08406],AUU:["I","Ile",113.08406],GUU:["V","Val",99.06841],UUC:["F","Phe",147.06841],CUC:["L","Leu",113.08406],AUC:["I","Ile",113.08406],GUC:["V","Val",99.06841],UUA:["L","Leu",113.08406],CUA:["L","Leu",113.08406],AUA:["I","Ile",113.08406],GUA:["V","Val",99.06841],UUG:["L","Leu",113.08406],CUG:["L","Leu",113.08406],AUG:["M","Met",131.04049],GUG:["V","Val",99.06841],UCU:["S","Ser",87.03203],CCU:["P","Pro",97.05276],ACU:["T","Thr",101.04768],GCU:["A","Ala",71.03711],UCC:["S","Ser",87.03203],CCC:["P","Pro",97.05276],ACC:["T","Thr",101.04768],GCC:["A","Ala",71.03711],UCA:["S","Ser",87.03203],CCA:["P","Pro",97.05276],ACA:["T","Thr",101.04768],GCA:["A","Ala",71.03711],UCG:["S","Ser",87.03203],CCG:["P","Pro",97.05276],ACG:["T","Thr",101.04768],GCG:["A","Ala",71.03711],UAU:["Y","Tyr",163.06333],CAU:["H","His",137.05891],AAU:["N","Asn",114.04293],GAU:["D","Asp",115.02694],UAC:["Y","Tyr",163.06333],CAC:["H","His",137.05891],AAC:["N","Asn",114.04293],GAC:["D","Asp",115.02694],CAA:["Q","Gln",128.05858],GGG:["G","Gly",57.02146],AAA:["K","Lys",128.09496],GAA:["E","Glu",129.04259],AGG:["R","Arg",156.10111],CAG:["Q","Gln",128.05858],AAG:["K","Lys",128.09496],GAG:["E","Glu",129.04259],UGU:["C","Cys",103.00919],CGU:["R","Arg",156.10111],AGU:["S","Ser",87.03203],GGU:["G","Gly",57.02146],UGC:["C","Cys",103.00919],CGC:["R","Arg",156.10111],AGC:["S","Ser",87.03203],GGC:["G","Gly",57.02146],CGG:["R","Arg",156.10111],CGA:["R","Arg",156.10111],AGA:["R","Arg",156.10111],GGA:["G","Gly",57.02146],UGG:["W","Trp",186.07931],UAA:["STOP","STOP",0],UGA:["STOP","STOP",0],UAG:["STOP","STOP",0]},input:"",complement:"",reverseComplement:"",mRNA:"",protein:"",proteinWeight:0},a}return Object(c.a)(n,[{key:"getmRNAfromDNA",value:function(e){for(var t=e.toUpperCase(),n="",a=0;a<t.length;a++)"A"===t[a]?n+="U":"T"===t[a]?n+="A":"C"===t[a]?n+="G":"G"===t[a]&&(n+="C");return n}},{key:"getComplement",value:function(e){for(var t=e.toUpperCase(),n="",a=0;a<t.length;a++)"A"===t[a]?n+="T":"T"===t[a]?n+="A":"C"===t[a]?n+="G":"G"===t[a]&&(n+="C");return n}},{key:"getProteinDetails",value:function(e){for(var t=e.length-e.length%3,n="",a=0,r=0;r<t;r+=3){var l=e.substring(r,r+3);n+=this.state.aminoAcidTable[l][1]+"-",a+=this.state.aminoAcidTable[l][2]}return[n="-"===(n+=e.substring(t,e.length))[n.length-1]?n.substring(0,n.length-1):n,a]}},{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement("div",{className:"input"},r.a.createElement(C.a,null,r.a.createElement("h1",{style:{fontFamily:"Montserrat"}},"Enter your DNA strand"),r.a.createElement(g.a,{inline:!0},r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Control,{style:{fontFamily:"Source Code Pro"},value:this.state.input,onChange:this.handleChange}),r.a.createElement(A.a,{className:"customButton",onClick:this.handleReverse,variant:"light"},"Reverse"))))),r.a.createElement("div",{className:"result"},r.a.createElement(C.a,null,r.a.createElement("h3",null,"Complement"),r.a.createElement(g.a,{inline:!0},r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Control,{style:{fontFamily:"Source Code Pro"},value:this.state.complement}),r.a.createElement(E.a,{text:this.state.complement},r.a.createElement(A.a,{className:"customButton",variant:"light"},"Copy")))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"mRNA"),r.a.createElement(g.a,{inline:!0},r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Control,{style:{fontFamily:"Source Code Pro"},value:this.state.mRNA}),r.a.createElement(E.a,{text:this.state.mRNA},r.a.createElement(A.a,{className:"customButton",variant:"light"},"Copy")))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Protein"),r.a.createElement(g.a,{inline:!0},r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Control,{style:{fontFamily:"Source Code Pro"},value:this.state.protein}),r.a.createElement(E.a,{text:this.state.protein},r.a.createElement(A.a,{className:"customButton",variant:"light"},"Copy")))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Protein Weight"),r.a.createElement(g.a,{inline:!0},r.a.createElement(g.a.Group,null,r.a.createElement(g.a.Control,{style:{fontFamily:"Source Code Pro"},value:this.state.proteinWeight}),r.a.createElement(E.a,{text:this.state.proteinWeight.toFixed(5)},r.a.createElement(A.a,{className:"customButton",variant:"light"},"Copy")))),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),n}(a.Component),y=n(48),U=n.n(y);function x(){var e=Object(d.a)(["\n  .about {\n    margin: 50px;\n  }\n  \n  .body p {\n    font-size: 16px;\n    font-family: Roboto;\n    text-align: justify;\n  }\n\n  .header {\n    font-family: Montserrat;\n  }\n"]);return x=function(){return e},e}var S=h.a.div(x()),k=function(){return r.a.createElement(S,null,r.a.createElement("div",{className:"about"},r.a.createElement(C.a,{className:"body"},r.a.createElement("h2",{className:"header"}," Origins"),r.a.createElement("p",null,"In the second semester of my freshman year at NUS, I took ",r.a.createElement("a",{href:"https://nusmods.com/modules/LSM1102/molecular-genetics"},"LSM1102 Molecular Genetics"),". Unfortunately, this was also during the time COVID-19 struck which resulted in all of our exams being held online. LSM1102's finals in particular became an open-book and open-internet exam instead of the originally planned MCQ exam :-("),r.a.createElement("p",null,'The day before our finals, one of the professors uploaded a revision video covering some "important" concepts, which I took as a hint as to what was going to be on tested on the finals. One of the concept he covered was about ',r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Open_reading_frame"},"open reading frames")," which would be tedious to do manually (like in an exam) but a lot easier for a computer to handle."),r.a.createElement("p",null,"Thus as a ",r.a.createElement("a",{href:"https://www.comp.nus.edu.sg/"},"computing student"),", I decided to spend a couple hours that night creating a command-line program to automate the process of trying the different possible reading frames. Thankfully it worked out because the next day, this question came out ;-)"),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("img",{src:U.a,width:"60%",height:"60%"})),r.a.createElement("br",null),r.a.createElement("p",null,"Afterwards I decided to trasnform my command-line program into a website since transcribing/translating DNA is pretty handy, and it would also a good opportunity to learn React."))))};function w(){var e=Object(d.a)(["\n  .header {\n    font-family: Montserrat;\n    margin: 50px;\n  }\n"]);return w=function(){return e},e}var N=h.a.div(w()),T=function(){return r.a.createElement(N,null,r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement("h2",{className:"header"}," Oops! You entered an invalid url :-( "))))},P=n(25),O=n(24),L=n(19),R=n(49),j=n(50);function F(){var e=Object(d.a)(["\n  .navbar {\n    background-image: linear-gradient(to right, #073C16, #0A5C22);\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .navbar-brand, .navbar-nav .nav-link {\n    color: #ffffff;\n    font-size: 20px;\n    padding-left: 10px;\n    font-family: Montserrat;\n  }\n\n  .fa-github{\n    &:hover{\n      color:black !important;\n    }\n }\n"]);return F=function(){return e},e}var I=h.a.div(F()),M=function(){return r.a.createElement(I,null,r.a.createElement(O.a,{expand:"lg"},r.a.createElement(O.a.Brand,{as:u.b,to:"/dna-converter"}),r.a.createElement(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(O.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(P.a,{className:"ml-auto"},r.a.createElement(L.a,null,r.a.createElement(P.a.Link,{as:u.b,to:"/dna-converter"},"Home")),r.a.createElement(L.a,null,r.a.createElement(P.a.Link,{as:u.b,to:"/dna-converter/about"},"About")),r.a.createElement(L.a,null,r.a.createElement(P.a.Link,{href:"https://github.com/aizatazhar/dna-converter"},r.a.createElement(R.a,{icon:j.a,style:{color:"white"}})))))))},D=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.title="DNA Converter"}},{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/dna-converter",component:G}),r.a.createElement(p.a,{exact:!0,path:"/dna-converter/about",component:k}),r.a.createElement(p.a,{component:T}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(67),n(68),n(69),n(70);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.6a7d81ad.chunk.js.map