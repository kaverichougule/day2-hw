let h1Tag=React.createElement('h1',null,"Topics covered");
let p1=React.createElement('p',null,"The following is a list of all the topics we cover in the MDN learning area");

let a1=React.createElement('a',{href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"},"Getting started with the web");
let p2=React.createElement('p',null,"Provides a practical introduction to web development for complete beginners");
let div1=React.createElement('div',null,[a1,p2]);

let a2=React.createElement('a',{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML"},"HTML — Structuring the web");
let p3=React.createElement('p',null,"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");
let div2=React.createElement('div',null,[a2,p3]);


let a3=React.createElement('a',{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS"},"CSS — Styling the web");
let p4=React.createElement('p',null,"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");
let div3=React.createElement('div',null,[a3,p4]);

let Maindiv=React.createElement('div',{class:"subParts"},[div1,div2,div3]);

let container=React.createElement("div",{class:"MainContainer"},[h1Tag,p1,Maindiv]);
ReactDOM.render(container,document.getElementById("root"));
