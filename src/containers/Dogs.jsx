// Jessica 
// when logged in as owner, I can add a dog profile

import React, {Component} from 'react';
import uuid from 'uuid/v4';
import {Grid, Row, Col, Button, ButtonToolbar, Panel, PageHeader, ListGroup, ListGroupItem} from 'react-bootstrap';
import NewDogModal from '../modals/NewDogModal';
import NewJobModal from '../modals/NewJobModal';
import NewScheduleModal from '../modals/NewScheduleModal';
import DeleteDogModal from '../modals/DeleteDogModal';
import DeleteJobModal from '../modals/DeleteJobModal';
import DeleteScheduleModal from '../modals/DeleteScheduleModal';
import ShowApplicationsModal from '../modals/ShowApplicationsModal';

class Dogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dogs: []
        }
    }

    componentDidMount() {
        this.getDogs();
    }

    getDogs = () => {
        fetch('dogs/all')
        .then(resp => {
            if (resp.status !== 200) {
                // TODO: error handling
                return;
            }
            resp.json().then(dogs => {
                this.setState({dogs: dogs});
            })
        }) .catch(err => {
            console.log('error fetching list of dogs');
        })
    }

    scheduleList = (dog,job) => {
        return job.schedules.map(schedule => {
            return (
                <div key={uuid()}>
                    <ListGroupItem>
                        {schedule.schedule_status}: {schedule.schedule_start_time} - {schedule.schedule_end_time}
                    </ListGroupItem>
                    <DeleteScheduleModal dogID={dog.dog_id} jobID={job.job_id} scheduleID={schedule.schedule_id} getDogs={this.getDogs} />
                </div>
            );
        });
    }

    jobList = (dog) => {
        return dog.jobs.map(job => {
            return (
                <ListGroupItem key={uuid()}>
                    <Row className="show-grid">
                        <Col md={12}>
                            #{job.job_id} {job.job_title} - {job.job_description} - {job.job_rate} - {job.job_status}
                        </Col>
                    </Row>
                    <ButtonToolbar>
                        <NewScheduleModal dogID={dog.dog_id} jobID={job.job_id} getDogs={this.getDogs} />
                        <DeleteJobModal dogID={dog.dog_id} jobID={job.job_id} getDogs={this.getDogs} />
                        <ShowApplicationsModal job={job} />
                    </ButtonToolbar>
                    <Row className="show-grid">
                        <Col md={12}>
                            <br />
                            <ListGroup>
                                {this.scheduleList(dog, job)}
                            </ListGroup>
                        </Col>
                    </Row>
                </ListGroupItem>
            );
        });
    }

    dogList = () => {
        return this.state.dogs.map(dog => {
            return (
                <Panel key={uuid()} header={`#${dog.dog_id} ${dog.dog_name} (${dog.dog_age}) ${dog.dog_breed}`}>
                    <Row className="show-grid">
                        <Col md={12}>
                            <ButtonToolbar>
                                <NewJobModal dogID={dog.dog_id} getDogs={this.getDogs}/>
                                <DeleteDogModal dogID={dog.dog_id} getDogs={this.getDogs}/>                
                            </ButtonToolbar>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={12}>
                            {dog.dog_description}
                        </Col>
                    </Row>
                    <br />
                    <Row className="show-grid">
                        <Col md={12}>
                            <ListGroup>
                                {this.jobList(dog)}
                            </ListGroup>
                        </Col>
                    </Row>
                </Panel>
            );
        })
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12}>
                        <PageHeader>
                            My Dogs &nbsp;
                            <small>Manage your dogs</small>
                        </PageHeader>
                        <ButtonToolbar>
                            <NewDogModal getDogs={this.getDogs} />
                        </ButtonToolbar>
                    </Col>
                </Row>
                <br/>
                <Row className="show-grid">
                    <Col md={12}>
                        {this.dogList()};
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Dogs;

// <DeleteJobModal getDogs={this.getDogs} dogID={dog.dog_id} />
// <DeleteDogModal getDogs={this.getDogs} dogID={dog.dog_id} />

