

const Contents = () => {
    return (        
        <div className="container">
            <h2 className="mt-2">Notifications</h2>
            <div className="row">                
                <div className="row">
                    <table className="mt-3 ml-3 table table-border">
                        <tbody>
                            <tr>
                                <th scope="row">Category</th>
                                <td>SOLSMail</td>
                            </tr>
                            <tr>
                                <th scope="row">Date/Time</th>
                                <td>13-03-2024 03:45:01 pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Message</th>
                                <td>
                                    <p className=""><b>Title:</b> Payment Reminder- Trimester 1 2024 2nd Installment Due 30th March, 2024</p>
                                    <br />
                                    <p className=""><b>Message:</b> This is a reminder that you have tution fees for the 2nd installment of Trimester 1 2024 - Due 18th March 2024</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                </div>
                <div className="row">
                    <table className="ml-3 table table-border">
                        <tbody>
                            <tr>
                                <th scope="row">Category</th>
                                <td>SOLSMail</td>
                            </tr>
                            <tr>
                                <th scope="row">Date/Time</th>
                                <td>13-01-2024 05:45:01 pm</td>
                            </tr>
                            <tr>
                                <th scope="row">Message</th>
                                <td>
                                    <p className=""><b>Title:</b> Payment Reminder- Trimester 1 2024 1st Installment Due 1st of January, 2024</p>
                                    <br />
                                    <p className=""><b>Message:</b> This is a reminder that you have tution fees for the 1st installment of Trimester 1 2024 - Due 20th january 2024</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Contents;