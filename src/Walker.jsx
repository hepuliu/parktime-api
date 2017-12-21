import React, {Component} from 'react';

class Walker extends Component {
    render() {
        return (
          <form className ="walker-details">
          <h1>Walker details</h1>
              <div className="form-group">
                <label htmlFor="profile-pic">Upload your photo</label>
                <input type="file" id="exampleInputFile"/>
              </div>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="input" className="form-control" placeholder="Dave" />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="input" className="form-control" placeholder="Smith" />
              </div>
              <div className="form-group">
                <label htmlFor="experience">Experience</label>
                <input type="textarea" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="desc">Description</label>
                <input type="textarea" className="form-control"/>
              </div>
              <div className="form-group1">
                <label htmlFor="postal-code">Postal Code</label>
                <input type="input" className="form-control" id="postal" />
              </div>
              <div className="form-group">
                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" id="bankname">Bank Name</label>
                <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="choose">
                  <option defaultValue>Choose...</option>
                  <option value="1">TD Canada Trust</option>
                  <option value="2">CIBC</option>
                  <option value="3">ScotiaBank</option>
                  <option value="4">Bank of Montreal</option>
                  <option value="5">Citibank Canada</option>
                  <option value="6">RBC Royal Bank</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="example">Bank Account Number</label>
                <input type="input" className="form-control" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <button className="btn btn-primary">Submit</button>
          </form>

        );
    }
}

export default Walker;