function customRender(reactElement,maincontainer){
    /*
    const dimElement=document.createElement(reactElement.type);
    dimElement.innerHTML=reactElement.children
    dimElement.setAttribute('href',reactElement.props.href);
    dimElement.setAttribute('target',reactElement.props.target);

    maincontainer.appendChild(dimElement);
    */

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        if(prop=='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    maincontainer.appendChild(domElement);
}


const reactElement= {
    type:'a',
    props:{
        href:'https:/google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const maincontainer=document.querySelector("#root")

customRender(reactElement,maincontainer);