!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),n(5),n(6),n(7),t.exports=n(8)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=(n.n(o),n(3)),r=(n.n(a),n(4));n.n(r)},function(t,e){$(document).ready(function(){$(".gjs-pn-panels").append($("#sidebar-bottom-buttons"))})},function(t,e){$(document).ready(function(){function t(){var t=window.editor;e();var n=t.getWrapper().find("[phpb-content-container]")[0],o=function(t){var e="";return t.get("components").forEach(function(t){if(t.attributes.attributes["is-html"]){var n="";t.get("components").each(function(t){return n+=t.toHTML()}),e+=n}else e+='[block id="'+t.attributes.attributes.id+'"]'}),e}(n),a=function(t){var e=[];return t.get("components").forEach(function(t){t.attributes.attributes["is-html"],e.push(t.toJSON())}),e}(n),r=t.getCss(),i=t.getStyle();$.ajax({type:"POST",url:$("#save-page").data("url"),data:{data:{html:o,css:r,components:JSON.stringify(a),style:JSON.stringify(i)}},success:function(){e(),window.toastr.success(window.translations["toastr-changes-saved"])},error:function(){e(),window.toastr.error(window.translations["toastr-saving-failed"])}})}function e(){var t=$("#save-page");t.blur(),t.hasClass("waiting")?(t.attr("disabled",!1),t.removeClass("waiting"),t.find(".spinner-border").addClass("d-none")):(t.attr("disabled",!0),t.addClass("waiting"),t.find(".spinner-border").removeClass("d-none"))}$("#save-page").click(function(){t()}),$(document).bind("keydown",function(e){if(e.ctrlKey&&83===e.which)return t(),e.preventDefault(),!1})})},function(t,e){!function(){function t(t){t.set({removable:!1,draggable:!1,droppable:!1,badgable:!1,stylable:!1,highlightable:!1,copyable:!1,resizable:!1,editable:!1,layerable:!1,selectable:!1,hoverable:!1})}window.editor.on("load",function(e){!function e(n){if("phpb-content-container"in n.attributes.attributes)return;t(n);n.get("components").each(function(t){return e(t)})}(e.getWrapper());var n=e.getWrapper().find("[phpb-content-container]")[0];n.set({droppable:!0,hoverable:!0,removable:!1,copyable:!1}),n.set("custom-name",window.translations["page-content"]),n.components(window.pageComponents)}),window.editor.on("component:selected",function(t){document.querySelector(".gjs-toolbar").classList.add("d-none"),(t.attributes.draggable||t.attributes.removable)&&document.querySelector(".gjs-toolbar").classList.remove("d-none")}),window.editor.on("block:drag:stop",function(e){e&&(!function e(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t(n);var a="false"===n.attributes.attributes["is-html"];o=o&&!a;o&&function(t){var e=t.get("tagName");["h1","h2","h3","h4","h5","h6","h7","p","a","img","button","small","b","strong","i","em","ul","li","th","td"].includes(e)&&t.set({hoverable:!0,selectable:!0,editable:!0})}(n);!function(t){"phpb-editable"in t.attributes.attributes&&t.set({hoverable:!0,selectable:!0,editable:!0})}(n);n.get("components").each(function(t){return e(t,o)})}(e,e.attributes.attributes["is-html"]),e.set({removable:!0,draggable:!0,copyable:!0,layerable:!0,selectable:!0,hoverable:!0}))})}()},function(t,e){},function(t,e){},function(t,e){},function(t,e){}]);