import Genre from './Genre';

import React, { Component } from 'react'

export class GenresInDb extends Component {

    constructor() {
        super()
        this.state = {
            genresList: []
        }
    }

    cambiarFondo(){
        document.querySelector('.fondoCaja').classList.toggle('bg-secondary')
    }

    componentDidMount() {
        fetch('/api/genres')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(genres => {
                //console.log(genres)
                this.setState({ genresList: genres.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.cambiarFondo}>Genres in Data Base</h6>
                        </div>
                        <div className="card-body fondoCaja">
                        <div className="row">
                                {this.state.genresList.map((genre, index) => {
                                    return <Genre {...genre} key={index} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default GenresInDb

