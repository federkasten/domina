goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
domina.debug = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15811 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15811))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15811;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15816 = content;

if(cljs.core.truth_(and__3546__auto____15816))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15816;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15818 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15818))
{return or__3548__auto____15818;
} else
{var or__3548__auto____15819 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15819))
{return or__3548__auto____15819;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15824 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15824))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15824;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15828 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15828))
{return or__3548__auto____15828;
} else
{var or__3548__auto____15830 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15830))
{return or__3548__auto____15830;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if(cljs.core.truth_((void 0 === domina.t15835)))
{
/**
* @constructor
*/
domina.t15835 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15835.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15835");
});
domina.t15835.prototype.domina$DomContent$ = true;
domina.t15835.prototype.domina$DomContent$nodes = (function (_){
var this__15840 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15840.class_name));
});
domina.t15835.prototype.domina$DomContent$single_node = (function (_){
var this__15842 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15842.class_name));
});
domina.t15835.prototype.cljs$core$IMeta$ = true;
domina.t15835.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15844 = this;
return this__15844.__meta;
});
domina.t15835.prototype.cljs$core$IWithMeta$ = true;
domina.t15835.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15846 = this;
return (new domina.t15835(this__15846.class_name,this__15846.by_class,__meta));
});
domina.t15835;
} else
{}
return (new domina.t15835(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__15853_SHARP_){
return p1__15853_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__15862_SHARP_,p2__15863_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15862_SHARP_,p2__15863_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15865_SHARP_,p2__15864_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15864_SHARP_,p1__15865_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15867_SHARP_,p2__15866_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15866_SHARP_,p1__15867_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15869_SHARP_,p2__15868_SHARP_){
return goog.dom.replaceNode.call(null,p2__15868_SHARP_,p1__15869_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__15886 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15886))))
{return s__15886;
} else
{return null;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){
var G__15893__15894 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15893__15894))
{var n__15895 = cljs.core.first.call(null,G__15893__15894);
var G__15893__15896 = G__15893__15894;

while(true){
goog.style.setStyle.call(null,n__15895,cljs.core.name.call(null,name),value);
var temp__3698__auto____15897 = cljs.core.next.call(null,G__15893__15896);

if(cljs.core.truth_(temp__3698__auto____15897))
{var G__15893__15898 = temp__3698__auto____15897;

{
var G__15900 = cljs.core.first.call(null,G__15893__15898);
var G__15901 = G__15893__15898;
n__15895 = G__15900;
G__15893__15896 = G__15901;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword.
*/
domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){
var G__15902__15903 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15902__15903))
{var n__15904 = cljs.core.first.call(null,G__15902__15903);
var G__15902__15905 = G__15902__15903;

while(true){
n__15904.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15906 = cljs.core.next.call(null,G__15902__15905);

if(cljs.core.truth_(temp__3698__auto____15906))
{var G__15902__15907 = temp__3698__auto____15906;

{
var G__15917 = cljs.core.first.call(null,G__15902__15907);
var G__15918 = G__15902__15907;
n__15904 = G__15917;
G__15902__15905 = G__15918;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__15920__15921 = pair.split(/\s*:\s*/);
var k__15923 = cljs.core.nth.call(null,vec__15920__15921,0,null);
var v__15924 = cljs.core.nth.call(null,vec__15920__15921,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15927 = k__15923;

if(cljs.core.truth_(and__3546__auto____15927))
{return v__15924;
} else
{return and__3546__auto____15927;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15923.toLowerCase()),v__15924);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
return domina.parse_style_attributes.call(null,domina.attr.call(null,content,"style"));
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__15934 = domina.single_node.call(null,content);
var attrs__15935 = node__15934.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15932_SHARP_){
var attr__15936 = attrs__15935.item(p1__15932_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15936.nodeName.toLowerCase())],[attr__15936.nodeValue]);
}),cljs.core.range.call(null,attrs__15935.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15943__15945 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15943__15945))
{var G__15948__15950 = cljs.core.first.call(null,G__15943__15945);
var vec__15949__15951 = G__15948__15950;
var name__15952 = cljs.core.nth.call(null,vec__15949__15951,0,null);
var value__15953 = cljs.core.nth.call(null,vec__15949__15951,1,null);
var G__15943__15954 = G__15943__15945;

var G__15948__15956 = G__15948__15950;
var G__15943__15957 = G__15943__15954;

while(true){
var vec__15958__15960 = G__15948__15956;
var name__15962 = cljs.core.nth.call(null,vec__15958__15960,0,null);
var value__15964 = cljs.core.nth.call(null,vec__15958__15960,1,null);
var G__15943__15965 = G__15943__15957;

domina.set_style_BANG_.call(null,content,name__15962,value__15964);
var temp__3698__auto____15967 = cljs.core.next.call(null,G__15943__15965);

if(cljs.core.truth_(temp__3698__auto____15967))
{var G__15943__15968 = temp__3698__auto____15967;

{
var G__15969 = cljs.core.first.call(null,G__15943__15968);
var G__15970 = G__15943__15968;
G__15948__15956 = G__15969;
G__15943__15957 = G__15970;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__15972__15973 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15972__15973))
{var G__15975__15977 = cljs.core.first.call(null,G__15972__15973);
var vec__15976__15978 = G__15975__15977;
var name__15979 = cljs.core.nth.call(null,vec__15976__15978,0,null);
var value__15980 = cljs.core.nth.call(null,vec__15976__15978,1,null);
var G__15972__15981 = G__15972__15973;

var G__15975__15982 = G__15975__15977;
var G__15972__15983 = G__15972__15981;

while(true){
var vec__15984__15986 = G__15975__15982;
var name__15987 = cljs.core.nth.call(null,vec__15984__15986,0,null);
var value__15988 = cljs.core.nth.call(null,vec__15984__15986,1,null);
var G__15972__15989 = G__15972__15983;

domina.set_attr_BANG_.call(null,content,name__15987,value__15988);
var temp__3698__auto____15990 = cljs.core.next.call(null,G__15972__15989);

if(cljs.core.truth_(temp__3698__auto____15990))
{var G__15972__15991 = temp__3698__auto____15990;

{
var G__15994 = cljs.core.first.call(null,G__15972__15991);
var G__15995 = G__15972__15991;
G__15975__15982 = G__15994;
G__15972__15983 = G__15995;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has.call(null,domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__16028__16029 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16028__16029))
{var node__16030 = cljs.core.first.call(null,G__16028__16029);
var G__16028__16032 = G__16028__16029;

while(true){
goog.dom.classes.add.call(null,node__16030,class$);
var temp__3698__auto____16033 = cljs.core.next.call(null,G__16028__16032);

if(cljs.core.truth_(temp__3698__auto____16033))
{var G__16028__16034 = temp__3698__auto____16033;

{
var G__16036 = cljs.core.first.call(null,G__16028__16034);
var G__16037 = G__16028__16034;
node__16030 = G__16036;
G__16028__16032 = G__16037;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__16039__16041 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16039__16041))
{var node__16043 = cljs.core.first.call(null,G__16039__16041);
var G__16039__16044 = G__16039__16041;

while(true){
goog.dom.classes.remove.call(null,node__16043,class$);
var temp__3698__auto____16045 = cljs.core.next.call(null,G__16039__16044);

if(cljs.core.truth_(temp__3698__auto____16045))
{var G__16039__16048 = temp__3698__auto____16045;

{
var G__16057 = cljs.core.first.call(null,G__16039__16048);
var G__16059 = G__16039__16048;
node__16043 = G__16057;
G__16039__16044 = G__16059;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get.call(null,domina.single_node.call(null,content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__16071 = (function (content){
return text.call(null,content,true);
});
var text__16072 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16071.call(this,content);
case  2 :
return text__16072.call(this,content,normalize);
}
throw('Invalid arity: ' + arguments.length);
};
return text;
})()
;
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__16076__16077 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16076__16077))
{var node__16080 = cljs.core.first.call(null,G__16076__16077);
var G__16076__16100 = G__16076__16077;

while(true){
goog.dom.setTextContent.call(null,node__16080,value);
var temp__3698__auto____16101 = cljs.core.next.call(null,G__16076__16100);

if(cljs.core.truth_(temp__3698__auto____16101))
{var G__16076__16102 = temp__3698__auto____16101;

{
var G__16108 = cljs.core.first.call(null,G__16076__16102);
var G__16109 = G__16076__16102;
node__16080 = G__16108;
G__16076__16100 = G__16109;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue.call(null,domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__16114__16115 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16114__16115))
{var node__16116 = cljs.core.first.call(null,G__16114__16115);
var G__16114__16117 = G__16114__16115;

while(true){
goog.dom.forms.setValue.call(null,node__16116,value);
var temp__3698__auto____16118 = cljs.core.next.call(null,G__16114__16117);

if(cljs.core.truth_(temp__3698__auto____16118))
{var G__16114__16145 = temp__3698__auto____16118;

{
var G__16148 = cljs.core.first.call(null,G__16114__16145);
var G__16149 = G__16114__16145;
node__16116 = G__16148;
G__16114__16117 = G__16149;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,value){
var G__16156__16157 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16156__16157))
{var node__16158 = cljs.core.first.call(null,G__16156__16157);
var G__16156__16159 = G__16156__16157;

while(true){
node__16158.innerHTML = value;
var temp__3698__auto____16160 = cljs.core.next.call(null,G__16156__16159);

if(cljs.core.truth_(temp__3698__auto____16160))
{var G__16156__16161 = temp__3698__auto____16160;

{
var G__16163 = cljs.core.first.call(null,G__16156__16161);
var G__16164 = G__16156__16161;
node__16158 = G__16163;
G__16156__16159 = G__16164;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__16165 = domina.nodes.call(null,parent_content);
var children__16166 = domina.nodes.call(null,child_content);
var first_child__16181 = (function (){var frag__16167 = document.createDocumentFragment();

var G__16170__16172 = cljs.core.seq.call(null,children__16166);

if(cljs.core.truth_(G__16170__16172))
{var child__16174 = cljs.core.first.call(null,G__16170__16172);
var G__16170__16175 = G__16170__16172;

while(true){
frag__16167.appendChild(child__16174);
var temp__3698__auto____16178 = cljs.core.next.call(null,G__16170__16175);

if(cljs.core.truth_(temp__3698__auto____16178))
{var G__16170__16180 = temp__3698__auto____16178;

{
var G__16190 = cljs.core.first.call(null,G__16170__16180);
var G__16191 = G__16170__16180;
child__16174 = G__16190;
G__16170__16175 = G__16191;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16167;
})();
var other_children__16183 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16165) - 1),(function (){
return first_child__16181.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16165)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16166)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16165)))
{f.call(null,cljs.core.first.call(null,parents__16165),first_child__16181);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16154_SHARP_,p2__16155_SHARP_){
return f.call(null,p1__16154_SHARP_,p2__16155_SHARP_);
}),cljs.core.rest.call(null,parents__16165),other_children__16183));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16201 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16202 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nodelist.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nodelist = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nodelist__16201.call(this,nl);
case  2 :
return lazy_nodelist__16202.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
domina.create_wrapper = (function create_wrapper(table_level){
return document.createElement((cljs.core.truth_(table_level)?(cljs.core.truth_(cljs.core.set(["td","th"]).call(null,table_level))?"tr":"table"):"div"));
});
domina.set_wrapper_html_BANG_ = (function set_wrapper_html_BANG_(wrapper,content){
if(cljs.core.truth_(goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT))
{wrapper.innerHTML = cljs.core.str.call(null,"<br>",content);
return wrapper.removeChild(goog.dom.getFirstElementChild.call(null,wrapper));
} else
{return wrapper.innerHTML = content;
}
});
domina.extract_wrapper_dom = (function extract_wrapper_dom(wrapper,table_level){
var inner_wrapper__16222 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16223 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16222));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16223),1)))
{return inner_wrapper__16222.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16222));
} else
{return children__16223;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16236__16238 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16240 = cljs.core.nth.call(null,vec__16236__16238,0,null);
var table_level__16241 = cljs.core.nth.call(null,vec__16236__16238,1,null);
var ___16242 = cljs.core.nthnext.call(null,vec__16236__16238,2);
var wrapper__16243 = domina.create_wrapper.call(null,table_level__16241);

domina.set_wrapper_html_BANG_.call(null,wrapper__16243,content);
return domina.extract_wrapper_dom.call(null,wrapper__16243,table_level__16241);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16250 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16252 = x__6743__auto____16250;

if(cljs.core.truth_(and__3546__auto____16252))
{var and__3546__auto____16253 = x__6743__auto____16250.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16253))
{var and__3546__auto____16255 = x__6743__auto____16250.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16255))
{return cljs.core.not.call(null,x__6743__auto____16250.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16255;
}
} else
{return and__3546__auto____16253;
}
} else
{return and__3546__auto____16252;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16250);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16259 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16260 = x__6743__auto____16259;

if(cljs.core.truth_(and__3546__auto____16260))
{var and__3546__auto____16261 = x__6743__auto____16259.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16261))
{var and__3546__auto____16262 = x__6743__auto____16259.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16262))
{return cljs.core.not.call(null,x__6743__auto____16259.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16262;
}
} else
{return and__3546__auto____16261;
}
} else
{return and__3546__auto____16260;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16259);
}
})()))
{return cljs.core.first.call(null,content);
} else
{return content;
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return domina.nodes.call(null,domina.string_to_dom.call(null,s));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16330 = null;
var G__16330__16331 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16330__16332 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16330 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16330__16331.call(this,nodelist,n);
case  3 :
return G__16330__16332.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16330;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16351 = null;
var G__16351__16396 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16351__16398 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16351 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16351__16396.call(this,nodelist,n);
case  3 :
return G__16351__16398.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16351;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16443 = null;
var G__16443__16444 = (function (coll,n){
return coll.item(n);
});
var G__16443__16445 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16443 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16443__16444.call(this,coll,n);
case  3 :
return G__16443__16445.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16443;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
