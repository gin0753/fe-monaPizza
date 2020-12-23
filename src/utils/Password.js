const checkPassword = (password, component, state, pattern) => {
    if(password === '' ){
        component.setState({[state]: ''});
    }
    else if(password.length > 8 && password.length < 25 && password.match(pattern)){
        component.setState({[state]: 'Green'});
    }
    else{
        component.setState({[state]: 'Red'});
    }
}

const confirmPassword = (password, component, state, pattern) => {
    if(password === '' ){
        component.setState({[state]: ''});
    }
    else if(password === pattern ){
        component.setState({[state]: 'Green'});
    }
    else{
        component.setState({[state]: 'Red'});
    }
}

const checkPattern = (password, component, state1, state2, state3, state4) => {
    if(password.match(/(?=.*\d)/)){
        component.setState({[state1]: true});
    }
    else{
        component.setState({[state1]: false});
    }
    if(password.match(/(?=.*[a-z])/)){
        component.setState({[state2]: true});
    }
    else{
        component.setState({[state2]: false});
    }
    if(password.match(/(?=.*[A-Z])/)){
        component.setState({[state3]: true});
    }
    else{
        component.setState({[state3]: false});
    }
    if(password.match(/.{8,}/)){
        component.setState({[state4]: true});
    }
    else{
        component.setState({[state4]: false});
    }
}

export default {
    checkPassword,
    confirmPassword,
    checkPattern
};