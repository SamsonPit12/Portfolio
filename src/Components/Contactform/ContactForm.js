import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    // const { status } = this.state;
    // return (
    //     <form
    //         onSubmit={this.submitForm}
    //         action="https://formspree.io/xbjyonzw"
    //         method="POST"
    //     >
    //         <div className='container'>
    //             <div className="form-group row justify-content-center" >
    //                 <div className="form-group">
    //                     {/* <label for="email">Email</label> */}
    //                     <input type="text" className="form-control" id="name" placeholder='Name' />
    //                     {/* <label for="message">Message: </label> */}
    //                     <input type="email" className="form-control" id="email" placeholder="Email" />
    //                 </div>
    //             </div>

    //             <div className="form-row justify-content-center">
    //                 <div className="form-group">
    //                     {/* <label for="label">Label: </label> */}
    //                     <input type="text" className="form-control" id="subject" placeholder='Subject' />
    //                     {/* <label for="message">Message: </label> */}
    //                     <input type='text' className="form-control" id="message" placeholder="Message" />
    //                 </div>
    //             </div>
    //                 <input type="text" name="_gotcha" style={{display: 'none'}} />
    //                 {status === "SUCCESS" ? <p>Thanks!</p> : <button className='btn btn-outline-secondary' >Submit</button>}
    //                 {status === "ERROR" && <p>Ooops! There was an error.</p>}
    //         </div>
    //     </form>

    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xbjyonzw"
        method="POST"
      >
        <label>Name:</label>
        <input type="text" name='name' />
        <label>Label:</label>
        <input type="text" name='subject' />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        {/* <input type="text" name="message" /> */}
      	<textarea class="form-control" rows="5" name="message"></textarea>

        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>

    );
  }




  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}