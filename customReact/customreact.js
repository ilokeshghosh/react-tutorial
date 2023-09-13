function customRender(reactElement, container){

    // const domElement= document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);

    // optimized approach
    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        // console.log(reactElement.props[prop]);

        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);


}

const reactElement = {
    type : 'a',
    props : {
        href: "https://google.com",
        target: '_blank'
    },
    children : 'Click me to Visit Google'
}
// console.log(Object.keys(reactElement.props)[0])

const root = document.querySelector('#root');

customRender(reactElement, root);