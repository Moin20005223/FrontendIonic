"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2692],{2692:(I,g,r)=>{r.r(g),r.d(g,{CartPageModule:()=>y});var m=r(1368),u=r(4716),C=r(5672),c=r(7632),t=r(4496),p=r(8332),h=r(4972);function f(e,o){if(1&e){const n=t.KQA();t.I0R(0,"div",3)(1,"div",4),t.wR5(2,"img",5),t.I0R(3,"h4"),t.OEk(4),t.C$Y(),t.I0R(5,"img",6),t.qCj("click",function(){const s=t.usT(n).$implicit,l=t.GaO();return t.CGJ(l.deleteItemFromCart(s.img))}),t.C$Y()(),t.wR5(6,"hr",7),t.C$Y()}if(2&e){const n=o.$implicit,a=t.GaO();t.yG2(2),t.E7m("src",n.img,t.K6U),t.yG2(2),t.oRS("Price: ",n.price,""),t.yG2(),t.E7m("src",a.deleteImg,t.K6U)}}const P=[{path:"",component:(()=>{var e;class o{constructor(a,i){this.cartService=a,this.router=i,this.deleteImg="../../../assets/deletebutton.png"}ngOnInit(){this.cartItems=this.cartService.getLocally(),console.log(this.cartItems)}deleteItemFromCart(a){let s=JSON.parse(localStorage.getItem("cart")).filter(l=>l.img!=a);localStorage.setItem("cart",JSON.stringify(s)),window.location.reload()}}return(e=o).\u0275fac=function(a){return new(a||e)(t.GI1(p.o),t.GI1(c.E5))},e.\u0275cmp=t.In1({type:e,selectors:[["app-cart"]],decls:7,vars:1,consts:[[1,"CartContainer"],["class","CartData",4,"ngFor","ngForOf"],["href","/home"],[1,"CartData"],[1,"CartColumn"],["alt","Product Image","width","100","height","100",3,"src"],["alt","Product Image","width","30","height","30",3,"src","click"],[2,"height","0px","width","80%","border","1px solid black"]],template:function(a,i){1&a&&(t.I0R(0,"ion-content"),t.wR5(1,"app-header"),t.I0R(2,"div",0),t.yuY(3,f,7,3,"div",1),t.I0R(4,"button")(5,"a",2),t.OEk(6,"Continue Shopping"),t.C$Y()()()()),2&a&&(t.yG2(3),t.E7m("ngForOf",i.cartItems))},dependencies:[m.ay,C._i,h.k],styles:[".CartContainer[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh;margin-top:200px;margin-bottom:100px}.CartContainer[_ngcontent-%COMP%]   .CartData[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:70%;height:600px;margin-top:50px}.CartColumn[_ngcontent-%COMP%]{display:flex;width:60%;justify-content:space-between;align-items:center;margin-top:50px;margin-bottom:50px}.CartContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px;height:80px;margin-bottom:30px}"]}),o})()}];let v=(()=>{var e;class o{}return(e=o).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[c.qQ.forChild(P),c.qQ]}),o})();var d=r(9280);let y=(()=>{var e;class o{}return(e=o).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[m.MD,u.y,C.wZ,v,d.k,d.k]}),o})()}}]);