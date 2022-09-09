import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helper/FormHelper";
import {RegistrationRequest} from "../../APIRequest/UsersAPIRequest";

const Registration = () => {

    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();
    let navigate=useNavigate();

    const onRegistration = async () => {
        let email = emailRef.value;
        let fastName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;
        let photo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAxADEDASIAAhEBAxEB/8QAHgAAAgEEAwEAAAAAAAAAAAAAAAkIAwQGBwECCgX/xAAxEAABBAMAAgEDAgMIAwAAAAAEAgMFBgEHCAATCRESFBUXIzZ2FhkkVFaVpbS10tX/xAAZAQACAwEAAAAAAAAAAAAAAAAGBwAFCAT/xAA1EQABBQAABQIDAwwDAAAAAAAEAQIDBQYABxETFBIVCBYhIzFhJDU3QVNUdHWRkrLwwdLT/9oADAMBAAIRAxEAPwD3p3K5VXXlVsF5vNgiqpUKpFGTljsc4Y0BEw8SA0p8s00t9SW2mmm05+mPrlbi8oaaQt1xCFKCD6K7Q+QySOZ4uwJy9yiPJmQ6+s9j1dE7sfaKI8pYMkZpTW0opkQSCwQySK3Nz+B33sYwtqcrVjjpStCcdFByXyGdoY4uZOkx+UOXhKvsfrNcOYVHo2jsedQqU1vpQySBcaIxBCCM4n5toUnGHnx5xpeI+x1qsygjKN9bs1dyJoW2bburbEBrvVtbFQHA18MERwn1fjQtWplUikqCj2jJM52OgoQFKhI8T2tKfcDjhn32D0QSGgjq42VsNzrrtgs4ARcLSw6cY9We1q6ue10NhcWTJGEwQmNlCEDmFfIMSSSnhvyoqRMCNlhoM2Hs+b24grD6GktQo7iox9bfrCuXfLnp2PC0Ov0o88FoCFcRl0lTTHVc89bY2VkiU8AkfDRzxcWEl9G7Z6c6fs5CFLk5rau6rP8AhLLcWy64qIhYB2M/SY9t1hvIUc7IyaREIba/IdSwx6u39zDzJUWFk8/bG6Y5lszeMvBWLUG8bWGvBycL9T8kDPOTSDxlKUhBgg5Ea4SO36GyxlOLdziNH587t7djAdwdKdN7W49oFrwmYoXNfL0s1R7tW6ed9H4h7Y21XRypcy1yUd+KRJwpMZIBBqdypUdWSyZCqxl1cuXO6uP40jaXJ3VW4uq4OroRI2jmbqmXH2PPXuuhOtuyAGvtlNix0pA2hiObIxDRIEWE1IEettCpF9oavypGtpoGz+2u5njssu52lqkef8utJ9Xp8JxTBPYkVHfZrI0Z1Qj/ALzuwizIyHajmCw35ak+KGth0iTeM/KtlvW8uYrL1+haOS0iqPkRrmy/kriGVr8gybqjrxAGuMS2lN4d0fHi8Ob1SsbsfktoxoWU6N19VkVvdeoo59zLTMttHXsap6KsVZCz6miZiJdeLZZy+fKWUmUejK6e3OgX+l7Upda2LrqyxVwpFwihput2SEJwVGysaVjP2PMr+iXGnWnEuDGBktsmx5rJAB44xoz7Deo+ZOhtc9h6DqW5KWItVZvMYfHz1UnmhiT69OBOvw9rplkDUlTDpEac0UG77GUjS0a4LJMNKAkR8rXJqGJI+ObuSP5vAfIH487Restq0PFvrddjNNb8h0tH2vW0U4vCkx1YuMe8O/XgFrwhyQIhI6OZyQDYpA4dLDjvUtBZ62Cm2NKwucoUSBgglzDXo91nGtfCjRwbgCGOUtWgshCNFgIRo0RUbHlru2px96zU1Z+ZBxnOPEwWxtrVVAMFRUbQLPJNJpx1zwbGV1FsKEQYq2cyihEpLuqBsWx1otoNDLaun8PDw8AeM/8ACifhpbHuHO+1+jS/WVaOoOmt17WnJJWXXDPwsWh+vwsM448wO42DE4i5AiNDwj1CIlX8NpY9qhmD5b/xiI3gyJtCs41fNfIZzzH7Jbe9eIsuHUuyOsAzylPjqTCP4bNcPVlz0tJYQTlKyxwkKqfDU7irc5bV0AeyIBZuaOod56nnowb2Jy2lq0rsYEg0h1xTjkaYqbNEjC8IaaJZjHMIStTS3nZndoaJ1j0fzZszVW27FH0mqzEUxID7AkS4+Pa19ZYYxiRrFxRISZAQg36RNMiZLacPAxJxrx0Ms0ZqSccwzrE+Ct5plmEd1AY7uSKF8LFmmhqyIlFryBo2/WV4tfMNOLGzor1ijaxUVWqmoNHfg5r4qLe5sfLbRj7ckUOYOJxZgOWsRHVefsKyCLq4mWrz5lcfVQQdHTKKLHA5jnMckpPDzzj88fN7UNWFEc89cFY2lfNfrRW4vojm8mN2zr/bsdGx7ahLGYzHnASzFgkGG04kiIWPkwj5LJZRANebSprN70R86FEtzw+jOSwyKns2+LxXP3u6KzGan1hqVmXEcyu2mNzphcmZIQ4asyASJuKjYtBSo91oa0rc/QS+VeVe29wQJtRK6Bze82269KlQVT1+epTkT0wdle8sTo0MRPslG7/2XFUvwqc7vmFKSPHlSgPZ5sesRyNyjqNWpMl860ejViC8RULcJJA24Y3qK6sQ9PE4lx8XqBQNmfJXB1Rx3OtIrujYKq0M0lv9HBs5keC5fw4jLa3kIaHkWoxjIrTuBxxWgMsjCe1bXlf5qIl2P4sc3ZEYbauHM+6NI7rphycqaNEnI/YkJT2vxSW2XXWsfZcMlPJ+5tr/AATZKsrdFYbVKnhDQ2sedeaaNQ9WXiL2pGn5kLhadtxMsHOjbTvtkeSRart+qgSEsKU2eWy2BHpTJyDokPGxoJR55QrxpEYPmikn5DiSR03D/wAW5dJbi0fpGjBoUv3mWWX2TA21lhpppWHXkPBU40Z5CErwpBGG1JzlxOM9QJ0R/NSqIEWR4iX9QJJKRG6CQivBQUCwKKieiPi8sMckkqORPWxs0jZU9aO4tKK8Fv8A4rMpY1LiJalvMDI1JJVgPIERY5+jbVUGgtbQWZGzCpb01dZWdpASiTwxlksJTutk4nz+/mvf8zK/7W7/AO/h59X9k9Y/6Z/5mwf/AFfDwI9VH+zsv6j/APf/AHqv4dEh3ML+76X+6v8A/f8A3qv4dE+9c3ew/GD1Xcu3omkzN75t6fqMdUN51OrrGGka1vqkwkp+11vT+QpiPBibkOxiuysmQh/8MuSs8s/iSmC67CSWZ6y4X2Z2k7Xegvkqtj9vDlG2bNrPkGjTxsTpDWMPJNtHwr9regT2ir7c0hvpScW5KEiYbUsE6VsMc4xHRbc9ga/pe1KXZddbFrUVcKRcIomEslbmxsFR0rHFYx97TyPqlxp5pxLZIZozjBseawOeAQMaMw+2omL1D3F8c5ZAXNoD/aHHbT6yIvQVpsaIbfOlY50ha3InWVskUEiXSrRzK/uAgC2yJJaEMRkdBgkYkrLJndVfrZVcY9eTX0u0HHHrmXRcjRZ7aoEhWAMMG2IkaNS2kEPoElIeoi2AI4kDbGGSKWA185TmA/S5YcDP2mfxXOqur6/OQ7S3IjqjdZkKgNQKWnotceTHWYnUgBdmoKsJlqX6Gkr6kKPRhEjFAXbaNfap1jqWGZrurtd0nXUEw2ltuJpNXhawB9qUto+5Y0MEG284rDTfseeSt11SErdWtePu8ub3rbXe0YV2t7LodN2FXn0OIeg7vWIW1RDiXsIw7hUdOBHCZ9nrb+7Pq+uctoz9fqhOcLKi/mm4ujHsQ+7l7p5muLTWPzqXuzSGxY6dELT6EvDeqoQdwRlCFvZU2QTkPGWUewhsVxxtlVeU+aTiA1zMVp+W290dcXFKbComlNIbJlbMc/j24QgZq3QFOj3m1Laxj3Dnv4UhaXGUvYwvCaBcdvFK8laDRunV/d9y8M10Kr9/ke6o1RlZ+vyPK9HT69zp9eF67k3z7daJZLy/5jvNWXy00aVF1IGruvVT01aMdWdpFX1LYe6dhEX1LP0+vGHbN4Av3KRs7vz4y7U5rKwBpJn73yxbJo2X0Bt8ENhZR4cbHzkhlVEtz7bPriZMWWj40f8AhRgJ9RjFlvPao5h2HYPlb6k1Z1PLUCZ1/wAzcfQbn9ia5YSRjXrp1Pa4iLetZrBIWG2ZOA1az+DmHk1JGfzIBV2TSIMqxz0JDbElaB3r8jP2Qe6YMvhTjuQdVix6zh7C3K9MbqgVevC4K1TIjCANd1WWaS+PLwz4kdMYadKi5WDtcUaLIiNr1jrCg6ZoNX1hrCrxdNolNi2Yiu12IZy0ICI1lTjjjjjinCTTzSXHjpSUOeJkpaSJKkpIoo4oghwhsr99VVyQ2RVfdbWWCevitxJWlk0tUXAoxw9hcDyOGuLOaBXiCva4x9WLOU11g6V0IwjE0u/mymXmD0tpn9rzsLAPz42vqTI7iyxWUtwX1l5XaDY1xUtbsdQYA+epq5WSXE2VrDbSN+heXMHW1OeeHh4eKvjKnB4eHh5OJxovoX+Q2P6gjv8AqyHlrzl/JEr/AFUd/wCIg/Dw8vU/MDv4v/lOD1v6PpP5un+UfG/vDw8PKLgC4PDw8PJxOP/Z"
        if (IsEmail(email)) {
            ErrorToast("Valid Email Address Required !")
        } else if (IsEmpty(fastName)) {
            ErrorToast("First Name Required !")
        } else if (IsEmpty(lastName)) {
            ErrorToast("Last Name Required !")
        } else if (!IsMobile(mobile)) {
            ErrorToast("Valid Mobile Required !")
        } else if (IsEmpty(password)) {
            ErrorToast("Password Required !")
        } else {
            let result = await RegistrationRequest(email, fastName, lastName, mobile, password, photo)
            if (result === true) {
                navigate("/login")
            }
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card w-100">
                        <div className="card-body">
                            <h4 className="text-start">Sign Up</h4>
                            <hr/>
                            <div className="row m-0 p-0">
                                    <div className="col-md-4 text-start p-2">
                                        <label>Email Address</label>
                                        <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control" type="email"/>
                                    </div>
                                    <div className="col-md-4 text-start p-2">
                                        <label>First Name</label>
                                        <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control" type="text"/>
                                    </div>
                                    <div className="col-md-4 text-start p-2">
                                        <label>Last Name</label>
                                        <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control" type="text"/>
                                    </div>
                                    <div className="col-md-4 text-start p-2">
                                        <label>Mobile Number</label>
                                        <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control" type="tel"/>
                                    </div>
                                    <div className="col-md-4 text-start p-2">
                                        <label>Password</label>
                                        <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control" type="password"/>
                                    </div>

                                </div>
                            <div className="row m-0  p-0">
                                <div className="col-md-4 text-start p-2">
                                    <button onClick={onRegistration} className="btn w-100 mt-2 btn-success">Complete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registration;