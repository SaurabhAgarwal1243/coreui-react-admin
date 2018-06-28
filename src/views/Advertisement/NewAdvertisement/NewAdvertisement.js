import React,{ Component }from 'react'
import axios from 'axios'
class NewAdvertisement extends Component {
  constructor(){
    super()

    this.state = {
      Name: "",
      Status: "",
      Logo: "",
      Url: "",
      redirectTo: null

    }

  }
  handleSubmit(event){
    event.preventDefault()
    console.log('handle form submit:')

    axios
      .post('/Advertisement', {
        Name: this.state.Name,
        Status: this.state.Status,
        Logo: this.state.Logo,
        Url: this.state.Url
      })
  }

  render(){
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="Name">Name</label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                     type="text"
                     id="Name"
                     name="Name"
                     placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="Status">Status </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                     placeholder="Status"
                     type="text"
                     name="Status"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="Logo">Logo Uplaod </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                     placeholder="Logo"
                     type="file"
                     name="Logo"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="Url">Url </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input className="form-input"
                     placeholder="Url"
                     type="text"
                     name="Url"
              />
            </div>
          </div>
          <div className="form-group ">
            <div className="col-7"></div>
            <button
              className="btn btn-primary col-1 col-mr-auto"

              onClick={this.handleSubmit.bind(this)}
              type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }

}

export default NewAdvertisement;
