import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Link } from "react-router-dom";

class PatchNotes extends Component {
    render(){
        return (
        <section className="patch-table-container">
            <div className="patch-table">
            <h2>Patch Notes</h2>
            <Link to="#">
                <button className="arrow">View All</button>
            </Link>
            <MDBTable hover>
                <MDBTableHead>
                <tr>
                    <th>Patch</th>
                    <th>Description</th>
                </tr>
                </MDBTableHead>
                <MDBTableBody>
                <tr>
                    <td><img src={require('../../../imgs/patchnote.png')} alt="Banner"></img></td>
                    <td>[Patch Note] July 23rd</td>
                </tr>
                <tr>
                    <td><img src={require('../../../imgs/kirze.png')} alt="Banner"></img></td>
                    <td>[Patch Note] July's 2nd New Hero [Kirze]</td>
                </tr>
                <tr>
                    <td><img src={require('../../../imgs/patchnote.png')} alt="Banner"></img></td>
                    <td>[Patch Note] July 16th Updates</td>
                </tr>
                </MDBTableBody>
            </MDBTable>
            </div>
        </section>
        );
    }
}
  
export default PatchNotes;