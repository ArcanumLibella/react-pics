(this["webpackJsonpreact-pics"]=this["webpackJsonpreact-pics"]||[]).push([[0],{24:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(17),c=a.n(s),i=(a(24),a(8)),o=a.n(i),l=a(18),u=a(3),m=a(4),h=a(6),b=a(5),p=a(19),j=a.n(p).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID FCrxCm6cMo4aLLjbtCG9mbB6Gu4j0AdO3bnBr-Tf3EE"}}),d=a(0);function f(){return Object(d.jsx)("header",{className:"p-4 bg-yellow-500",children:Object(d.jsx)("span",{className:"font-black",children:"The Pix Finder"})})}var O=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/12+1);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.urls,a=e.description;return Object(d.jsx)("div",{className:"image p-4",style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(d.jsx)("img",{ref:this.imageRef,src:t.regular,alt:a,className:"pb-4"})})}}]),a}(n.Component),g=(a(45),function(e){var t=e.images.map((function(e){return Object(d.jsx)(O,{image:e},e.id)}));return Object(d.jsx)(d.Fragment,{children:t})}),x=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"searchBar bg-yellow-300 p-8 rounded-b-3xl w-full",children:Object(d.jsxs)("form",{className:"max-w-screen-md flex flex-col items-start mx-auto",onSubmit:this.onFormSubmit,children:[Object(d.jsx)("label",{className:"font-bold mb-2",children:"Search a word"}),Object(d.jsx)("input",{className:"rounded w-full p-2",type:"text",placeholder:"Paris",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})]})})}}]),a}(n.Component),v=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.handleSubmit=function(){var t=Object(l.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("https://api.unsplash.com/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App bg-yellow-100 min-h-screen",children:[Object(d.jsx)(f,{}),Object(d.jsx)(x,{onSubmit:this.handleSubmit}),Object(d.jsxs)("h2",{className:"my-8 font-bold",children:["I found ",this.state.images.length," image(s)."]}),Object(d.jsx)("div",{className:"imageList container mx-auto max-w-screen-lg pb-8",children:Object(d.jsx)(g,{images:this.state.images})})]})}}]),a}(r.a.Component);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c2c3e3e1.chunk.js.map