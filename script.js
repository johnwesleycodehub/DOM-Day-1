// const Tag=document.createElement("h1")
// Tag.innerHTML="<i>This is DOM</i>"
// document.body.append(Tag)

// const header = document.createElement("header");
// const navigation = document.createElement("nav");
// const un = document.createElement("ul");
// const list = document.createElement("li");
// const heading = document.createElement("h1");
// const division = document.getElementById("container");

// heading.innerHTML = "<i>This is the DOM example</i>";

// heading.setAttribute("class", "heading");
// heading.classList.add("head", "heading1");
// heading.setAttribute("style", "background-color:red");

// division.getAttribute("class");

// list.appendChild(heading);
// un.appendChild(list);
// navigation.appendChild(un);
// header.appendChild(navigation);
// document.body.append(header);

// const header=document.createElement("header")
// const navigation=document.createElement("nav")
// const ul=document.createElement("ul")
// const list1=document.createElement("li")
// const list2=document.createElement("li")
// const list3=document.createElement("li")
// list1.innerHTML="<i>Name: John Wesley</i>"
// list2.innerHTML="<i>City: Bangalore</i>"
// list3.innerHTML="<i>Age: 22</i>"

// const main=document.createElement("main")
// const section=document.createElement("section")
// const heading=document.createElement("h1")
// heading.innerHTML="Above details are created using DOM"

// ul.append(list1,list2,list3)
// navigation.appendChild(ul)
// header.appendChild(navigation)
// document.body.append(header)

// section.appendChild(heading)
// main.appendChild(section)
// document.body.append(main)

function ele(tagname,content,attrname,attrvalue){
    const ele=document.createElement(tagname)
    ele.innerHTML=content
    ele.setAttribute(attrname,attrvalue)
    return ele;
}
const h1=ele("h1","This is created using function","class","heading")
const header=ele("header","","class","header")
const nav=ele("nav","","class","navigation")
const ul=ele("ul","","class","unorder")
const li=ele("li","","class","list")
header.appendChild(nav)
nav.appendChild(ul)
ul.appendChild(li)
li.appendChild(h1)
document.body.append(header)