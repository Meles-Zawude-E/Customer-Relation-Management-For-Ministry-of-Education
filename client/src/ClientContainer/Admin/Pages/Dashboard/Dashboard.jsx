import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../../components/StatBox";
import Reports from '../Reports/Reports';
import Transfer from '../Reports/transferReport/Transfer';
import Scholarship from '../Reports/scholarShipReport/Scholarship';
import Complaint from '../Reports/complaintReport/Complaint';
import StudyAbroad from '../Reports/StudyAbroadReport/StudyAbroad';

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [modalOpen, setModalOpen] = useState(false);
  const [transferModal,setTransferModal] = useState(false);
  const [scholarshipModal,setScholarshipModal] = useState(false);
  const [complaintModal,setCompplaintModal] = useState(false);
  const [studyAbroadModal,setStudyAbroadModal] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
const openTransferModal = () => {
  setTransferModal(true)
}
const closeTransferModal = () => {
  setTransferModal(false)
}
const openScholarshipModal =()=>{
  setScholarshipModal(true)
}
const closeScholarshipModal =()=>{
  setScholarshipModal(false)
}
const openComplaintModal = () =>{
  setCompplaintModal(true)
}
const closeComplaintModal = () =>{
  setCompplaintModal(false)
}
const openStudyAbroadModal =()=>{
  setStudyAbroadModal(true)
}
const closeStudyAbroadModal =()=>{
  setStudyAbroadModal(false)
}
  return (
    <Box m="20px">
        {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={openModal}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
            {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="5"
            subtitle="Number of staff assigned"
            progress="0.85"
            increase="+90%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="441"
            subtitle="New Customer"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="441"
            subtitle="Issues Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2  for specific report*/}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Download Specific report
                <hr/>
              </Typography>
            </Box>
            <Box display="flex " justifyContent="space-between">
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[200]}
              >
                Student Transfer
              </Typography>
              <IconButton
                 >
                <DownloadOutlinedIcon
                   onClick={openTransferModal}
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
            <Box display="flex " justifyContent="space-between">
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[200]}
              >
                Teacher Transfer
              </Typography>
              <IconButton
              >
                <DownloadOutlinedIcon
                onClick={openTransferModal}
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
            <Box display="flex " justifyContent="space-between">
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[200]}
              >
                Scholarship Question
              </Typography>
              <IconButton
              >
                <DownloadOutlinedIcon
                onClick={openScholarshipModal}
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
            <Box display="flex " justifyContent="space-between">
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[200]}
              >
                A request to return to work after completing their studies abroad
              </Typography>
              <IconButton
              >
                <DownloadOutlinedIcon
                onClick={openStudyAbroadModal}
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
            <Box display="flex " justifyContent="space-between">
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[200]}
              >
                Various academic and administrative complaints
              </Typography>
              <IconButton
              onClick={openComplaintModal}
              >
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          </Box>
          </Box>
          <Reports  title="All Reports" modalOpen={modalOpen} closeModal={closeModal} />
          <Transfer  title="Transfer Reports" transferModal={transferModal} closeTransferModal={closeTransferModal} />
          <Scholarship  title="Scholarship Reports" scholarshipModal={scholarshipModal} closeScholarshipModal={closeScholarshipModal} />
          <Complaint  title="Complaint Reports" complaintModal={complaintModal} closeComplaintModal={closeComplaintModal} />
          <StudyAbroad  title="Request to return to work after studying abroad" studyAbroadModal={studyAbroadModal} closeStudyAbroadModal={closeStudyAbroadModal} />
    </Box>
  )
}
