import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './PricingBodyPartial.css';
import { Container } from 'react-bootstrap';

const PricingBodyPartital = () => {
    const [PersonalDetails, setPersonalDetails] = useState(true);
  ////  const [person, setPerson] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();
 //const navigate = useNavigate();
    const onSubmit = data => {
        setPersonalDetails(false);
        console.log(data);
    }
   const homePage=()=>{

   }
  
    return (
        <div style={{ marginBottom: '100px' }}>
            {
                PersonalDetails === true && <div>
                    <center><h3>Personal Information</h3></center>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Container>
                            <div className="row">
                                <div className="col-md-6">
                                    <span>FirstName</span>
                                    <input className="inputFiledHighlight" {...register("FirstName", { required: true })} />
                                    {errors.FirstName && <span style={{color:'red'}}>FirstName is required<br/></span> }
                                    <span>Email</span>
                                    <input className="inputFiledHighlight" type='email' {...register("Email", { required: true })} />
                                    {errors.Email && <span style={{color:'red'}}>email is required<br/></span>}
                                    <span>Date of Birth</span>
                                    <input type='date' className="inputFiledHighlight" {...register("Birth", { required: true })} />
                                    {errors.Birth && <span style={{color:'red'}}>Birth required<br/></span>}
                                    <span>Address Line 1</span>
                                    <input className="inputFiledHighlight" {...register("Address", { required: true })} />
                                    {errors.Address && <span style={{color:'red'}}>Address is required<br/></span>}
                                    <span>City</span>
                                    <input className="inputFiledHighlight" {...register("City", { required: true })} />
                                    {errors.City && <span style={{color:'red'}}>City is required<br/></span>}
                                </div>
                                <div className="col-md-6">
                                    <span>Last Name</span>
                                    <input className="inputFiledHighlight" {...register("LastName", { required: true })} />
                                    {errors.LastName && <span style={{color:'red'}}>LastName is required<br/></span>}
                                    <span>Mobile Number</span>
                                    <input type='number' className="inputFiledHighlight" {...register("Mobile", { required: true })} />
                                    {errors.Mobile && <span style={{color:'red'}}>Mobile is required<br/></span>}
                                    <span>Gender</span>
                                    <select className="inputFiledHighlight" {...register("gender")}>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        <option value="other">other</option>
                                    </select>
                                    {errors.Gender && <span style={{color:'red'}}>Gender is required<br/></span>}
                                    <span>Country</span>
                                    <input className="inputFiledHighlight" {...register("Country", { required: true })} />
                                    {errors.Country && <span style={{color:'red'}}>Country is required<br/></span>}
                                    <span>Post Code</span>
                                    <input className="inputFiledHighlight" {...register("PostCode", { required: true })} />
                                    {errors.PostCode && <span style={{color:'red'}}>Post Code is required<br/></span>}
                                </div>
                            </div>
                            <div style={{textAlign:'end',marginTop:'1%'}}>
                                <input id="btnhighlight" type='submit' value="Next"></input>
                            </div>
                        </Container>
                    </form>
                </div>
            }

            {
                PersonalDetails === false && <div>
                   <Container>
                   <center><h3 style={{ marginBottom: '50px' }}>Payment Process</h3></center>
                    <div style={{ textAlign: 'end' }}>
                        <button onClick={homePage} id="btnhighlight">Submit</button>
                    </div>
                   </Container>
                </div>
            }
        </div>
    )
}
export default PricingBodyPartital;