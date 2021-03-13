import React from 'react'

export class EMIForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            principal = 0,
            interest = 0,
            tenure = 0
        }
        this.handleStateChange = this.handleStateChange.bind(this)
    }

    handleStateChange = e => {
        const value = e.target.value;
        this.setState({
            ...state,
            [e.target.name]: value
        }, this.props.handleFormInput(this.state))
    }

    render() {
        return (
            <div className="form-container">
                <h1>Home Loan</h1>
                <div className="form">
                <form className="emi-form">
                    <div className="form-group">
                            <label className="control-label col-md-3">
                                Principal (&#8377;)
                                <input type="number"
                                value={this.state.principal} onChange={this.handleStateChange} ref="principal" name="principal" />         
                        </label>
                    </div>
                    <div className="form-group">
                            <label className="control-label col-md-3" htmlFor="interest">
                                Interest Rate (%)
                                <input type="number" value={this.state.interest} onChange={this.handleStateChange} ref="interest" name="interest" /> 
                            </label>
                    </div>
                    <div className="form-group">
                            <label className="control-label col-md-3" htmlFor="tenure">
                                Loan Tenure
                                <input type="number" value={this.state.tenure} onChange={this.handleStateChange} ref="tenure" name="tenure" /> 
                            </label>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}
