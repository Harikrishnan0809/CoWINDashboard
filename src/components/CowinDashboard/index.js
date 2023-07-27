// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'

const constantStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {dataDetails: {}, status: constantStatus.loading}

  componentDidMount = () => {
    this.getDetails()
  }

  getDetails = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)
    const data = await response.json()
    const upDatedData = {
      last7DaysVaccination: data.last_7_days_vaccination,
      vaccinationByAge: data.vaccination_by_age,
      vaccinationByGender: data.vaccination_by_gender,
    }
    console.log(upDatedData)
    if (response.ok === true) {
      this.setState({dataDetails: upDatedData, status: constantStatus.success})
    }
  }

  loadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  successView = () => {
    const {dataDetails} = this.state
    return <VaccinationCoverage data={dataDetails.last7DaysVaccination} />
  }

  switchStatus = () => {
    const {status} = this.state
    switch (status) {
      case constantStatus.loading:
        return this.loadingView()
      case constantStatus.success:
        return this.successView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="nav-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <p className="logo-name">Co-WIN</p>
        </div>
        <h1 className="heading">CoWIN Vaccination in India</h1>
        {this.switchStatus()}
      </div>
    )
  }
}

export default CowinDashboard
