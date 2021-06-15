export default function validateInfo(user){
    let errors = {}
    if(!user.name.trim()){
        errors.name = "Name required**";
    }
    if(!user.phone){
        errors.phone = "Phone number is required**";
    }else if(user.phone.length !== 10 ){
        errors.phone = "Phone number must be of 10 digits";
    }
    if(!user.email){
        errors.email = "Email is required**";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)){
        errors.email = "Email address is invalid";
    }
    if(!user.password){
        errors.password = "Password is required**";
    }else if(user.password.length < 6){
        errors.password = "Password is to be 6 characters or more";
    }
    if(!user.cpassword){
        errors.cpassword = "Confirm Password is required**";
    }else if(user.cpassword !== user.password){
        errors.cpassword = "Password does not match";
    }

    return errors;
}