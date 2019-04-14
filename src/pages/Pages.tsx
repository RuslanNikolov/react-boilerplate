import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import SnackbarWrap from '../components/SnackbarWrap';
import { withNamespaces } from 'react-i18next';

import i18n from '../i18n';
import Header from './../containers/Header';
import Footer from '../components/Footer';
import HomePage from '../containers/HomePage';
import SearchPage from '../containers/SearchPage';
import FacilityPage from '../containers/FacilityPage';
import MyProfilePage from '../containers/MyProfilePage';
import ReservationsPage from '../containers/ReservationsPage';

import * as actions from '../actions/activityActions';

const handleChangleLanguage = (lang) => i18n.changeLanguage(lang);

const App = (props) => {
    useEffect( () => {
        props.dispatch(actions.handleGetAllActivities());
    }, []);

    return (
    <div className="main-wrapper">
        <ErrorBoundary>
                <Header onChangeLanguage={handleChangleLanguage}/>
                <main className="main-wrapper__page-content">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/facilities/:id" component={FacilityPage} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/forgottenPassword" component={ForgottenPasswordComponent} />
                        <Route path="/registration" component={RegistrationComponent} />
                        <Route path="/myprofile" exact component={MyProfilePage} />
                        <Route path="/myprofile/reservations" component={ReservationsPage} />
                        <Route path="/myprofile/addFacility" component={AddFacilityPage} />
                        <Route path="/myprofile/addNews" component={AddNewsPage} />
                        <Route path="/myprofile/myfacilities" component={OwnerFacilitiesInfo} />
                        <Route path="/myprofile/editFacility/:id" component={EditFacilityPage} />
                        <Route path="/about" component={AboutUs} />
                        <Route path="/news/:newsItemId?" component={NewsPage}/>
                        <Route path="/addNews" component={AddNewsPage} />
                        <Route path="/updateNews/:newsItemId" component={UpdateNewsPage} />
                        <Route path="/contact" component={ContactUs} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/regConfirmation" component={ConfirmationComponent} />
                        <Route path="/changeForgottenPassword" component={ChangeForgottenPasswordComponent} />
                        <Route path="/notifications" component={NotificationsPage} />
                        <Route path="/admin" component={AdminPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                    <SnackbarWrap />
                </main>
                <Footer />
        </ErrorBoundary>
    </div>);
}

export default withRouter(connect()(withNamespaces()(App)));
