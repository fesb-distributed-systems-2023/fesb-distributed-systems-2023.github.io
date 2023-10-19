"use strict";(self.webpackChunkdistributed_systems=self.webpackChunkdistributed_systems||[]).push([[255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},s="Lesson",o={unversionedId:"labs/Lab 5 - HTTP Programming/Lesson",id:"labs/Lab 5 - HTTP Programming/Lesson",title:"Lesson",description:"Table of Contents",source:"@site/docs/labs/05.Lab 5 - HTTP Programming/Lesson.md",sourceDirName:"labs/05.Lab 5 - HTTP Programming",slug:"/labs/Lab 5 - HTTP Programming/Lesson",permalink:"/docs/labs/Lab 5 - HTTP Programming/Lesson",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lesson",permalink:"/docs/labs/Lab 4 - Communication Protocols/Lesson"},next:{title:"Lesson",permalink:"/docs/labs/Lab 6 - Web API Design/Lesson"}},i={},p=[{value:"<strong>Table of Contents</strong>",id:"table-of-contents",level:2},{value:"<strong>Objectives</strong>",id:"objectives",level:3},{value:"<strong>Requirements</strong>",id:"requirements",level:3},{value:"<strong>Exercise 1: Manual REST API</strong>",id:"exercise-1-manual-rest-api",level:2},{value:"<strong>HTTP URL</strong>",id:"http-url",level:3},{value:"<strong>HTTP Status Codes</strong>",id:"http-status-codes",level:3},{value:"<strong>HTTP Methods</strong>",id:"http-methods",level:3},{value:"<strong>REST API example</strong>",id:"rest-api-example",level:3},{value:"<strong>Create Solution and Project</strong>",id:"create-solution-and-project",level:3},{value:"<strong>Run the project</strong>",id:"run-the-project",level:3},{value:"<strong>Exercise 2: ASP.NET</strong>",id:"exercise-2-aspnet",level:2},{value:"<strong>ASP .NET</strong>",id:"asp-net",level:3},{value:"<strong>Create Solution and Project</strong>",id:"create-solution-and-project-1",level:3},{value:"<strong>Run the project</strong>",id:"run-the-project-1",level:3},{value:"<strong>Exercise 3: NodeJs with ExpressJs</strong>",id:"exercise-3-nodejs-with-expressjs",level:2},{value:"<strong>Create NodeJs project</strong>",id:"create-nodejs-project",level:3},{value:"<strong>Run the project</strong>",id:"run-the-project-2",level:3}],u={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lesson"},"Lesson"),(0,r.kt)("h1",{id:"lab-5-http-programming"},"Lab 5: HTTP Programming"),(0,r.kt)("h2",{id:"table-of-contents"},(0,r.kt)("strong",{parentName:"h2"},"Table of Contents")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lesson"},"Lesson")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lab-5-http-programming"},"Lab 5: HTTP Programming"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#table-of-contents"},(0,r.kt)("strong",{parentName:"a"},"Table of Contents")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#objectives"},(0,r.kt)("strong",{parentName:"a"},"Objectives"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requirements"},(0,r.kt)("strong",{parentName:"a"},"Requirements"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#exercise-1-manual-rest-api"},(0,r.kt)("strong",{parentName:"a"},"Exercise 1: Manual REST API")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#http-url"},(0,r.kt)("strong",{parentName:"a"},"HTTP URL"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#http-status-codes"},(0,r.kt)("strong",{parentName:"a"},"HTTP Status Codes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#http-methods"},(0,r.kt)("strong",{parentName:"a"},"HTTP Methods"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rest-api-example"},(0,r.kt)("strong",{parentName:"a"},"REST API example"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-solution-and-project"},(0,r.kt)("strong",{parentName:"a"},"Create Solution and Project"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-the-project"},(0,r.kt)("strong",{parentName:"a"},"Run the project"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#exercise-2-aspnet"},(0,r.kt)("strong",{parentName:"a"},"Exercise 2: ASP.NET")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#asp-net"},(0,r.kt)("strong",{parentName:"a"},"ASP .NET"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-solution-and-project-1"},(0,r.kt)("strong",{parentName:"a"},"Create Solution and Project"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-the-project-1"},(0,r.kt)("strong",{parentName:"a"},"Run the project"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#exercise-3-nodejs-with-expressjs"},(0,r.kt)("strong",{parentName:"a"},"Exercise 3: NodeJs with ExpressJs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-nodejs-project"},(0,r.kt)("strong",{parentName:"a"},"Create NodeJs project"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-the-project-2"},(0,r.kt)("strong",{parentName:"a"},"Run the project")))))))),(0,r.kt)("h3",{id:"objectives"},(0,r.kt)("strong",{parentName:"h3"},"Objectives")),(0,r.kt)("p",null,"In this LAB you will learn about HTTP programming."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP")," is application layer protocol which defines how data is exchanged between server and client."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP message:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Request-line"),(0,r.kt)("li",{parentName:"ul"},"Zero or more header (General|Request|Entity) fields followed by CRLF"),(0,r.kt)("li",{parentName:"ul"},"An empty line (i.e., a line with nothing preceding the CRLF) indicating the end of the header fields"),(0,r.kt)("li",{parentName:"ul"},"Optionally a message-body")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP")," has two messages:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP Request message:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"GET /doc/test.html HTTP/1.1\nHost: www.test101.com\nConnection: keep-alive\nContent-Type: text/html\nContent-Length: 345\n\nThis is message body line 1\nThis is message body line 2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Sun, 10 Oct 2010 23:26:07 GMT\nServer: Apache/2.2.8 (Ubuntu) mod_ssl/2.2.8 OpenSSL/0.9.8g\nLast-Modified: Sun, 26 Sep 2010 22:04:35 GMT\nETag: "45b6-834-49130cc1182c0"\nAccept-Ranges: bytes\nContent-Length: 12\nConnection: close\nContent-Type: text/html\n\nHello world!\n')),(0,r.kt)("h3",{id:"requirements"},(0,r.kt)("strong",{parentName:"h3"},"Requirements")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download"},".NET 7 SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postman.com/downloads/"},"Postman application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NodeJs"))),(0,r.kt)("h2",{id:"exercise-1-manual-rest-api"},(0,r.kt)("strong",{parentName:"h2"},"Exercise 1: Manual REST API")),(0,r.kt)("p",null,"Representational state transfer (",(0,r.kt)("strong",{parentName:"p"},"REST"),") is a software architectural style that describes a\nuniform interface between physically separate components,\noften across the Internet in a client-server architecture."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"REST")," architectural constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uniform interface"),(0,r.kt)("li",{parentName:"ul"},"Client\u2013server"),(0,r.kt)("li",{parentName:"ul"},"Stateless"),(0,r.kt)("li",{parentName:"ul"},"Cacheable"),(0,r.kt)("li",{parentName:"ul"},"Layered system")),(0,r.kt)("h3",{id:"http-url"},(0,r.kt)("strong",{parentName:"h3"},"HTTP URL")),(0,r.kt)("p",null,"With Hypertext and ",(0,r.kt)("strong",{parentName:"p"},"HTTP"),", ",(0,r.kt)("strong",{parentName:"p"},"URL")," is one of the key concepts of the Web.\nIt is the mechanism used by browsers to retrieve any published resource on the web."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL")," stands for Uniform Resource Locator.\nA ",(0,r.kt)("strong",{parentName:"p"},"URL")," is nothing more than the address of a given unique resource on the Web.\nIn theory, each valid URL points to a unique resource.\nSuch resources can be an HTML page, a CSS document, an image, etc.\nIn practice, there are some exceptions,\nthe most common being a ",(0,r.kt)("strong",{parentName:"p"},"URL")," pointing to a resource that no longer exists or that has moved.\nAs the resource represented by the ",(0,r.kt)("strong",{parentName:"p"},"URL")," and the ",(0,r.kt)("strong",{parentName:"p"},"URL")," itself are handled by the Web server,\nit is up to the owner of the web server to carefully manage that resource and its associated ",(0,r.kt)("strong",{parentName:"p"},"URL"),"."),(0,r.kt)("p",null,"Anatomy of ",(0,r.kt)("strong",{parentName:"p"},"URL"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"http-url",src:n(2434).Z,width:"501",height:"221"})),(0,r.kt)("h3",{id:"http-status-codes"},(0,r.kt)("strong",{parentName:"h3"},"HTTP Status Codes")),(0,r.kt)("p",null,"HTTP Status codes give additional information about state of operation,\nwhether it was completed successfully."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1xx informational response \u2013 the request was received, continuing process"),(0,r.kt)("li",{parentName:"ul"},"2xx successful \u2013 the request was successfully received, understood, and accepted"),(0,r.kt)("li",{parentName:"ul"},"3xx redirection \u2013 further action needs to be taken in order to complete the request"),(0,r.kt)("li",{parentName:"ul"},"4xx client error \u2013 the request contains bad syntax or cannot be fulfilled"),(0,r.kt)("li",{parentName:"ul"},"5xx server error \u2013 the server failed to fulfil an apparently valid request")),(0,r.kt)("p",null,"Common status codes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"Success")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"201"),(0,r.kt)("td",{parentName:"tr",align:null},"Created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"301"),(0,r.kt)("td",{parentName:"tr",align:null},"Permanent Redirect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"302"),(0,r.kt)("td",{parentName:"tr",align:null},"Temporary Redirect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Bad Request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal Server Error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"501"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Implemented")))),(0,r.kt)("h3",{id:"http-methods"},(0,r.kt)("strong",{parentName:"h3"},"HTTP Methods")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Response Status Codes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CREATE"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"201, 400, 404, 409")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"READ"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"200, 404")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE"),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"200, 204, 400, 404")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE"),(0,r.kt)("td",{parentName:"tr",align:null},"PATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"200, 204, 400, 404")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"200, 404")))),(0,r.kt)("p",null,"Usually HTTP request is unique by criteria"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URL or path"),(0,r.kt)("li",{parentName:"ul"},"Method")),(0,r.kt)("h3",{id:"rest-api-example"},(0,r.kt)("strong",{parentName:"h3"},"REST API example")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"METHOD"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://mystudentsapp.com/students"},"http://mystudentsapp.com/students")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Get All students")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://mystudentsapp.com/students?name=Mate"},"http://mystudentsapp.com/students?name=Mate")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Get All students with name Mate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://mystudentsapp.com/students/1"},"http://mystudentsapp.com/students/1")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Get student with id 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://mystudentsapp.com/students/"},"http://mystudentsapp.com/students/")),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"Create student")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://mystudentsapp.com/students/1"},"http://mystudentsapp.com/students/1")),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"Update student with id 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://mystudentsapp.com/students/1"},"http://mystudentsapp.com/students/1")),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete student with id 1")))),(0,r.kt)("h3",{id:"create-solution-and-project"},(0,r.kt)("strong",{parentName:"h3"},"Create Solution and Project")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new solution ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProgramming"),",new console project ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProgramming.ManualRestApi")," and new class library project ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProgramming.Model"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new sln --name HttpProgramming\ndotnet new console --name HttpProgramming.ManualRestApi\ndotnet sln add HttpProgramming.ManualRestApi/HttpProgramming.ManualRestApi.csproj\ndotnet new classlib --name HttpProgramming.Model\ndotnet sln add HttpProgramming.Model/HttpProgramming.Model.csproj\ndotnet add HttpProgramming.ManualRestApi/HttpProgramming.ManualRestApi.csproj reference HttpProgramming.Model/HttpProgramming.Model.csproj\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In project ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProgramming.Model")," add class and file ",(0,r.kt)("inlineCode",{parentName:"li"},"Subject"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace HttpProgramming.Model;\n\npublic class Subject\n{\n    public Subject(int id, string name, int ect)\n    {\n        Id = id;\n        Name = name;\n        Ect = ect;\n    }\n\n    public int Id { get; }\n\n    public string Name { get; }\n\n    public int Ect { get; }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In project ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProgramming.Model")," add class and file ",(0,r.kt)("inlineCode",{parentName:"li"},"Student"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace HttpProgramming.Model;\n\npublic class Student\n{\n    public Student(\n        int id,\n        string name,\n        DateOnly dob,\n        IEnumerable<double> grades,\n        IEnumerable<Subject> subjects)\n    {\n        Id = id;\n        Name = name;\n        Dob = dob;\n        Grades = grades;\n        Subjects = subjects;\n    }\n\n    public int Id { get; }\n\n    public string Name { get; }\n\n    public DateOnly Dob { get; }\n\n    public IEnumerable<double> Grades { get; }\n\n    public IEnumerable<Subject> Subjects { get; }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In project ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProgramming.Model")," add class and file ",(0,r.kt)("inlineCode",{parentName:"li"},"StudentsRepository"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace HttpProgramming.Model;\n\npublic class StudentsRepository\n{\n\n    private readonly IEnumerable<Subject> _subjects = new[]\n    {\n        new Subject(1, "PIZ", 10),\n        new Subject(2, "DIS", 12),\n    };\n\n    private readonly ICollection<Student> _students;\n\n    public StudentsRepository(int numberOfStudents)\n    {\n        _students = Enumerable\n            .Range(0, numberOfStudents)\n            .Select(index => new Student(\n                id: index,\n                name: $"Student{index}",\n                dob: new DateOnly(1999, 1, 1),\n                grades: new[] { 2d, 3d, 4d, 4d },\n                subjects: _subjects))\n            .ToList();\n    }\n\n    public IEnumerable<Student> GetAllStudents()\n    {\n        return _students;\n    }\n\n    public Student? GetStudent(int id)\n    {\n        return _students.FirstOrDefault(student => student.Id == id);\n    }\n\n    public void CreateStudent(string name)\n    {\n        var id = _students.Max(s => s.Id) + 1;\n\n        var student = new Student(\n            id: id,\n            name: name,\n            dob: new DateOnly(1999, 1, 1),\n            grades: new[] { 2d, 5d, 3d, 4d },\n            subjects: _subjects);\n\n        _students.Add(student);\n    }\n\n    public void UpdateStudent(int id, string newName)\n    {\n        var studentToUpdate = _students.FirstOrDefault(student => student.Id == id);\n\n        if (studentToUpdate is null)\n        {\n            throw new Exception("Student was not found");\n        }\n\n        var updatedStudent = new Student(\n            id: studentToUpdate.Id,\n            name: newName,\n            dob: studentToUpdate.Dob,\n            grades: studentToUpdate.Grades,\n            subjects: studentToUpdate.Subjects);\n\n        _ = _students.Remove(studentToUpdate);\n\n        _students.Add(updatedStudent);\n    }\n\n    public void DeleteStudent(int id)\n    {\n        var studentToDelete = _students.FirstOrDefault(student => student.Id == id);\n\n        if (studentToDelete is null)\n        {\n            throw new Exception("Student was not found");\n        }\n\n        _ = _students.Remove(studentToDelete);\n    }\n}\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In project ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProgramming.ManualRestApi")," create new file and class names ",(0,r.kt)("inlineCode",{parentName:"li"},"ManualRestServer"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.IO;\nusing System.Net;\nusing System.Text.Json;\nusing System.Threading.Tasks;\nusing HttpProgramming.Model;\n\nnamespace HttpProgramming.ManualRestApi;\n\npublic partial class ManualRestServer\n{\n    private readonly int _portNumber;\n    private readonly StudentsRepository _studentsRepository;\n\n    public ManualRestServer(int portNumber, StudentsRepository studentsRepository)\n    {\n        _portNumber = portNumber;\n        _studentsRepository = studentsRepository;\n    }\n\n    public async Task Listen()\n    {\n        var listener = new HttpListener();\n        listener.Prefixes.Add($"http://localhost:{_portNumber}/");\n\n        listener.Start();\n\n        Console.WriteLine("Server is listening...");\n        try\n        {\n            while (true)\n            {\n                var context = await listener.GetContextAsync();\n\n                Console.WriteLine("Server got request...");\n\n                await HandleRequest(context);\n            }\n        }\n        catch\n        {\n            listener.Stop();\n        }\n    }\n\n    private async Task HandleRequest(HttpListenerContext httpListenerContext)\n    {\n        var request = httpListenerContext.Request;\n        var response = httpListenerContext.Response;\n\n        var requestMethod = request.HttpMethod;\n        var requestUrl = request.Url?.AbsolutePath ?? string.Empty;\n        var requestBody = await GetRequestBody(request);\n\n        var (responseString, responseStatusCode) = GetAppropriateResponseForRequest(\n            requestUrl: requestUrl,\n            requestMethod: requestMethod,\n            requestBody: requestBody);\n\n        var buffer = System.Text.Encoding.UTF8.GetBytes(responseString);\n\n        response.ContentLength64 = buffer.Length;\n        response.StatusCode = (int)responseStatusCode;\n\n        var output = response.OutputStream;\n        await output.WriteAsync(buffer);\n\n        output.Close();\n    }\n\n    private (string responseData, HttpStatusCode) GetAppropriateResponseForRequest(\n        string requestUrl,\n        string requestMethod,\n        string requestBody)\n    {\n        // TODO: Implement\n    }\n\n    private static async Task<string> GetRequestBody(HttpListenerRequest request)\n    {\n        if (!request.HasEntityBody)\n            return string.Empty;\n\n        var body = request.InputStream;\n        var encoding = request.ContentEncoding;\n        var reader = new StreamReader(body, encoding);\n\n        var requestBodyString = await reader.ReadToEndAsync();\n\n        return requestBodyString;\n    }\n\n    private static int? GetStudentIdFromInputUrl(string requestUrl)\n    {\n        var splittedString = requestUrl.Split("/");\n        return splittedString.Length != 3 ? null : int.TryParse(splittedString[2], out var studentId) ? studentId : null;\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In class ",(0,r.kt)("inlineCode",{parentName:"li"},"ManualRestServer")," implement method ",(0,r.kt)("inlineCode",{parentName:"li"},"GetAppropriateResponseForRequest"),":")),(0,r.kt)("p",null,"Method ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAppropriateResponseForRequest")," should handle following requests"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"METHOD"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8000/students"},"http://localhost:8000/students")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Get All students")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8000/students/1"},"http://localhost:8000/students/1")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"Get student with id 1, if not found return not found status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8000/students"},"http://localhost:8000/students")),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"Create student, if body is empty return bad request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8000/students/1"},"http://localhost:8000/students/1")),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"Update student with id 1, handle if not found and empty body")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8000/students/1"},"http://localhost:8000/students/1")),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete student with id 1, handle not found")))),(0,r.kt)("p",null,"Following is proposed implementation for ",(0,r.kt)("strong",{parentName:"p"},"GET")," requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'        try\n        {\n            switch (requestMethod)\n            {\n                case "GET":\n                    if (requestUrl == "/students")\n                    {\n                        var students = _studentsRepository.GetAllStudents();\n\n                        var responseData = JsonSerializer.Serialize(students);\n\n                        return (responseData, HttpStatusCode.OK);\n                    }\n\n                    if(!requestUrl.StartsWith("/students/"))\n                    {\n                        return ("Not Found", HttpStatusCode.NotFound);\n                    }\n\n                    var getStudentId = GetStudentIdFromInputUrl(requestUrl);\n                    if (!getStudentId.HasValue)\n                    {\n                        return ("Not Implemented", HttpStatusCode.NotImplemented);\n                    }\n\n                    var student = _studentsRepository.GetStudent(getStudentId.Value);\n\n                    if (student is null)\n                    {\n                        return ("Not Found", HttpStatusCode.NotFound);\n                    }\n\n                    var studentString = JsonSerializer.Serialize(student);\n\n                    return (studentString, HttpStatusCode.OK);\n                \n                default:\n                    return ("Not Implemented", HttpStatusCode.NotImplemented);\n            }\n        }\n        catch (Exception e)\n        {\n            return (e.Message, HttpStatusCode.InternalServerError);\n        }\n')),(0,r.kt)("h3",{id:"run-the-project"},(0,r.kt)("strong",{parentName:"h3"},"Run the project")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the project:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run --project HttpProgramming.ManualRestApi/HttpProgramming.ManualRestApi.csproj\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test the project using Postman application to send requests")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"postman",src:n(5592).Z,width:"1903",height:"1002"})),(0,r.kt)("h2",{id:"exercise-2-aspnet"},(0,r.kt)("strong",{parentName:"h2"},"Exercise 2: ASP.NET")),(0,r.kt)("p",null,"As you can see from previous exercise creating engine to parse urls and methods is not easy even for simple cases.\nAnd since all of that can be made generic, microsoft has made web server framework to handle all of hard work for us."),(0,r.kt)("h3",{id:"asp-net"},(0,r.kt)("strong",{parentName:"h3"},"ASP .NET")),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"ASP.NET")," applications it is common practice to utilize Inversion of Control (IoC) Container.\nIoC container or in some references Dependency Injection (DI) is a pattern used commonly through many business applications\nto inject necessary dependencies (usually services) into classes requiring these dependencies."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ASP.NET")," framework provides developer with build in DI container in which developer can define custom services with one of three lifetime scopes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Singleton:")," lifetime of service is through lifetime of application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scoped:")," lifetime of service is scope of one request, so for each request new service will be created"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transient:")," each time service is requested, new instance is created")),(0,r.kt)("h3",{id:"create-solution-and-project-1"},(0,r.kt)("strong",{parentName:"h3"},"Create Solution and Project")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new webapi project ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProgramming.WebApi"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new webapi --name HttpProgramming.WebApi\ndotnet sln add HttpProgramming.WebApi/HttpProgramming.WebApi.csproj\ndotnet add HttpProgramming.WebApi/HttpProgramming.WebApi.csproj reference HttpProgramming.Model/HttpProgramming.Model.csproj\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In project ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpProgramming.WebApi")," delete files ",(0,r.kt)("inlineCode",{parentName:"p"},"WeatherForecastController")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WeatherForecast"),":")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify file ",(0,r.kt)("inlineCode",{parentName:"p"},"Program")," to look as following:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using HttpProgramming.Model;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddControllers();\nbuilder.Services.AddEndpointsApiExplorer();\nbuilder.Services.AddSwaggerGen();\n\n// Register StudentsRepository as singleton in DI container\nbuilder.Services.AddSingleton(_ => new StudentsRepository(1000));\n\nvar app = builder.Build();\n\nif (app.Environment.IsDevelopment())\n{\n    _ = app.UseSwagger();\n    _ = app.UseSwaggerUI();\n}\n\napp.MapControllers();\n\napp.Run();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In project ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpProgramming.WebApi")," in folder ",(0,r.kt)("inlineCode",{parentName:"li"},"Controllers")," add new file and class ",(0,r.kt)("inlineCode",{parentName:"li"},"StudentsController"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using HttpProgramming.Model;\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace HttpProgramming.WebApi.Controllers;\n\n[ApiController]\npublic class StudentsController : ControllerBase\n{\n    private readonly StudentsRepository _studentsRepository;\n\n    public StudentsController(StudentsRepository studentsRepository)\n    {\n        _studentsRepository = studentsRepository;\n    }\n\n    [HttpGet]\n    [Route("/students")]\n    public async Task<IActionResult> GetStudents()\n    {\n        return Ok(_studentsRepository.GetAllStudents());\n    }\n\n    [HttpGet]\n    [Route("/students/{studentId}")]\n    public IActionResult GetStudent(\n        [FromRoute] int studentId)\n    {\n        var student = _studentsRepository.GetStudent(studentId);\n\n        return student is null ? NotFound() : Ok(student);\n    }    \n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In class ",(0,r.kt)("inlineCode",{parentName:"li"},"StudentsController")," implement method ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateStudent")," which will create student"),(0,r.kt)("li",{parentName:"ul"},"In class ",(0,r.kt)("inlineCode",{parentName:"li"},"StudentsController")," implement method ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateStudent")," which will update student with specified id"),(0,r.kt)("li",{parentName:"ul"},"In class ",(0,r.kt)("inlineCode",{parentName:"li"},"StudentsController")," implement method ",(0,r.kt)("inlineCode",{parentName:"li"},"DeleteStudent")," which will delete student with specified id")),(0,r.kt)("h3",{id:"run-the-project-1"},(0,r.kt)("strong",{parentName:"h3"},"Run the project")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the project:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run --project HttpProgramming.WebApi/HttpProgramming.WebApi.csproj\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test the project using Postman application to send requests")),(0,r.kt)("h2",{id:"exercise-3-nodejs-with-expressjs"},(0,r.kt)("strong",{parentName:"h2"},"Exercise 3: NodeJs with ExpressJs")),(0,r.kt)("p",null,"In this exercise you will create web api using ",(0,r.kt)("strong",{parentName:"p"},"javascript")," language.\n",(0,r.kt)("strong",{parentName:"p"},"NodeJs")," is used as runtime and ",(0,r.kt)("strong",{parentName:"p"},"ExpressJs")," is ",(0,r.kt)("strong",{parentName:"p"},"REST/HTTP")," framework."),(0,r.kt)("h3",{id:"create-nodejs-project"},(0,r.kt)("strong",{parentName:"h3"},"Create NodeJs project")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create folder and initialize nodejs project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir nodeapi\ncd nodeapi\nnpm init -y\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ExpressJs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new file named ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeapi")," folder and add following contents to it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'express = require("express");\nconst app = express();\nconst port = 8000;\n\nconst students = Array(100)\n  .fill(0)\n  .map((_, index) => ({\n    id: index,\n    name: `Student${index}`,\n    dob: Date.now(),\n    grades: [2.3, 4, 5, 4.4],\n    subjects: [\n      {\n        name: "PIZ",\n        ects: 11,\n      },\n      {\n        name: "DIS",\n        ects: 10,\n      },\n    ],\n  }));\n\napp.get("/students", (req, res) => {\n  res.send(students);\n});\n\napp.get("/students/:studentId", (req, res) => {\n  const student = students.find(\n    (student) => student.id == req.params.studentId\n  );\n\n  console.log(req.params.studentId);\n  if (!student) {\n    res.sendStatus(404);\n    return;\n  }\n\n  res.send(student);\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`);\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," implement listener callback which will create student"),(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," implement listener callback which will update student with specified id"),(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," implement listener callback which will delete student with specified id")),(0,r.kt)("h3",{id:"run-the-project-2"},(0,r.kt)("strong",{parentName:"h3"},"Run the project")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the project:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test the project using Postman application to send requests")))}d.isMDXComponent=!0},2434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/http-url-75c82e250011f8baab0150b419d249e5.svg"},5592:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/postman-9c3390514e99a54f11ff92081262a621.jpg"}}]);