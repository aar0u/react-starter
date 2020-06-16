import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Breadcrumb, Grid } from 'semantic-ui-react'
import "./App.css";
import Report from "./Report";
import LoginForm from "./LoginForm";
import ReportStub from "./ReportStub";

const sections = [
  { key: 'Home', content: 'Home', href: '/home' },
  { key: 'Connect', content: 'Connect', href: '/' },
  { key: 'Report', content: 'Report', href: '/report' },
  { key: 'Report Stub', content: 'Report Stub', href: '/report-stub' },
]

export default () => {
  return (
    <BrowserRouter>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Breadcrumb icon='paperclip' sections={sections} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/report" component={Report} />
        <Route path="/report-stub" component={ReportStub} />
        <Route path="/home" render={() => (<div className="App"><h1>Dashboard</h1></div>)} />
      </Switch>
    </BrowserRouter>
  );
}
