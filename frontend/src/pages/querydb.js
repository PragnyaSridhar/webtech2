import React from 'react';
import M from "materialize-css";


import GenNav from '../components/nav.js';
import Footer from '../components/footer.js';
import QueryForm from '../components/queryform.js';

class Query extends React.Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() { 
		if(document.cookie!==""){
        return(
        <>
        <GenNav />
		<div className="bod">
        <div className="row">
            <div className = "col s10 offset-s1">
            <h3>Query DB</h3>
            </div>
        </div>
        
        <QueryForm />
		</div>
        <Footer />
        </>
		)
		}
		else{
			window.location.href="/";
		}
    }
}

export default Query;