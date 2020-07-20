(this["webpackJsonptrivia-app"]=this["webpackJsonptrivia-app"]||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),c=a.n(s),o=(a(33),a(16)),i=a.n(o),u=a(27),l=a(5),d=a(6),p=a(2),h=a(8),b=a(7),v=(a(35),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addScore=n.addScore.bind(Object(p.a)(n)),n.deductScore=n.deductScore.bind(Object(p.a)(n)),n.resetScore=n.resetScore.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"addScore",value:function(){this.props.updateScore("add")}},{key:"deductScore",value:function(){this.props.updateScore("subtract")}},{key:"resetScore",value:function(){this.props.updateScore("reset")}},{key:"render",value:function(){return r.a.createElement("div",{className:"scoreBoard"},r.a.createElement("div",null,r.a.createElement("h2",null,"Score: ",this.props.currentScore)),r.a.createElement("div",{id:"scoreBoard-buttons"},r.a.createElement("button",{onClick:this.addScore,id:"increase-button"},"Increase"),r.a.createElement("button",{onClick:this.deductScore,id:"decrease-button"},"Decrease"),r.a.createElement("button",{onClick:this.resetScore,id:"reset-button"},"Reset")))}}]),a}(n.Component)),m=(a(36),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={viewAnswer:!1},n.toggleViewAnswer=n.toggleViewAnswer.bind(Object(p.a)(n)),n.getQuestion=n.getQuestion.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"toggleViewAnswer",value:function(){this.state.viewAnswer?this.setState({viewAnswer:!1}):this.setState({viewAnswer:!0})}},{key:"getQuestion",value:function(){this.props.getQuestion(),this.setState({viewAnswer:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"gameBody"},r.a.createElement(v,{updateScore:this.props.updateScore,currentScore:this.props.currentScore}),r.a.createElement("div",{className:"gameQuestions"},r.a.createElement("h6",null,"Category: ",this.props.data.category.title),r.a.createElement("h4",null,"Question: ",this.props.data.question),r.a.createElement("div",{className:"gameQuestions-buttons"},r.a.createElement("button",{onClick:this.getQuestion,id:"getQuestion-button"},"Get New Question"),r.a.createElement("button",{onClick:this.toggleViewAnswer,id:"toggleAnswer-button"},"View Answer")),this.state.viewAnswer?r.a.createElement("p",null," ",this.props.data.answer," "):r.a.createElement("p",null,".....")))}}]),a}(n.Component));var S=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Jeopardy"))},g=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:null,score:0,searchURL:"http://jservice.io/api/random"},n.updateScore=n.updateScore.bind(Object(p.a)(n)),n.getQuestion=n.getQuestion.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"getData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.state.searchURL);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({data:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Failed to fetch data");case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData()}},{key:"getQuestion",value:function(){this.getData()}},{key:"updateScore",value:function(e){switch(e){case"add":this.setState({score:this.state.score+1});break;case"subtract":this.setState({score:this.state.score-1});break;case"reset":this.setState({score:0});break;default:this.setState({score:0})}}},{key:"render",value:function(){return null===this.state.data?r.a.createElement("div",null,r.a.createElement("p",null,"loading data...")):r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(m,{data:this.state.data[0],updateScore:this.updateScore,currentScore:this.state.score,getQuestion:this.getQuestion}))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},28:function(e,t,a){e.exports=a(121)},33:function(e,t,a){},35:function(e,t,a){}},[[28,1,2]]]);
//# sourceMappingURL=main.48156d46.chunk.js.map