function CustomReact(abstractElement, container) {
    const element = document.createElement(abstractElement.type);

    if (abstractElement.children) {
        if (typeof abstractElement.children === 'string') {
            element.innerHTML = abstractElement.children;
        } else if (typeof abstractElement.children === 'object') {
            console.log(abstractElement.children);
            CustomReact(abstractElement.children,element)
        }
    }
    for (const prop in abstractElement.props) {
        if (prop == 'children') continue;
        element.setAttribute(prop, abstractElement.props[prop]);
    }

    container.appendChild(element);
}

const imageReactElement = {
    type: 'img',
    props: {
        src: 'https://images.unsplash.com/photo-1734389481041-fa26afc1267c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'nature',
        width: '500',
        height: '600'
    }
}

const hyperLinkReactElement = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        target: '_blank',
    },
    children: imageReactElement
}
const rootContainer = document.querySelector('#root');
CustomReact(hyperLinkReactElement, rootContainer)