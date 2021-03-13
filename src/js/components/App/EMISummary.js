const EMISummary = props => {
    <div className='emiSummary'>
        <div className='monthly_emi'>
            <h4>Loan EMI</h4>
            <h3>&#8377; { (props.summary.monthly_emi).round()}</h3>
        </div>
        <div className='total_interest'>
            <h4>Total Interest Payable</h4>
            <h3>&#8377; { (props.summary.total_interest).round()}</h3>
        </div>
        <div className='total_payment'>
            <h4>Total Payment</h4>
            <h3>&#8377; { (props.summary.total_payment).round()}</h3>
        </div>
    </div>
}

export default EMISummary
