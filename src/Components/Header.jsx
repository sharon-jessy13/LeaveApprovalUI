import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Divider,
    IconButton,
    ToggleButton
} from '@mui/material';
import { ArrowBack, AlarmOn, Assignment } from '@mui/icons-material';
import '../Styles/Header.css';
import avthar from '../Assets/Avatars.svg';
import Clip from '../Assets/Clip.svg';
import info from '../Assets/info.svg';
import arrow from '../Assets/arrow.svg'
export default function Header() {
    const [workflowState, setWorkflowState] = useState('Enployee Submit');
    const employee = {
        name: "Manoj Kandan M",
        genId: "25504878",
        email: "manoj.kandan@partner.samsung.com",
        designation: "Outsourcing",
        division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
        manager: "Ravindra S R (06786669)",
        avatar: "Avatars.svg"
    };


    return (
        <>
            <Box className="hr-header-container">
                <Typography variant="caption" className="breadcrumb">
                    My Workspace &gt; Leave Request
                </Typography>

                <Box className="header-row">
                    <Box display="flex" alignItems="center" gap={1}>
                        <IconButton size="small">
                            <ArrowBack />
                        </IconButton>
                        <Typography variant="body2">Leave Request or Cancel.{workflowState} </Typography>

                    </Box>
                    <AlarmOn className="clock-icon" />
                </Box>
                <Grid container alignItems="center">
                    {/* Employee Details */}

                    <div class="employee-details">
                        <div class="avatar-wrapper">
                            <img src={avthar} class="avatar" />
                            <span class="online-indicator"></span>
                        </div>
                        <div class="employee-info">
                            <div>
                                <strong>{employee.name} • Gen ID: {employee.genId}</strong>
                            </div>
                            <div class="employee-email">{employee.email}</div>
                        </div>
                    </div>

                    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

                    {/* Designation */}
                    <Grid item xs={12} sm="auto" sx={{ px: 2 }}>
                        <Typography variant="body2" color="text.secondary">Designation</Typography>
                        <Typography fontWeight="bold">{employee.designation}</Typography>
                    </Grid>

                    {/* Divider */}

                    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />


                    {/* Division */}
                    <Grid item xs={12} sm="auto" sx={{ px: 2 }}>
                        <Typography variant="body2" color="text.secondary">Division</Typography>
                        <Typography fontWeight="bold">{employee.division}</Typography>
                    </Grid>

                    {/* Divider */}

                    <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />


                    {/* Manager */}
                    <Grid item xs={12} sm="auto" sx={{ px: 2 }}>
                        <Typography variant="body2" color="text.secondary">Manager</Typography>
                        <Typography fontWeight="bold">{employee.manager}</Typography>
                    </Grid>
                </Grid>

                <div className="balance-overview-header">
                    <div className="balance-overview-title">
                        <img src={Clip} className='Leave-Clip-icon' alt="Balance Overview Icon" />
                        <h2>Leave Balance Overview</h2>
                        <img src={info} className='Leave-info-icon' alt="Information Icon" />
                    </div>
                    <div className="financial-year-selector">
                        <span className="financial-year-label">
                            Financial year
                        </span>
                        <div>
                            <div className="radio-group-horizontal">
                                <label className="radio-label">
                                    <input type="radio" name="financialYear" value="2025" defaultChecked />
                                    <span className="radio-text">2025</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="financialYear" value="2024" />
                                    <span className="radio-text">2024</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="leave-cards">
                    <div className="card cl">
                        <span className="card-title">Casual Leave (CL)</span>
                        <span className="card-days">5 days</span>
                    </div>
                    <div className="card sl">
                        <span className="card-title">Service Leave (SL)</span>
                        <span className="card-days">5 days</span>
                    </div>
                    <div className="card pl">
                        <span className="card-title">Privilege Leave (PL)</span>
                        <span className="card-days">0 days</span>
                    </div>
                    <div className="card wfh">
                        <span className="card-title">Additional WFH</span>
                        <span className="card-days">12 days</span>
                    </div>
                    <div className="card long-sl">
                        <span className="card-title">Long Service Leave</span>
                        <span className="card-days">5 days</span>
                    </div>
                    <div className="card extra-sl">
                        <span className="card-title">Service Leave (PL)</span>
                        <span className="card-days">12 days</span>
                    </div>
                    <div className="card maternity">
                        <span className="card-title">Maternity Leave</span>
                        <span className="card-days">182 days</span>
                        <img className="card-arrow" src={arrow}></img>
                    </div>

                </div>



            </Box>
        </>
    );
}