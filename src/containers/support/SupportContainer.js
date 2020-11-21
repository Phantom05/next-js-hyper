import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MainWrapper } from "@/components/common/wrapper";
import styled from "@emotion/styled";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 700,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="공지사항" {...a11yProps(0)} />
        <Tab label="자주묻는질문" {...a11yProps(1)} />
        <Tab label="이용안내" {...a11yProps(2)} />
        <Tab label="사칭주의" {...a11yProps(3)} />
        <Tab label="QnA" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        공지사항
      </TabPanel>
      <TabPanel value={value} index={1}>
        자주묻는질문
      </TabPanel>
      <TabPanel value={value} index={2}>
        이용안내
      </TabPanel>
      <TabPanel value={value} index={3}>
        사칭주의
      </TabPanel>
      <TabPanel value={value} index={4}>
        QnA
      </TabPanel>
    </div>
  );
}

function SupportContainer(props) {
  return (
    <Styled.SupportContainer>
      <MainWrapper>
        <h1 className="support__title">Support</h1>
        <div className="container">
          <VerticalTabs />
        </div>
        <div>Support </div>
        <div>QnA</div>
        <div>Notice</div>
      </MainWrapper>
    </Styled.SupportContainer>
  );
}
const Styled = {
  SupportContainer: styled.div`
    .container {
      margin-top: 50px;
    }
    .support__title {
      font-size: 50px;
    }
  `,
};

export default SupportContainer;
