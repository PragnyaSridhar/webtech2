import React from "react";
// import ReactDOM from "react-dom";

// import { NavLink } from "react-router-dom";
import M from "materialize-css";
import GenNav from '../components/nav.js';
import Footer from '../components/footer.js';

class NotApproved extends React.Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() { 
        return(
        <>
        <GenNav />
        <div className="row">
        <div className="col s10 offset-s1">
        <h2>We regret to inform you that your loan has <b>not</b> been approved. Thank you for your time and patience.
        Any inconvinience is highly regretted.</h2>
        </div>
        </div>
        <Footer />
        </>
        )
    }
}

export default NotApproved;