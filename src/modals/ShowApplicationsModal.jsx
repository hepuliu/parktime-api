// Jessica

import React, {Component} from 'react';
import uuid from 'uuid/v4';
import {Modal, Button, Form, FormGroup, FormControl, Col, ControlLabel} from 'react-bootstrap';

class ShowApplicationsModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            applications: [],

            selected: null,
            page: 'select'
        }
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.getApplications(() => {
            this.setState({ showModal: true });
        });
    }

    change = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    getApplications = (cb) => {
        fetch(`/dogs/${this.props.dogID}/jobs/${this.props.job.job_id}/applications`, {
            credentials: "same-origin"
        }).then(resp => {

            if (resp.status !== 200) {
                console.log(resp.status);
                return;
            }
            resp.json().then(applications => {
                console.log(applications);
                this.setState({applications: applications});
                cb();
            });
        }).catch(err => {
            console.log(err);
        });
    }

    select = (application) => {
        return () => {
            fetch(`/dogs/${this.props.dogID}/jobs/${this.props.job.job_id}/applications/${application.application_id}`, {
                method: 'PUT',
                credentials: "same-origin"
            }).then(resp => {
                if (resp.status !== 200){
                    // TODO: error handling
                    console.log(resp.status);
                    return;
                }
                this.setState({page: 'payment'})
                console.log(JSON.stringify(resp));
            }).catch(err => {
                console.log(err);
            });
        };
    }

    render() {
        let applicationComponent = this.state.applications.map(application => {
            return (
              <div>
              <dl className="dl-vertical" id="job-dis">
                <dd key={uuid()}></dd>
                &nbsp;
                <dt>Message : </dt>
                <dd>{application.application_description}</dd>
                    <Button bsSize="small" onClick={this.select(application)} id="select-btn">
                      <span className="glyphicon glyphicon-ok"></span>  Select
                    </Button>
                </dl>
                </div>
            );
        });

        let paymentComponent = (
            <div>
                <h1>PAYMENT</h1>
            </div>
        );

        let mainComponent = null;

        if (this.state.page === 'select') {

            mainComponent = applicationComponent;

        } else if (this.state.page === 'payment') {

            mainComponent = paymentComponent;

        }

        // let mainComponent = this.state.page == 1 ? applicationComponent : paymentComponent;

        return (
            <div>
                <Button bsSize="small" onClick={this.open}>
                    <i className="fa fa-plus fa-fw" aria-hidden="true"></i>
                    &nbsp;
                    Show Applications
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>All Applications for {this.props.job.job_title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {mainComponent}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}><span className="glyphicon glyphicon-remove"></span>  Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ShowApplicationsModal;
