import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className='container'>
        <div className='form'>
          <div className='contact-info'>
            <h3 className="title">Let's get in touch</h3>
            <p >
              Whether you have questions about our programs, need more information, or want to schedule a visit, we're here to help. Reach out to us using any of the methods below, and we'll get back to you as soon as possible.
            </p>
            <div className='info'>
              <div className='information'>
                <p><FaLocationDot />  Buxar-802101, Bihar </p>
              </div>
              <div className='information'>
                <p><MdEmail />  E-mail: ec-buxar@nielit.gov.in</p>
              </div>
              <div className='information'>
                <p><MdWifiCalling3 />  Mobile: +91-8986020610</p>
              </div>
              
            </div>

          </div>


        </div>
        <div className='contact-form'>
                <form className='con'>
                  <h3 className='title new_title'>Contact-Us</h3> <br />
                  <div className='input-container'>
                    <label for=""></label>
                    <input type='text' name='name' className="input" placeholder='Username' /> <br />
                    <div className='input-container'><br />
                      <label for=""></label>
                      <input type="email" name="email" className="input" placeholder='abc@gmail.com' /> <br />

                    </div>
                    <div className='input-container'><br />
                      <span><label for=""></label>
                        <input type='phone' name='phone' className='input' placeholder='+91' /> <br /></span>
                    </div>
                    <div className='input-container'>
                      <label for=""></label>
                      <textarea name="message" className="input" placeholder=" What's on your mind?" ></textarea>

                    </div>
                    <input type="submit" value="Send" className="btn" />

                  </div>
                </form>
              </div>



      </div>
    </>
  )
}

export default Contact
