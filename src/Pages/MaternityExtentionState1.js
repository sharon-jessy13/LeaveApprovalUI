import React, { useState } from 'react';
import '../Styles/MaternityExtentionState1.css';
import Header from '../Components/Header'; // Assuming you have this component
import Group from '../Assets/Group.svg';
import note from '../Assets/note.svg';
import policy from '../Assets/policy.svg';

const MaternityExtentionState1 = () => {
    const [formData, setFormData] = useState({
        requestType: 'apply',
        dayType: 'full',
        leaveType: 'Maternity Extension',
        fromDate: '2025-08-08',
        toDate: '2025-08-30',
        reason: 'Work on Weekend for Project deployment',
        comment: 'I have an important personal matter to attend to at my Home town.',
        acknowledged: true,
        proofFile: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, proofFile: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Leave application submitted successfully!');
    };

    return (
        <>
            <Header />
            <div className="maternityExtention-form-container">
                <header className="maternityExtention-form-header">
                    <div className="maternityExtention-header-title">
                        <img src={Group} alt="Form icon" />
                        <h2>Apply/Cancel Leave</h2>
                    </div>
                    <div className="maternityExtention-header-info">
                        <span>You have <strong>30 Days Leaves</strong> for Maternity Extension</span>
                        <a href="#" className="note-link">
                            <img src={note} alt="Note icon" />
                            
                        </a>
                    </div>
                </header>

                <form className="maternityExtention-leave-form" onSubmit={handleSubmit}>
                    <div className="maternityExtention-form-grid">

                        <div className="col-span-4" >
                            <div className="maternityExtention-form-group">
                                <label className="maternityExtention-form-label">Request Type</label>
                                <div className="maternityExtention-radio-group">
                                    <label><input type="radio" name="requestType" value="apply" checked={formData.requestType === 'apply'} onChange={handleChange} /> Apply Leave</label>
                                    <label><input type="radio" name="requestType" value="cancel" checked={formData.requestType === 'cancel'} onChange={handleChange} /> Cancel Leave</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6">
                            <div className="maternityExtention-form-group">
                                <label className="maternityExtention-form-label">Day Type</label>
                                <div className="maternityExtention-radio-group">
                                    <label><input type="radio" name="dayType" value="full" checked={formData.dayType === 'full'} onChange={handleChange} /> Full day (s)</label>
                                    <label><input type="radio" name="dayType" value="first" checked={formData.dayType === 'first'} onChange={handleChange} /> First Half</label>
                                    <label><input type="radio" name="dayType" value="second" checked={formData.dayType === 'second'} onChange={handleChange} /> Second Half</label>
                                </div>
                            </div>
                        </div>

                        {/* --- Date Fields Row --- */}
                        
                        <div className="col-span-4">
                            <div className="maternityExtention-form-group">
                                <label className="maternityExtention-form-label">Leave Type</label>
                                <select name="leaveType" value={formData.leaveType} onChange={handleChange}>
                                    <option>Maternity Extension</option>
                                    <option>Paternity Leave</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="maternityExtention-form-group">
                                <label className="maternityExtention-form-label">From Date</label>
                                <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="col-span-4">
                            <div className="maternityExtention-form-group">
                                <label className="maternityExtention-form-label">To Date</label>
                                <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} />
                            </div>
                        </div>
                        
                        
                        {/* --- Add to Leave Button Row --- */}
                        <div className="col-span-12">
                            <div className="combined-row">
                                <div className="maternityExtention-form-group">
                                    <label className="maternityExtention-form-label">Proof of Maternity Leave Extension <span className="maternityExtention-required">*</span></label>
                                    <div className="maternityExtention-file-upload-area">
                                        <div>
                                            <input type="file" id="file-upload" onChange={handleFileChange} style={{ display: 'none' }} />
                                            <label htmlFor="file-upload" className="maternityExtention-file-upload-label">
                                                <span>📄 Choose File</span>
                                            </label>
                                            <small className="maternityExtention-file-info">PDF format • Max. 4MB</small>
                                        </div>
                                        <button type="button" className="maternityExtention-btn-upload">↑ Upload</button>
                                    </div>
                                </div>
                                <div className="maternityExtention-add-btn-container">
                                    <button type="button" className="maternityExtention-add-leave-btn">
                                        <span>+</span> Add to Leave list
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12">
                            <div className="maternityExtention-form-group maternityExtention-checkbox-group">
                                <input type="checkbox" id="acknowledgement" name="acknowledged" checked={formData.acknowledged} onChange={handleChange} />
                                <label htmlFor="acknowledgement">I acknowledge that this OOO request is for official purpose only.</label>
                            </div>
                        </div>

                        <div className="col-span-12">
                            <div className="maternityExtention-form-group">
                                <label className="maternityExtention-form-label">Reason for Leave</label>
                                <textarea name="reason" value={formData.reason} onChange={handleChange} rows="3"></textarea>
                            </div>
                        </div>

                        <div className="col-span-12">
                            <div className="maternityExtention-form-group">
                                <label className="maternityExtention-form-label">Comment</label>
                                <textarea name="comment" value={formData.comment} onChange={handleChange} rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <hr className="maternityExtention-divider" />

                    <footer className="maternityExtention-form-footer">
                        
                        <div className="maternityExtention-footer-buttons">
                            <button type="button" className="maternityExtention-btn maternityExtention-btn-cancel">Cancel</button>
                            <button type="submit" className="maternityExtention-btn maternityExtention-btn-submit">Submit</button>
                
                        </div>
                        <a href="#view-policies" className="maternityExtention-view-policies">
                            <img src={policy} className="maternityExtention-policy-icon" alt="Policy Icon"></img> 
                            View Policies
                        </a>
                    </footer>
                </form>
            </div>
        </>
    );
};

export default MaternityExtentionState1;