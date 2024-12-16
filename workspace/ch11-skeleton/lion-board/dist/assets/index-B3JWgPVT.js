import{j as e,L as r,u as l,O as n}from"./index-B8grBGTx.js";import{u as d}from"./userStore-BYH4lJr9.js";function i(){return e.jsx("footer",{className:"p-4 pb-12 w-full border-t border-t-slate-200  dark:border-t-slate-500 dark:bg-gray-600 text-gray-600 dark:text-white transition-color duration-500 ease-in-out",children:e.jsxs("div",{className:"min-w-[320px] flex flex-wrap gap-4 justify-center items-center text-sm text-slate-400",children:[e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"약관"}),e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"게시판 정책"}),e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"회사소개"}),e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"광고"}),e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"마이비즈니스"}),e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"제휴 제안"}),e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"이용약관"}),e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"개인정보취급방침"}),e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"청소년보호 정책"}),e.jsx(r,{to:"#",className:"hover:font-semibold dark:hover:text-gray-200",children:"고객센터"})]})})}function m(){const{isDarkMode:t,toggleTheme:s}=l(),a=t?"":"hidden",o=t?"hidden":"";return e.jsxs("button",{type:"button","data-toggle-dark":"dark",onClick:s,className:"ml-4 flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:[e.jsx("svg",{"data-toggle-icon":"moon",className:`w-3.5 h-3.5 ${o}`,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 20",children:e.jsx("path",{d:"M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"})}),e.jsx("svg",{"data-toggle-icon":"sun",className:`w-3.5 h-3.5 ${a}`,"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"})}),e.jsx("span",{className:"sr-only",children:"Toggle dark/light mode"})]})}function c(){const{user:t,resetUser:s}=d(),a=o=>{o.preventDefault(),s()};return e.jsx("header",{className:"px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out",children:e.jsxs("nav",{className:"flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between",children:[e.jsx("div",{className:"w-1/2 order-1 md:w-auto",children:e.jsxs(r,{to:"/",className:"flex items-center gap-2",children:[e.jsx("img",{className:"mr-3 h-6 sm:h-9",src:"/images/favicon.svg",width:"40",height:"40",alt:"로고 이미지"}),e.jsx("span",{className:"text-lg font-bold",children:"멋사컴"})]})}),e.jsx("div",{className:"w-auto order-2 text-base mt-4 md:mt-0",children:e.jsxs("ul",{className:"flex items-center gap-6 uppercase",children:[e.jsx("li",{className:"hover:text-amber-500 hover:font-semibold",children:e.jsx(r,{to:"/info",children:"정보공유"})}),e.jsx("li",{className:"hover:text-amber-500 hover:font-semibold",children:e.jsx(r,{to:"/free",children:"자유게시판"})}),e.jsx("li",{className:"hover:text-amber-500 a:font-semibold",children:e.jsx(r,{to:"/brunch",children:"브런치스토리"})})]})}),e.jsxs("div",{className:"w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto",children:[t?e.jsx("form",{onSubmit:a,children:e.jsxs("p",{className:"flex items-center",children:[t.profile&&e.jsx("img",{className:"w-8 rounded-full mr-2",src:`https://11.fesp.shop${t.profile}`,width:"40",height:"40",alt:"프로필 이미지"}),t.name,"님 :)",e.jsx("button",{type:"submit",className:"bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded",children:"로그아웃"})]})}):e.jsxs("div",{className:"flex justify-end",children:[e.jsx(r,{to:"/users/login",className:"bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded",children:"로그인"}),e.jsx(r,{to:"/users/signup",className:"bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded",children:"회원가입"})]}),e.jsx(m,{})]})]})})}function g(){return e.jsxs("div",{className:"flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out",children:[e.jsx(c,{}),e.jsx(n,{}),e.jsx(i,{})]})}export{g as default};
