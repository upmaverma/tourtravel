import axios from 'axios';
import React, { Component } from 'react'
import './popularplace.css';
import { Link } from 'react-router-dom';

const url = "https://travelapilive.herokuapp.com/traveltype";

class popularplace extends Component {
    constructor() {
        super()

        this.state = {
            type: ''
        }
    }

    traveltype = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <>
                        <Link to={`/details/${item._id}`}>
                            <div className="placeArea" key={item._id}>
                                <img src={item.image} alt="place" className="img-responsive  place" />
                                <div class="content">
                                    <div className="travelName">
                                    <h5>{item.name}</h5>
                                    </div>
                                   
                                </div>
                            </div>
                        </Link>
                    </>
                )
            })
        }
    }
    render() {
        return (
            <>
                <div className="popularContent">
                    <h1 className="pouplarContentHeading">Our Popular packages</h1>
                    <div className="container popularPlace">

                        <div className="row">
                            <div className="col-sm">
                                {this.traveltype(this.state.type)}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        axios.get(url)
            .then((response) => {
                this.setState({ type: response.data })
            })
    }

}
export default popularplace;