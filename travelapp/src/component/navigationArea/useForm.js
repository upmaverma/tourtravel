import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const useForm = (validate) => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const [errors, setErrors] = useState({});


    const handleInputs = (e) => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors(validate(user));

        const { name, phone, email, password, cpassword } = user;
        
        
        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, phone, email, password, cpassword
            })
        });

        const data = await res.json();
        if(!data  || res.status === 422){
            // window.alert("Please fill out neccessary deatils")
           
        }else if(res.status === 406){
            // window.alert("Email already exists")
        }else if(res.status === 401){
            // window.alert("Password does not exist")
        }
        else{
            window.alert("registration succesfull");
            history.push('/login');
           
        }

       

    }

    return { handleInputs, user, handleSubmit, errors };
}
export default useForm;