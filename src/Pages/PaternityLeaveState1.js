import React from 'react';
import '../Styles/PaternityLeaveState1.css';
import Header from '../Components/Header';
import note from '../Assets/note.svg';
import Group from '../Assets/Group.svg';
import policy from '../Assets/policy.svg'

const PaternityLeaveState1 = () => {
  const [requestType, setRequestType] = React.useState('apply');
  const [dayType, setDayType] = React.useState('full');
  const [leaveType, setLeaveType] = React.useState('Paternity Leave');
  const [fromDate, setFromDate] = React.useState('2025-08-08');
  const [toDate, setToDate] = React.useState('2025-10-10');
  const [dateOfBirth, setDateOfBirth] = React.useState('2025-08-08');
  const [acknowledged, setAcknowledged] = React.useState(true);
  const [reason, setReason] = React.useState('Work on Weekend for Project deployment');
  const [comment, setComment] = React.useState('I have an important personal matter to attend at my Home town.');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ requestType, dayType, leaveType, fromDate, toDate, dateOfBirth, acknowledged, reason, comment });
    alert('Leave request submitted!');
  };

  return (
    <>
      <Header />
      <div className="leaveForm-container">
        <header className="leaveForm-header">
          <div className="leaveForm-header-title">
            <img src={Group} alt="Form icon" />
            <h2>Apply/Cancel Leave</h2>
          </div>
          <div className="leaveForm-info">
            <p>You have <strong>10 Days Leaves</strong> for Medical Leave</p>
            <img src={note} alt="Note icon" className='note-icon'/>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="leaveForm-form">
          <div className="leaveForm-mainGrid">

            <div className="leaveForm-fieldGroup leaveForm-col-span-2">
              <label className="leaveForm-label">Request Type</label>
              <div className="leaveForm-radioGroup">
                <label><input type="radio" name="requestType" value="apply" checked={requestType === 'apply'} onChange={(e) => setRequestType(e.target.value)} /> Apply Leave</label>
                <label><input type="radio" name="requestType" value="cancel" checked={requestType === 'cancel'} onChange={(e) => setRequestType(e.target.value)} /> Cancel Leave</label>
              </div>
            </div>

            <div className="leaveForm-fieldGroup leaveForm-col-span-3">
              <label className="leaveForm-label">Day Type</label>
              <div className="leaveForm-radioGroup">
                <label><input type="radio" name="dayType" value="full" checked={dayType === 'full'} onChange={(e) => setDayType(e.target.value)} /> Full day(s)</label>
                <label><input type="radio" name="dayType" value="first" checked={dayType === 'first'} onChange={(e) => setDayType(e.target.value)} /> First Half</label>
                <label><input type="radio" name="dayType" value="second" checked={dayType === 'second'} onChange={(e) => setDayType(e.target.value)} /> Second Half</label>
              </div>
            </div>

            
            <div className="leaveForm-fieldGroup leaveForm-col-span-2">
              <label htmlFor="leaveType" className="leaveForm-label">Leave Type</label>
              <select id="leaveType" className="leaveForm-select" value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
                <option>Paternity Leave</option>
                <option>Sick Leave</option>
                <option>Casual Leave</option>
              </select>
            </div>

            <div className="leaveForm-fieldGroup leaveForm-col-span-2">
              <label htmlFor="fromDate" className="leaveForm-label">From Date</label>
              <input id="fromDate" type="date" className="leaveForm-dateInput" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            </div>

            <div className="leaveForm-fieldGroup leaveForm-col-span-2">
              <label htmlFor="toDate" className="leaveForm-label">To From</label>
              <input id="toDate" type="date" className="leaveForm-dateInput" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </div>


            <div className="leaveForm-col-span-6 leaveForm-dob-group">
              <div className="leaveForm-fieldGroup leaveForm-dob-input-wrapper">
                <label htmlFor="dob" className="leaveForm-label">Date of Birth</label>
                <input id="dob" type="date" className="leaveForm-dateInput" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
              </div>
              <button type="button" className="leaveForm-addToListButton">
                <span className="leaveForm-plusIcon">+</span> Add to Leave list
              </button>
            </div>


            <div className="leaveForm-col-span-6">
              <div className="leaveForm-checkboxGroup">
                <input id="acknowledge" type="checkbox" checked={acknowledged} onChange={(e) => setAcknowledged(e.target.checked)} />
                <label htmlFor="acknowledge">I acknowledge that this OOO request is for official purpose only.</label>
              </div>
            </div>

            <div className="leaveForm-fieldGroup leaveForm-col-span-6">
              <label htmlFor="reason" className="leaveForm-label">Reason for Leave</label>
              <textarea id="reason" className="leaveForm-textarea" rows="4" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
            </div>

            <div className="leaveForm-fieldGroup leaveForm-col-span-6">
              <label htmlFor="comment" className="leaveForm-label">Comment</label>
              <textarea id="comment" className="leaveForm-textarea" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
          </div>



          <footer className="leaveForm-footer">
            <div className="leaveForm-actionButtons">
              <button type="button" className="leaveForm-button leaveForm-button-cancel">Cancel</button>
              <button type="submit" className="leaveForm-button leaveForm-button-submit">Submit</button>
            </div>

            <a href="#" className="leaveForm-viewPoliciesLink">
              <img src={policy} className="policy-icon" alt="Policy Icon" />
              View Policies
            </a>
          </footer>
        </form>
      </div>
    </>
  );
};

export default PaternityLeaveState1;